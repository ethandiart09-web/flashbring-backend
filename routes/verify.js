// routes/verify.js
import express from "express";
import twilio from "twilio";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = express.Router();

// ⚡ Init Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// 👉 Route 1 : envoyer le code
router.post("/send", verifyToken, async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: "Numéro requis" });

await client.verify.v2.services(process.env.TWILIO_VERIFY_SID)
  .verifications
  .create({ to: phone, channel: "sms" });

    res.json({ message: "Code envoyé ✅" });
  } catch (err) {
    console.error("Erreur Twilio send:", err);
    res.status(500).json({ error: "Impossible d’envoyer le code" });
  }
});

// 👉 Route 2 : vérifier le code
router.post("/check", verifyToken, async (req, res) => {
  try {
    const { phone, code } = req.body;
    if (!phone || !code) return res.status(400).json({ error: "Données manquantes" });

const verification = await client.verify.v2.services(process.env.TWILIO_VERIFY_SID)
  .verificationChecks
  .create({ to: phone, code });

    if (verification.status === "approved") {
      // ✅ Enregistre le numéro en base
      await prisma.users.update({
        where: { id: req.user.id },
        data: { phone }
      });

      return res.json({ message: "Numéro vérifié et enregistré 🎉" });
    }

    res.status(400).json({ error: "Code invalide" });
  } catch (err) {
    console.error("Erreur Twilio check:", err);
    res.status(500).json({ error: "Impossible de vérifier le code" });
  }
});

export default router;
