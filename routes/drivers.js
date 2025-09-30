// drivers.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = express.Router();

/**
 * 👤 Postuler pour devenir driver (client connecté)
 */
router.post("/apply", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "client") {
      return res.status(400).json({ error: "Seuls les clients peuvent postuler" });
    }

    const { vehicle } = req.body;

    const user = await prisma.users.update({
      where: { id: req.user.id },
      data: { role: "pending_driver", vehicle }
    });

    res.json({ message: "Candidature enregistrée", user });
  } catch (err) {
    console.error("Erreur apply driver:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

/**
 * 👑 L’admin valide/refuse une candidature driver
 */
router.post("/validate/:id", verifyToken, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Accès réservé à l’admin" });
  }

  const { action } = req.body; // "approve" ou "reject"
  const driverId = parseInt(req.params.id);

  try {
    let newRole = action === "approve" ? "driver" : "client";

    const user = await prisma.users.update({
      where: { id: driverId },
      data: { role: newRole }
    });

    res.json({ message: `Candidature ${action}`, user });
  } catch (err) {
    console.error("Erreur validation driver:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

/**
 * 📋 Liste des drivers (admin seulement)
 */
router.get("/", verifyToken, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Accès réservé à l’admin" });
  }

  try {
    const drivers = await prisma.users.findMany({
      where: { role: "driver" },
      select: { id: true, email: true, firstname: true, lastname: true, phone: true, vehicle: true, created_at: true }
    });
    res.json(drivers);
  } catch (err) {
    console.error("Erreur récupération drivers:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
