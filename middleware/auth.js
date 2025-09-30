// middleware/auth.js
import jwt from "jsonwebtoken";
// backend/prisma.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default prisma;

export async function verifyToken(req, res, next) {
  try {
    let token;

    // 🔎 1. Vérifie le header Authorization
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }
    // 🔎 2. Sinon, regarde dans les cookies (cas Web)
    else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ error: "Utilisateur non authentifié" });
    }

    // ✅ Vérifie le token avec la clé secrète
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 📌 Stocke les infos du user dans req.user
    req.user = decoded;

    return next();
  } catch (err) {
    console.error("❌ Erreur vérification access token:", err.message);
    return res.status(403).json({ error: "Token invalide" });
  }
}

// ✅ Vérifie que l'utilisateur a bien un rôle précis
export function verifyRole(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Utilisateur non authentifié" });
    }
    if (req.user.role !== role) {
      return res.status(403).json({ error: "Accès refusé : rôle insuffisant" });
    }
    next();
  };
}

// ✅ Fonction interne pour rafraîchir automatiquement le token
async function tryRefresh(req, res, next, refreshToken) {
  if (!refreshToken) {
    return res.status(401).json({ error: "Utilisateur non authentifié" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const dbToken = await prisma.refresh_tokens.findUnique({
      where: { token: refreshToken }
    });
    if (!dbToken || dbToken.expires_at < new Date()) {
      return res.status(403).json({ error: "Refresh expiré → reconnectez-vous" });
    }

    const payload = { id: decoded.id, email: decoded.email, role: decoded.role };
    const newAccess = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });

    res.cookie("token", newAccess, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 60 * 1000
    });

    req.user = payload;
    console.log("♻️ Nouveau accessToken généré automatiquement pour", payload.email);
    return next();
  } catch (err) {
    console.error("❌ Erreur refresh:", err.message);
    return res.status(403).json({ error: "Session expirée, reconnectez-vous" });
  }
}
