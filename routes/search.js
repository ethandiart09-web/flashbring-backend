// routes/search.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/search", async (req, res) => {
  try {
    const keyword = req.query.q?.toLowerCase() || "";

    const results = await prisma.$queryRawUnsafe(`
      -- STORES
      SELECT s.id,
             s.name AS label,
             'store' AS type,
             s.category::text AS store_category,
             s.banner_url AS banner_url   -- 👈 ajouté
      FROM stores s
      WHERE LOWER(s.name) LIKE '%' || $1 || '%'

      UNION ALL

      -- PRODUCTS
      SELECT p.store_id AS id,
             p.name AS label,
             'product' AS type,
             s.category::text AS store_category,
             NULL AS banner_url           -- 👈 rien pour les produits
      FROM products p
      JOIN stores s ON s.id = p.store_id
      WHERE LOWER(p.name) LIKE '%' || $1 || '%'
         OR LOWER(p.category) LIKE '%' || $1 || '%'
         OR LOWER(COALESCE(p.main_category::text, '')) LIKE '%' || $1 || '%'
         OR LOWER(COALESCE(p.sub_category, '')) LIKE '%' || $1 || '%'
         OR LOWER(COALESCE(p.gender, '')) LIKE '%' || $1 || '%'
         OR LOWER(COALESCE(p.material::text, '')) LIKE '%' || $1 || '%'
      LIMIT 15
    `, keyword);

    res.json(results);
  } catch (err) {
    console.error("❌ [SEARCH ERROR]", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
