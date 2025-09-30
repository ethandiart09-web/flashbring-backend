// routes/users.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { verifyToken, verifyRole } from "../middleware/auth.js";
import fetch from "node-fetch"; // si pas déjà dispo (Node < 18)
import { z } from "zod";
import { validate } from "../middleware/validate.js";
import rateLimit from "express-rate-limit";

const router = express.Router();
const prisma = new PrismaClient();

// utils pour générer un code PIN à 4 chiffres
function generatePin() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

const passwordSchema = z
  .string()
  .min(8, "Mot de passe trop court (min 8 caractères)")
  .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
  .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
  .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
  .regex(/[^A-Za-z0-9]/, "Le mot de passe doit contenir au moins un symbole");

const registerSchema = z.object({
  firstname: z.string().min(2, "Prénom trop court"),
  lastname: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  password: passwordSchema,
});
// --- Limiteur anti-spam inscription ---
const registerLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: "❌ Trop de tentatives d’inscription, attends 1 minute"
});


// ✅ Inscription sécurisée (tout le monde = client au départ)
router.post(
  "/register",
  registerLimiter,                // ⬅️ ajouté ici
  validate(registerSchema),
  async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.validated; // ✅ garanti par validate()

    // Vérifie doublon
    const existing = await prisma.users.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "Email déjà utilisé" });
    }

    // Hash mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création user → toujours client
    const user = await prisma.users.create({
      data: {
        firstname,
        lastname,
        email,
        password_hash: hashedPassword,
        role: "client",
        delivery_code: generatePin(),
      },
    });

    // Génère les tokens
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    // Stocke le refresh token en base
    await prisma.refresh_tokens.create({
      data: {
        user_id: user.id,
        token: refreshToken,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    // Met dans les cookies
    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    // Retourne infos
    return res.json({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      delivery_code: user.delivery_code,
    });
} catch (err) {
  console.error("❌ Erreur /register :", err);

  if (err.code === "P2002") { 
    // Prisma duplicate key
    return res.status(400).json({ error: "Email déjà utilisé" });
  }

  return res.status(500).json({ error: "Erreur serveur lors de l'inscription." });
}
});

// --- Helper pour générer un access token ---
function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" } // accessToken expire dans 1h
  );
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// --- LOGIN ---
router.post("/login", async (req, res) => {
  try {

  const { email, password } = req.validated; // ✅ plus propre que req.body

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    // --- Génération des tokens ---
    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: "15d" }
    );

    // Supprime anciens refresh tokens (optionnel mais + secure)
    await prisma.refresh_tokens.deleteMany({ where: { user_id: user.id } });

    // Sauvegarde du nouveau refreshToken
    await prisma.refresh_tokens.create({
      data: {
        user_id: user.id,
        token: refreshToken,
        expires_at: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      },
    });

    // ✅ Met le refresh token dans un cookie httpOnly sécurisé
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    // --- Réponse (⚡ pas de refreshToken en clair)
    res.json({
      accessToken,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        created_at: user.created_at,
        delivery_code: user.delivery_code,
      },
    });
  } catch (err) {
    console.error("Erreur login:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});



// =========================
// 🔄 Refresh Access Token
// =========================
router.post("/refresh", async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({ error: "Refresh token manquant" });
    }

    const stored = await prisma.refresh_tokens.findUnique({
      where: { token: refreshToken },
      include: { users: true },
    });

    if (!stored) {
      return res.status(401).json({ error: "Refresh token invalide" });
    }

    if (new Date() > new Date(stored.expires_at)) {
      return res.status(401).json({ error: "Refresh token expiré" });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch {
      return res.status(401).json({ error: "Refresh token invalide (signature)" });
    }

    const newAccessToken = jwt.sign(
      { id: decoded.id, email: stored.users?.email, role: stored.users?.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    console.error("Erreur refresh:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Profil de l’utilisateur connecté
router.get("/me", verifyToken, async (req, res) => {
 try {
    const user = await prisma.users.findUnique({
      where: { id: req.user.id },
      include: {
        store: {   // 👈 inclut le store lié
          select: {
            id: true,
            name: true,
            address: true,
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }



res.json({
  id: user.id,
  firstname: user.firstname,
  lastname: user.lastname,
  email: user.email,
  role: user.role,
  created_at: user.created_at,
  delivery_code: user.delivery_code,
  street: user.street,   // ✅ ajoute ici
  postal: user.postal,   // ✅
  city: user.city,       // ✅
   lat: user.lat,    // ✅
  lng: user.lng,    // ✅
  store: user.store,
});
  } catch (err) {
    console.error("Erreur récupération profil:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Mise à jour du profil utilisateur
router.put("/me", verifyToken, async (req, res) => {
  try {
    const { firstname, lastname, street, postal, city } = req.body;
    
    // 🔎 Géocode l’adresse avec l’API Adresse
    let lat = null, lng = null;
    if (street && city) {
      const query = encodeURIComponent(`${street} ${postal} ${city}`);
      const geoRes = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}&limit=1`);
      const geoData = await geoRes.json();
      
      if (geoData.features?.length) {
        const [lon, la] = geoData.features[0].geometry.coordinates;
        lat = parseFloat(la.toFixed(5)); // arrondi
        lng = parseFloat(lon.toFixed(5));
      }
    }   
    
    const updatedUser = await prisma.users.update({
      where: { id: req.user.id },
      data: {
        firstname,
        lastname,
        street,   // ✅ correspond bien à ta table
        postal,
        city,
        lat,
        lng,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        role: true,
        street: true,
        postal: true,
        city: true,
        lat: true,
        lng: true,
      },
    });
        
    res.json({ message: "Profil mis à jour ✅", user: updatedUser });
  } catch (err) {
    console.error("❌ Erreur update profil:", err);
    res.status(500).json({ error: "Impossible de mettre à jour le profil" });
  }
});

// ✅ Déconnexion sécurisée
router.post("/logout", verifyToken, async (req, res) => {
  try {
    // Supprime le refreshToken associé à l’utilisateur
    await prisma.refresh_tokens.deleteMany({
      where: { user_id: req.user.id },
    });

    // Supprime le cookie JWT
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res.json({ message: "Déconnecté avec succès ✅" });
  } catch (err) {
    console.error("Erreur logout:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// routes/users.js


// ✅ Modifier le rôle d’un utilisateur (admin uniquement)
router.patch("/:id/role", verifyToken, verifyRole("admin"), async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { role } = req.body;

    // Vérifie que le rôle est valide
    const validRoles = ["client", "store", "driver", "admin"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ error: "Rôle invalide" });
    }

    // Mets à jour le rôle
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        email: true,
        role: true,
        firstname: true,
        lastname: true,
      },
    });

    // ✅ Si tu passes un client → store, tu peux créer son store ici
    if (role === "store") {
      const existingStore = await prisma.stores.findUnique({
        where: { user_id: updatedUser.id },
      });

      if (!existingStore) {
        await prisma.stores.create({
          data: {
            name: "Magasin en attente", // l’admin ou le store peut modifier après
            address: "Non renseignée",
            user_id: updatedUser.id,
          },
        });
      }
    }

    res.json({ message: "Rôle mis à jour ✅", user: updatedUser });
  } catch (err) {
    console.error("Erreur update rôle:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
