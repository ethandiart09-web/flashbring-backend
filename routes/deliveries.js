// routes/deliveries.js

import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken, verifyRole } from "../middleware/auth.js";
import fetch from "node-fetch";
import { sendInvoiceEmail } from "../utils/email.js";

const router = express.Router();
const prisma = new PrismaClient();
async function getDistance(origin, destination) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.warn("⚠️ Pas de clé Google Maps → on renvoie une distance fictive");
    return 2; // distance par défaut (2 km) pour dev
  }

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.rows?.[0]?.elements?.[0]?.status === "OK") {
    const meters = data.rows[0].elements[0].distance.value;
    return meters / 1000; // → km
  }

  console.error("Erreur API Google Maps:", data);
  return 2; // fallback
}

// ✅ Voir ses propres livraisons (driver uniquement, plus simple & sûr)
router.get("/driver", verifyToken, async (req, res) => {
  if (req.user.role !== "driver") {
    return res.status(403).json({ error: "Accès interdit" });
  }

  try {
    const deliveries = await prisma.deliveries.findMany({
      where: { driver_id: req.user.id },
      include: { order: true },
      orderBy: { created_at: "desc" },
    });

    res.json(deliveries);
  } catch (err) {
    console.error("Erreur récupération livraisons:", err);
    res.status(500).json({ error: "Erreur serveur" }); 
  }
});


