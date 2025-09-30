import express from "express";
import OpenAI from "openai";
import { verifyToken } from "../middleware/auth.js";
import { PrismaClient } from "@prisma/client";
import pkg from "pg";

const prisma = new PrismaClient();
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const { Client } = pkg;

// ⚡ Connexion à Postgres
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
await client.connect();


/* ======================================================
   🔹 Utils
====================================================== */
function calculateDeliveryFee(category, distanceKm) {
  if (category === "food") {
    if (distanceKm < 0.5) return 3.0;
    if (distanceKm <= 1) return 3.5;
    return 3.5 + (distanceKm - 1) * 1.2;
  }
  return 3.0 + distanceKm * 1.0;
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function extractContext(message) {
  const budgetMatch = message.match(/(\d+)\s*€?/);
  const peopleMatch = message.match(/(\d+)\s*(personnes|pers|amis|invités)?/i);
  const deliveryMatch = message.match(/(\d+)\s*€?.*(livraison|frais)/i);

  return {
    budget: budgetMatch ? parseInt(budgetMatch[1], 10) : null,
    people: peopleMatch ? parseInt(peopleMatch[1], 10) : 1,
    maxDelivery: deliveryMatch ? parseInt(deliveryMatch[1], 10) : null,
  };
}

// 🔹 Extraction mots-clés
function extractKeywords(message) {
  const stopWords = ["je", "veux", "voudrais", "pour", "moins", "avec", "un", "une", "de", "le", "la", "les", "des", "euro", "€"];
  return message
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopWords.includes(w));
}

// Fonction pour calculer la distance entre deux points (latitude/longitude)
function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // distance en km
}

// Fonction simple pour calculer des frais de livraison
function getDeliveryFee(distanceKm) {
  if (distanceKm <= 2) return 2.0; // 2€ si proche
  if (distanceKm <= 5) return 3.0; // 3€ si moyen
  return 5.0; // 5€ si loin
}

/* ======================
   Chatbot route
====================== */
router.post("/", verifyToken, async (req, res) => {
  try {
    const { message } = req.body;
    const user = await prisma.users.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const { budget, people } = extractContext(message);

// Embedding de la requête
const embRes = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: message,
});
const queryEmb = embRes.data[0].embedding;

// ⚡ Transforme le tableau en string pour pgvector
const queryEmbStr = `[${queryEmb.join(",")}]`;

// Recherche vectorielle SQL
const { rows: raw } = await client.query(
  `
  SELECT p.*, s.name AS store_name, s.lat AS store_lat, s.lng AS store_lng, s.category AS store_category
  FROM products p
  JOIN stores s ON p.store_id = s.id
  WHERE p.is_active = true AND p.stock > 0
  ORDER BY p.embedding <-> $1::vector
  LIMIT 20
  `,
  [queryEmbStr] // <== ici
);

    // Historique d’achats
const history = await prisma.order_items.findMany({
  where: { orders: { user_id: req.user.id } },
  include: {
    products: {
      include: {
        store: true,   // ✅ CORRECT
        product_images: true, // si tu veux les images
        product_options: true // si tu veux les options
      }
    },
    orders: true
  },
  orderBy: { id: "desc" },
  take: 10
});



    const lastPurchases = history.map(o => o.products.name);

    // Enrichir + filtrer
    const enriched = raw.map(p => {
      const servings = p.servings || 1;
      const needed = p.category === "food" ? Math.ceil(people / servings) : 1;
      const total = Number(p.price) * needed;

      let fee = 3;
      if (user.lat && user.lng && p.store_lat && p.store_lng) {
        const km = distanceKm(user.lat, user.lng, p.store_lat, p.store_lng);
        fee = getDeliveryFee(p.store_category, km);
      }

      return { ...p, needed, total, fee, budgetOk: !budget || total <= budget };
    }).filter(p => p.budgetOk);

    // Top 5 produits
    const top = enriched.slice(0, 5);

    // Construire prompt
    const prompt = `
Tu es Ethan, conseiller IA de Flashbring.
Toujours commencer par "Alors ${user.firstname || "cher client"}, ..."
Règles :
- Propose max 5 produits.
- Ne propose jamais hors sujet.
- Si l’utilisateur a un historique, personnalise.

Produits dispo :
${top.map(p => `${p.store_name} – ${p.name} – ${p.price} € – Livraison ${p.fee.toFixed(2)} €`).join("\n")}

Historique : ${lastPurchases.join(", ") || "aucun"}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: prompt }, { role: "user", content: message }],
    });

    const reply = completion.choices[0]?.message?.content;

    res.json({ reply, products: top, history: lastPurchases });
  } catch (err) {
    console.error("❌ Chatbot error:", err);
    res.status(500).json({ error: "Erreur chatbot" });
  }
});

export default router;
