// routes/favorites.js
import express from "express";
import pkg from "pg";
import { verifyToken } from "../middleware/auth.js";

const { Pool } = pkg;
const router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// ➕ Ajouter un store aux favoris
router.post("/:storeId", verifyToken, async (req, res) => {
  try {
    const { storeId } = req.params;
    const userId = req.user.id;

    const result = await pool.query(
      `INSERT INTO favorites (user_id, store_id)
       VALUES ($1, $2)
       ON CONFLICT (user_id, store_id) DO NOTHING
       RETURNING *`,
      [userId, storeId]
    );

    res.json({
      success: true,
      favorite: result.rows[0] || null,
      message: "Ajouté aux favoris",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Erreur serveur" });
  }
});

// ❌ Supprimer un store des favoris
router.delete("/:storeId", verifyToken, async (req, res) => {
  try {
    const { storeId } = req.params;
    const userId = req.user.id;

    await pool.query(
      `DELETE FROM favorites WHERE user_id = $1 AND store_id = $2`,
      [userId, storeId]
    );

    res.json({ success: true, message: "Retiré des favoris" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Erreur serveur" });
  }
});

// 📋 Récupérer les favoris du user avec adresse
router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(
      `SELECT stores.id, stores.name, stores.category, stores.subcategory,
              stores.banner_url, stores.address
       FROM favorites
       JOIN stores ON favorites.store_id = stores.id
       WHERE favorites.user_id = $1`,
      [userId]
    );

    res.json({ success: true, favorites: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Erreur serveur" });
  }
});

export default router;