router.patch("/:id/location", verifyToken, async (req, res) => {
  const deliveryId = parseInt(req.params.id);
  const { lat, lng } = req.body;

  if (req.user.role !== "driver") {
    return res.status(403).json({ error: "Seuls les livreurs peuvent mettre à jour leur position" });
  }

  try {
    const delivery = await prisma.deliveries.findUnique({ where: { id: deliveryId } });

    if (!delivery) {
      return res.status(404).json({ error: "Livraison introuvable" });
    }

    // 🔒 Vérifie que c’est bien le livreur assigné
    if (delivery.driver_id !== req.user.id) {
      return res.status(403).json({ error: "Tu n’es pas assigné à cette livraison" });
    }

    const updated = await prisma.deliveries.update({
      where: { id: deliveryId },
      data: { lat, lng },
    });

    res.json(updated);
  } catch (err) {
    console.error("Erreur update location:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Mettre à jour le statut d’une livraison (driver uniquement)
router.patch("/:id/status", verifyToken, async (req, res) => {
  try {
    const deliveryId = parseInt(req.params.id);
    const { status } = req.body;

    if (req.user.role !== "driver") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    // Liste des statuts valides côté driver
const validStatuses = ["pending_assignment", "assigned", "on_the_way", "delivered"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Statut invalide" });
    }

    // Vérifie que la livraison existe
    const delivery = await prisma.deliveries.findUnique({ where: { id: deliveryId } });
    if (!delivery) {
      return res.status(404).json({ error: "Livraison introuvable" });
    }

    // 🔒 Vérifie que c’est bien le livreur assigné
    if (delivery.driver_id !== req.user.id) {
      return res.status(403).json({ error: "Tu n’es pas assigné à cette livraison" });
    }

// ✅ Mise à jour du statut
const updatedDelivery = await prisma.deliveries.update({
  where: { id: deliveryId },
  data: { status },
});




// 🔄 Si la livraison est marquée "delivered", on met aussi la commande en "completed"
if (status === "delivered") {
  await prisma.orders.update({
    where: { id: delivery.order_id },
    data: { status: "completed" },
  });
}

    res.json(updatedDelivery);
  } catch (err) {
    console.error("Erreur update statut livraison:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});





// ✅ Suivre une livraison (client)
router.get("/:id", verifyToken, async (req, res) => {
  const deliveryId = parseInt(req.params.id);

  try {
const delivery = await prisma.deliveries.findUnique({
  where: { id: deliveryId },
  include: {
    order: true, // ✅ corrige ici
  },
});

    if (!delivery) {
      return res.status(404).json({ error: "Livraison non trouvée" });
    }

    // 🔒 Vérifie que c’est bien le client de la commande ou le livreur assigné
    if (
      req.user.role === "client" &&
      delivery.order.user_id !== req.user.id
    ) {
      return res.status(403).json({ error: "Accès interdit" });
    }

    if (
      req.user.role === "driver" &&
      delivery.driver_id !== req.user.id
    ) {
      return res.status(403).json({ error: "Accès interdit" });
    }

    res.json(delivery);
  } catch (err) {
    console.error("Erreur suivi livraison:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


// 📌 Voir les livraisons disponibles (pas encore prises par un livreur)
router.get("/available", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "driver") {
      return res.status(403).json({ error: "Accès interdit" });
    }

const deliveries = await prisma.deliveries.findMany({
  where: { driver_id: null, status: "pending_assignment" },
  include: { order: true }   // ✅ corrige ici
});

    res.json(deliveries);
  } catch (err) {
    console.error("Erreur get available deliveries:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// 📌 Accepter une livraison
router.post("/:id/accept", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "driver") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const deliveryId = parseInt(req.params.id, 10);
    if (isNaN(deliveryId)) {
      return res.status(400).json({ error: "ID de livraison invalide" });
    }

    const delivery = await prisma.deliveries.findUnique({ where: { id: deliveryId } });
    if (!delivery) {
      return res.status(404).json({ error: "Livraison non trouvée" });
    }

    // 🔒 Vérifie si déjà assignée
    if (delivery.driver_id) {
      return res.status(400).json({ error: "Cette livraison est déjà assignée" });
    }

    // ✅ Assignation au driver connecté
    const updated = await prisma.deliveries.update({
      where: { id: deliveryId },
      data: { driver_id: req.user.id, status: "assigned" },
    });

    res.json(updated);
  } catch (err) {
    console.error("Erreur accept delivery:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


// ✅ Driver valide une livraison avec le code PIN du client
router.post("/:id/validate", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "driver") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const deliveryId = parseInt(req.params.id);
    const { code } = req.body;

    const delivery = await prisma.deliveries.findUnique({
      where: { id: deliveryId },
      include: {
        order: {
          include: {
            user: true,
            order_items: true,
          },
        },
      },
    });

    if (!delivery) {
      return res.status(404).json({ error: "Livraison introuvable" });
    }

    if (delivery.driver_id !== req.user.id) {
      return res.status(403).json({ error: "Tu n'es pas assigné à cette livraison" });
    }

    if (delivery.order.user.delivery_code !== code) {
      return res.status(400).json({ error: "Code PIN invalide" });
    }

    // ✅ Marquer livrée
    const updatedDelivery = await prisma.deliveries.update({
      where: { id: deliveryId },
      data: { status: "delivered" },
    });

 // ✅ Mettre aussi la commande en "completed"
    const order = await prisma.orders.update({
      where: { id: delivery.order_id },
      data: { status: "completed" },
      include: { order_items: true, user: true },
    });

    // 📩 Envoi facture / confirmation livraison
    await sendInvoiceEmail({
      id: order.id,
      customerName: order.user.name,
      customerEmail: order.user.email,
      total: order.total,
      items: order.order_items.map(i => ({
        name: i.product_name,
        qty: i.quantity,
        price: i.price,
      })),
    });



    // 💰 Calcul des gains
    const productsTotal = delivery.order.order_items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0
    );

    const distanceKm = 3; // TODO → API Google Maps
    const driverPay = 3 + Math.max(0, distanceKm - 1) * 1.5;
    const adminFee = parseFloat((productsTotal * 0.05).toFixed(2));

    await prisma.driver_earnings.create({
      data: { driver_id: delivery.driver_id, order_id: delivery.order_id, amount: driverPay },
    });

    await prisma.admin_earnings.create({
      data: { order_id: delivery.order_id, amount: adminFee },
    });

    await prisma.store_earnings.create({
      data: { store_id: delivery.order.store_id, order_id: delivery.order_id, amount: productsTotal },
    });

    res.json({
      message: "Livraison validée ✅",
      delivery: updatedDelivery,
      driverPay,
      adminFee,
      storeEarning: productsTotal,
    });
  } catch (err) {
    console.error("Erreur validation livraison:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// === 💰 Calcul des frais (admin + livreur) ===
function calculateFees(orderTotal, distanceKm, category, vehicle) {
  let driverPay = 0;
  let adminFee = 0;

  if (category === "food") {
    // --- 🍔 FOOD ---
    driverPay = 3 + Math.max(0, distanceKm - 1) * 1.5; // mieux payé que Uber
    adminFee = Math.max(0.5, orderTotal * 0.05); // petite com (max 5%)

    // 🚨 Cap des frais si <= 4 km
    if (distanceKm <= 4 && driverPay + adminFee > 15) {
      const ratio = 15 / (driverPay + adminFee);
      driverPay = Math.max(3, driverPay * ratio);
      adminFee = Math.max(0.5, adminFee * ratio);
    }

  } else {
    // --- 📦 HORS FOOD ---
    if (vehicle === "bike" || vehicle === "foot" || vehicle === "scooter") {
      driverPay = 3.5 + distanceKm * 1.8;
    } else if (vehicle === "car") {
      if (distanceKm < 10) {
        driverPay = 3 + distanceKm * 2;
      } else {
        driverPay = 5 + distanceKm * 2;
      }
    }

    // ✅ Commission progressive
    if (orderTotal <= 100) adminFee = orderTotal * 0.10;   // 10%
    else if (orderTotal <= 200) adminFee = orderTotal * 0.15; // 15%
    else if (orderTotal <= 300) adminFee = orderTotal * 0.20; // 20%
    else if (orderTotal <= 400) adminFee = orderTotal * 0.30; // 30%
    else adminFee = orderTotal * 0.40; // 40% au-dessus de 400€

    // 🚨 Cap des frais si <= 4 km
    if (distanceKm <= 4 && driverPay + adminFee > 15) {
      const ratio = 15 / (driverPay + adminFee);
      driverPay = Math.max(3.5, driverPay * ratio);
      adminFee = Math.max(2, adminFee * ratio);
    }
  }

  return {
    driverPay: parseFloat(driverPay.toFixed(2)),
    adminFee: parseFloat(adminFee.toFixed(2)),
    totalFees: parseFloat((driverPay + adminFee).toFixed(2)),
  };
}



// Driver earnings
router.get("/driver/earnings", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "driver") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const earnings = await prisma.driver_earnings.findMany({
      where: { driver_id: req.user.id },
      orderBy: { created_at: "desc" },
    });

    if (!earnings || earnings.length === 0) {
      return res.json({ message: "Aucun gain pour l’instant", earnings: [] });
    }

    res.json(earnings);
  } catch (err) {
    console.error("Erreur driver earnings:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Admin earnings
router.get("/admin/earnings", verifyToken, verifyRole("admin"), async (req, res) => {
  try {
    const earnings = await prisma.admin_earnings.findMany({
      orderBy: { created_at: "desc" },
    });
    res.json(earnings);
  } catch (err) {
    console.error("Erreur admin earnings:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Enregistrer ou mettre à jour la préférence de livraison
router.post("/preferences", verifyToken, async (req, res) => {
  try {
    const { store_id, delivery_date, delivery_slot } = req.body;

    if (!store_id || !delivery_date || !delivery_slot) {
      return res.status(400).json({ error: "store_id, delivery_date et delivery_slot sont requis" });
    }

    await prisma.user_delivery_preferences.upsert({
      where: { user_id_store_id: { user_id: req.user.id, store_id } },
      update: { delivery_date: new Date(delivery_date), delivery_slot },
      create: { user_id: req.user.id, store_id, delivery_date: new Date(delivery_date), delivery_slot }
    });

    res.json({ success: true, delivery_date, delivery_slot });
  } catch (err) {
    console.error("❌ Erreur préférences livraison:", err);
    res.status(500).json({ error: "Impossible d’enregistrer la préférence" });
  }
});


// ✅ Récupérer la préférence de livraison d’un store précis
router.get("/preferences/:store_id", verifyToken, async (req, res) => {
  try {
    const pref = await prisma.user_delivery_preferences.findUnique({
      where: {
        user_id_store_id: {
          user_id: req.user.id,
          store_id: parseInt(req.params.store_id, 10)
        }
      }
    });

    res.json(pref || {});
  } catch (err) {
    console.error("❌ Erreur récupération préférence livraison:", err);
    res.status(500).json({ error: "Impossible de récupérer la préférence" });
  }
});



export default router;
