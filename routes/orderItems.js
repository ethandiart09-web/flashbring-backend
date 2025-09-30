import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
const prisma = new PrismaClient();

// ✅ Ajouter un produit à une commande
// ✅ Ajouter un produit à une commande
router.post("/", verifyToken, async (req, res) => {
  try {
    const { order_id, product_id, quantity } = req.body;

    if (!order_id || !product_id || !quantity) {
      return res.status(400).json({ error: "order_id, product_id et quantity sont requis" });
    }

    // On récupère le prix du produit
    const product = await prisma.products.findUnique({
      where: { id: product_id }
    });

    if (!product) {
      return res.status(404).json({ error: "Produit introuvable" });
    }

    const orderItem = await prisma.order_items.create({
      data: {
        order_id,
        product_id,
        quantity,
        price: product.price // ✅ on ajoute le prix du produit
      }
    });

    res.json(orderItem);
  } catch (err) {
    console.error("Erreur ajout order_item:", err);
    res.status(500).json({ error: err.message });
  }
});
// ✅ Lister les produits d’une commande
router.get("/order/:id", verifyToken, async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);

    const items = await prisma.order_items.findMany({
      where: { order_id: orderId },
      include: { products: true } // 👉 inclut les détails du produit
    });

    res.json(items);
  } catch (err) {
    console.error("Erreur récupération order_items:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
