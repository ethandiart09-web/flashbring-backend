// routes/reviews.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * 🔹 Ajouter un avis (sécurisé)
 */
router.post("/", verifyToken, async (req, res) => {
  try {
    console.log("📥 Données reçues du front:", req.body);

    const { rating, title, content, experience_date, store_id, product_id } = req.body;

    // créer l'avis
    const newReview = await prisma.reviews.create({
      data: {
        rating: parseInt(rating),
        title,
        comment: content,
        experience_date: experience_date ? new Date(experience_date) : null,
        approved: false, // ⚠️ tu peux gérer une modération si besoin
        user_id: req.user.id,
        store_id: store_id ? parseInt(store_id) : null,
        product_id: product_id ? parseInt(product_id) : null,
      },
    });

    // récupérer infos user (nom/prénom)
    const user = await prisma.users.findUnique({
      where: { id: req.user.id },
      select: { firstname: true, lastname: true },
    });

    const responseData = {
      ...newReview,
      user: {
        firstname: user?.firstname || null,
        lastname: user?.lastname || null,
      },
    };

    console.log("✅ Avis ajouté en base:", responseData);
    res.json(responseData);
  } catch (error) {
    console.error("❌ Erreur ajout avis:", error);
    res.status(500).json({ error: "Impossible d'ajouter l'avis" });
  }
});

/**
 * 🔹 Lire les avis (public)
 * - Sans paramètre → tous les avis
 * - ?store_id=xxx → avis du store et de ses produits
 * - ?product_id=yyy → avis d’un produit précis
 */

/**
 * ✅ Route 1 : Avis globaux (page d’accueil)
 * Retourne uniquement les avis sans store_id ni product_id
 */
router.get("/global", async (req, res) => {
  try {
    const reviews = await prisma.reviews.findMany({
      where: {
        store_id: null,
        product_id: null,
      },
      include: {
        user: { select: { firstname: true, lastname: true } },
      },
      orderBy: { created_at: "desc" },
    });

    res.json(reviews);
  } catch (error) {
    console.error("❌ Erreur récupération avis globaux:", error);
    res.status(500).json({ error: "Impossible de récupérer les avis globaux" });
  }
});

/**
 * ✅ Route 2 : Avis d’un store (et ses produits)
 * Retourne les avis liés à ce store ou à ses produits
 */
router.get("/store/:storeId", async (req, res) => {
  try {
    const storeId = parseInt(req.params.storeId, 10);

    const reviews = await prisma.reviews.findMany({
      where: {
        OR: [
          { store_id: storeId }, // avis directs sur le store
          { product: { store_id: storeId } }, // avis sur les produits de ce store
        ],
      },
      include: {
        user: { select: { firstname: true, lastname: true } },
        product: { select: { id: true, name: true, store_id: true } },
        store: { select: { id: true, name: true } },
      },
      orderBy: { created_at: "desc" },
    });

    res.json(reviews);
  } catch (error) {
    console.error("❌ Erreur récupération avis store:", error);
    res.status(500).json({ error: "Impossible de récupérer les avis store" });
  }
});
export default router;
