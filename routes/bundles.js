// bundles.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

/* ======================================================
   🔹 GET /api/bundles/product/:id
   → Récupérer les bundles associés à un produit
====================================================== */
router.get("/product/:id", async (req, res) => {
  const productId = parseInt(req.params.id);

  try {
    const links = await prisma.product_bundles.findMany({
      where: { product_id: productId },
      include: {
        bundle: {
          include: {
            bundle_items: {
              include: { item: true }, // ✅ récupère les produits liés
            },
          },
        },
      },
    });

    console.log("📦 [API BUNDLES] Bruts:", JSON.stringify(links, null, 2));

    // 🔹 Nettoyer doublons éventuels
    const uniqueBundles = [];
    const seen = new Set();

    for (const link of links) {
      if (!link.bundle) continue;
      if (seen.has(link.bundle.id)) continue;
      seen.add(link.bundle.id);

      uniqueBundles.push({
        id: link.bundle.id,
        name: link.bundle.name,
        items: link.bundle.bundle_items.map((i) => ({
          id: i.item.id,
          name: i.item.name,
          price: i.item.price,
          image_url: i.item.image_url,
        })),
      });
    }

    res.json(uniqueBundles);
  } catch (err) {
    console.error("❌ [API BUNDLES] Erreur:", err);
    res.status(500).json({ error: "Impossible de récupérer les bundles" });
  }
});

/* ======================================================
   🔹 GET /api/bundles/store/:id
   → Récupérer tous les bundles liés à un store
====================================================== */
router.get("/store/:id", async (req, res) => {
  const storeId = parseInt(req.params.id);

  try {
    const bundles = await prisma.bundles.findMany({
      where: {
        // ✅ tu relies via products
        product_bundles: {
          some: {
            product: { store_id: storeId },
          },
        },
      },
      include: {
        bundle_items: {
          include: { item: true },
        },
      },
    });

    res.json(
      bundles.map((b) => ({
        id: b.id,
        name: b.name,
        items: b.bundle_items.map((i) => ({
          id: i.item.id,
          name: i.item.name,
          price: i.item.price,
          image_url: i.item.image_url,
        })),
      }))
    );
  } catch (err) {
    console.error("❌ [API BUNDLES STORE] Erreur:", err);
    res.status(500).json({ error: "Impossible de récupérer les bundles du store" });
  }
});

export default router;
