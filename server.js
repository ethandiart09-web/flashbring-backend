import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import cron from "node-cron";
import jwt from "jsonwebtoken";


// --- Routes ---
import driversRoutes from "./routes/drivers.js";
import ordersRoutes from "./routes/orders.js";
import deliveriesRoutes from "./routes/deliveries.js";
import cartRoutes from "./routes/cart.js";
import usersRoutes from "./routes/users.js";
import storesRoutes from "./routes/stores.js";
import productsRoutes from "./routes/products.js";
import orderItemsRoutes from "./routes/orderItems.js";
import paymentsRoutes from "./routes/payments.js";
import statsRoutes from "./routes/stats.js";
import adminRoutes from "./routes/admin.js";
import favoritesRoutes from "./routes/favorites.js";
import verifyRoutes from "./routes/verify.js";
import reviewsRoutes from "./routes/reviews.js";
import bundlesRoutes from "./routes/bundles.js";
import chatbotRoutes from "./routes/chatbot.js";
import searchRoutes from "./routes/search.js";

import { verifyToken } from "./middleware/auth.js";
import { registerStripeWebhooks } from "./webhooks.js";

dotenv.config();
console.log("📡 DATABASE_URL:", process.env.DATABASE_URL);


const isDev = process.env.NODE_ENV !== "production";
const prisma = new PrismaClient();
prisma.$connect()
  .then(() => console.log("✅ Connexion DB OK"))
  .catch(err => console.error("❌ Connexion DB échouée:", err));

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
app.set("trust proxy", 1);


registerStripeWebhooks(app);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// --- Sécurité Helmet ---
app.use(
  helmet({
    contentSecurityPolicy: false, // ⚠️ désactivé sinon ça bloque ton front
    crossOriginEmbedderPolicy: false,   
    crossOriginResourcePolicy: { policy: "cross-origin" }, // autorise images/fonts
  })
); 
  
app.disable("x-powered-by"); // masque Express

// --- CORS ---
app.use(cors({
origin: "*", // 👉 accepte tout le monde (tu peux restreindre après à ton domaine)
  credentials: true
}));



// --- Middleware admin (God Mode) ---
function verifyGodMode(req, res, next) {
  if (req.user?.email === "ethan.diart09@gmail.com") {
    return next();
  }
  return res.status(403).json({ error: "Accès réservé à l’admin principal" });
}


const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 10,
  message: "❌ Trop de tentatives de connexion, réessaie plus tard"
});


// --- Routes ---
app.use("/api/payments", paymentsRoutes); // gère lui-même raw/json
app.use("/api/drivers", driversRoutes);
app.use("/api/orders", verifyToken, ordersRoutes);
app.use("/api/cart", verifyToken, cartRoutes);
app.use("/api/deliveries", verifyToken, deliveriesRoutes);

// Les vraies routes users
app.use("/api/users", usersRoutes);
app.use("/api/stores", storesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/order-items", orderItemsRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/favorites", favoritesRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/bundles", bundlesRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api", searchRoutes);

// --- Résolution __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// eslint-disable-next-line security/detect-object-injection
app.use(express.static(path.join(__dirname, "public")));

// 🔹 Route pour servir la page de confirmation sans .html
app.get("/order-confirmation", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "order-confirmation.html"));
});


// --- Google Strategy ---
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/google/callback`
}, async (accessToken, refreshToken, profile, done) => {
  // ton code...
  return done(null, {
    id: profile.id,
    email: profile.emails[0].value,
    firstname: profile.name.givenName,
    lastname: profile.name.familyName
  });
}));


// Test rapide Prisma
app.get("/api/test-log", async (req, res) => {
  try {
    const log = await prisma.search_logs.create({
      data: { query: "test", results_count: 1 }
    });
    console.log("✅ [TEST_LOG] insertion réussie :", log);
    res.json(log);
  } catch (err) {
    console.error("❌ [TEST_LOG] erreur Prisma :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.get(
  "/api/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// --- Callback Google ---
app.get(
  "/api/auth/google/callback",
 passport.authenticate("google", { failureRedirect: "/", session: false }),
  async (req, res) => {
    const profile = req.user;

    let user = await prisma.users.findUnique({
      where: { email: profile.email }
    });

 if (!user) {
      // 🔹 Créer Customer Stripe
      const customer = await stripe.customers.create({
        email: profile.email,
        name: `${profile.firstname || ""} ${profile.lastname || ""}`.trim()
      });
 // 🔹 Enregistrer en DB
      user = await prisma.users.create({
        data: {
          email: profile.email,
          firstname: profile.firstname,
          lastname: profile.lastname || "",
          role: profile.email === process.env.SUPERADMIN_EMAIL ? "admin" : "client",
          google_id: profile.id,
          password_hash: "google_oauth",
          stripe_customer_id: customer.id // 👈 important
        }
      });
 } else {
      // ➕ Si l’utilisateur existe mais n’a pas de stripe_customer_id → on en crée un
      if (!user.stripe_customer_id) {
        const customer = await stripe.customers.create({
          email: profile.email,
          name: `${profile.firstname || ""} ${profile.lastname || ""}`.trim()
        });
        await prisma.users.update({
          where: { id: user.id },
          data: { stripe_customer_id: customer.id }
        });
      }

 if (!user.google_id) {
      await prisma.users.update({
        where: { id: user.id },
        data: { google_id: profile.id }
      });
    }
}
// ⚡ AccessToken court
  const payload = { id: user.id, email: user.email, role: user.role };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });
  
res.cookie("token", token, {
    httpOnly: true,
 secure: true, // ⚡ obligatoire si backend en HTTPS
  sameSite: isDev ? "none" : "lax", // pour dev, accepte front http://
    path: "/",
    maxAge: 15 * 60 * 1000
  });

 // ⚡ RefreshToken long (15 jours, et stocké en DB)
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "15d" });

    // Supprimer les anciens refresh de ce user
    await prisma.refresh_tokens.deleteMany({ where: { user_id: user.id } });

    // Sauvegarder le nouveau refresh
    await prisma.refresh_tokens.create({
      data: {
        user_id: user.id,
        token: refreshToken,
        expires_at: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
      }
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 24 * 60 * 60 * 1000
    });

  // ✅ Redirection vers le front
res.redirect(`flashbring://auth?token=${token}&refreshToken=${refreshToken}`);
  }
);

app.get("/api/auth/me", verifyToken, async (req, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        role: true,
        firstname: true,
        lastname: true,
        street: true,
        city: true,
      }
    });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    res.json(user);
    console.log("🌐 /me retourne:", user);
  } catch (err) {
    console.error("❌ Erreur /me:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.get("/api/auth/apple", (req, res) => res.status(501).send("Login Apple pas encore dispo 🚧"));




app.post("/api/contact", async (req, res) => {
  const { firstname, lastname, email, subject, message } = req.body;
  if (!firstname || !lastname || !email || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  // ✅ Traduire la valeur technique (value du select) en libellé français
  const subjectLabels = {
    delivery: "Problème de livraison",
    refund: "Demande de remboursement",
    account: "Problème de compte",
    partnership: "Partenariat",
    other: "Autre",
  };

  // Si la valeur n’existe pas dans le mapping, on met "Demande de contact"
  const subjectText = subjectLabels[subject] || "Demande de contact";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"FlashBring Contact" <${process.env.SMTP_USER}>`,
      to: "ethan.diart09@gmail.com",
      subject: subjectText, // ✅ ici on envoie le texte FR
      text: `De: ${firstname} ${lastname} (${email})\n\n${message}`,
      html: `<p><b>De :</b> ${firstname} ${lastname} (${email})</p>
             <p><b>Message :</b><br>${message}</p>`,
    });

    res.json({ success: true, message: "Email envoyé avec succès ✅" });
  } catch (err) {
    console.error("Erreur email:", err);
    res.status(500).json({ error: "Impossible d’envoyer l’email" });
  }
});




// --- Webhook Google Sheets ---
app.post("/webhook/sheets", async (req, res) => {
  try {
    const { storeId } = req.body;
    if (!storeId) {
      return res.status(400).json({ error: "storeId manquant" });
    }

    await syncStore(storeId);
    res.json({ success: true });
  } catch (err) {
    console.error("Erreur webhook Google Sheets:", err);
    res.status(500).json({ error: "sync échouée" });
  }
});

// Toutes les 5 minutes
cron.schedule("*/5 * * * *", async () => {
  console.log("⏰ CRON: sync Google Sheets...");
  try {
    // Récupère la liste de tes stores dans la DB
    const stores = await prisma.stores.findMany({
      where: { sheet_id: { not: null } },
    });

    for (const store of stores) {
      console.log(`🔄 Sync du store: ${store.name}`);
      await syncStore(store.id);
    }
  } catch (err) {
    console.error("Erreur CRON:", err);
  }
});

// --- BESTSELLERS ---
app.get("/api/products/bestsellers", async (req, res) => {
  try {
    // 1. Compter combien de fois chaque produit a été commandé
    const bestsellers = await prisma.order_items.groupBy({
      by: ["product_id"],
      _sum: { quantity: true },
      orderBy: { _sum: { quantity: "desc" } }
    });

    // 2. Récupérer les infos des produits correspondants
    const products = await prisma.products.findMany({
      where: { id: { in: bestsellers.map(b => b.product_id) } }
    });

    // 3. Fusionner données commandes + produit
    const result = bestsellers.map(b => {
      const product = products.find(p => p.id === b.product_id);
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        orderCount: b._sum.quantity || 0
      };
    });

    res.json(result);
  } catch (err) {
    console.error("Erreur /api/products/bestsellers:", err);
    res.status(500).json({ error: "Impossible de récupérer les bestsellers" });
  }
});

// --- Route test ---
app.get("/api/hello", (req, res) => {
  res.json({ message: "Salut depuis le backend 🚀" });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  // 🔒 Mode développement local avec HTTPS
  const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(`✅ Backend démarré en local sur https://localhost:${PORT}`);
  });
} else {
  // 🌍 Mode Render (production) → Render gère déjà HTTPS
  app.listen(PORT, () => {
    console.log(`✅ Backend démarré sur port ${PORT}`);
  });
}
