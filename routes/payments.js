// routes/payments.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";
import { buildSingleStoreOrder, buildMultiStoreOrder } from "../utils/orderHelpers.js";
import { z } from "zod";
import { validate } from "../middleware/validate.js";

dotenv.config();
const router = express.Router();
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntentSchema = z.object({
  order_id: z.number().int().positive(),
  card_id: z.number().int().positive().nullable().optional(),
  payment_method: z.enum(["card", "cash", "paypal", "apple"]).optional()
});

// ======================
// ✅ Créer un PaymentIntent Stripe
// ======================
router.post("/create-payment-intent", verifyToken, validate(createPaymentIntentSchema), async (req, res) => {
  try {
      const { order_id, card_id } = req.validated;
       
    // 🔎 Récupérer la commande
    const order = await prisma.orders.findUnique({
      where: { id: order_id },
      include: {
        order_items: {
          include: {
            products: true,
            supplements: { include: { product: true } }
          }
        }
      }
    });
    
    if (!order) {
      return res.status(404).json({ error: "Commande introuvable" });
    }
    // 🛒 Total produits + suppléments
    let productsTotal = 0;
    order.order_items.forEach(item => {
      let itemTotal = parseFloat(item.price) * item.quantity;
      if (item.supplements?.length) {
        item.supplements.forEach(s => {
          itemTotal += parseFloat(s.price) * s.quantity;
        });
      }
      productsTotal += itemTotal;
    });

    // 💸 Frais service + livraison
    const serviceFee = parseFloat((productsTotal * 0.05).toFixed(2));
    const deliveryFee = parseFloat((5.40).toFixed(2));
    const total = parseFloat((productsTotal + serviceFee + deliveryFee).toFixed(2));

 console.log("🧾 Paiement Intent - calculs:");
    console.log("   ➤ Produits =", productsTotal);
    console.log("   ➤ Service  =", serviceFee);
    console.log("   ➤ Livraison =", deliveryFee);
    console.log("   ➤ Total    =", total);

let paymentIntent;

// 🔹 CAS 1 : carte enregistrée (pm_xxx en DB)
// dans /create-payment-intent
if (card_id) {
  const card = await prisma.payment_methods.findUnique({
    where: { id: parseInt(card_id, 10) }   // ✅ conversion string → int
  });

  if (!card) return res.status(404).json({ error: "Carte introuvable" });

  // 🔎 Charger l'user complet depuis la DB
  const dbUser = await prisma.users.findUnique({
    where: { id: req.user.id },
    select: { stripe_customer_id: true }
  });

  if (!dbUser?.stripe_customer_id) {
    return res.status(400).json({ error: "Utilisateur sans stripe_customer_id" });
  }

  console.log("👤 User Stripe Customer ID:", dbUser.stripe_customer_id);

  paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total * 100),
    currency: "eur",
    customer: dbUser.stripe_customer_id,  // ✅ toujours DB
    payment_method: card.token,           // pm_xxx stocké
    confirm: true,
    capture_method: "manual",             // 👈 bloque mais ne capture pas    
    off_session: true,
    metadata: {
      order_id: order.id,
      user_id: order.user_id
    }
  });

// ✅ Sauvegarder le PaymentIntent dans la commande
await prisma.orders.update({
  where: { id: order.id },
  data: { 
    payment_intent_id: paymentIntent.id,
    status: "awaiting_store"   // ⚡ ajoute ce statut intermédiaire
  }
});
           
console.log("🎯 Carte enregistrée utilisée:", card.token);
console.log("➡️ PaymentIntent renvoyé:", paymentIntent.status);
       
return res.json({
  success: true,
  status: paymentIntent.status,
  id: paymentIntent.id,
  clientSecret: paymentIntent.client_secret
});
}


// 🔹 CAS 2 : Apple Pay
else if (payment_method === "apple") {
  paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(total * 100),
    currency: "eur",
    capture_method: "manual",
    automatic_payment_methods: { enabled: true },
    metadata: {
      order_id: order.id,
      user_id: order.user_id
    }
  });

  await prisma.orders.update({
    where: { id: order.id },
    data: {
      payment_intent_id: paymentIntent.id,
      status: "awaiting_store"
    }
  });

  return res.json({
    clientSecret: paymentIntent.client_secret,
    id: paymentIntent.id
  });
}


  } catch (err) {
    console.error("❌ Erreur create-payment-intent:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


// --- Webhook Stripe (raw body obligatoire) ---
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("⚠️ Erreur webhook Stripe:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log("📩 Webhook Stripe reçu :", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const orderId = session.metadata?.order_id;
      if (orderId) {
        await prisma.orders.update({
          where: { id: parseInt(orderId) },
          data: { status: "paid" },
        });
        console.log(`🟢 Commande ${orderId} marquée comme payée ✅`);
      }
    }

    res.json({ received: true });
  }
);

const calculateSchema = z.object({
  items: z.array(
    z.object({
      id: z.number().int().positive(),
      price: z.number().positive(),
      quantity: z.number().int().positive(),
    })
  ),
});

// ⚡ Nouveau endpoint pour juste calculer les frais
router.post("/calculate", validate(calculateSchema), async (req, res) => {
  try {
    const { items } = req.validated;

    
    // sous-total
    const subtotal = items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0
    );

    const serviceFee = parseFloat((subtotal * 0.05).toFixed(2));
    const deliveryFee = subtotal > 100 ? 10 : subtotal > 50 ? 5 : 3;
    const total = subtotal + serviceFee + deliveryFee;

    res.json({ subtotal, serviceFee, deliveryFee, total });
  } catch (err) {
    console.error("Erreur calcul:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

const addCardSchema = z.object({
  paymentMethodId: z.string().min(1, "paymentMethodId requis"),
});

// ✅ Ajouter une carte de crédit (via Stripe)
router.post(
  "/add-card",
  verifyToken,
  validate(addCardSchema),
  async (req, res) => {
  try {
      const { paymentMethodId } = req.validated;

    if (!paymentMethodId) {
      return res.status(400).json({ error: "paymentMethodId manquant" });
    }

    // 🔎 Récupérer l’utilisateur
    const user = await prisma.users.findUnique({
      where: { id: req.user.id }
    });

    if (!user || !user.stripe_customer_id) {
      return res.status(400).json({ error: "Utilisateur sans stripe_customer_id" });
    }

    // 📌 Vérifier combien de cartes il a déjà
    const existingCards = await prisma.payment_methods.findMany({
      where: { user_id: req.user.id }
    });

    if (existingCards.length >= 2) {
      return res.status(400).json({ error: "Vous ne pouvez enregistrer que 2 cartes maximum." });
    }

    // 🔗 Attacher la carte au customer Stripe
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: user.stripe_customer_id
    });

    // (Optionnel) définir comme carte par défaut
    await stripe.customers.update(user.stripe_customer_id, {
      invoice_settings: { default_payment_method: paymentMethodId }
    });

    // 🔎 Récupérer les infos depuis Stripe
    const pm = await stripe.paymentMethods.retrieve(paymentMethodId);

    if (!pm || pm.type !== "card") {
      return res.status(400).json({ error: "Méthode de paiement invalide" });
    }

    // 🔍 Vérifier si une carte identique existe déjà (brand + last4)
    const duplicate = await prisma.payment_methods.findFirst({
      where: {
        user_id: req.user.id,
        brand: pm.card.brand,
        last4: pm.card.last4
      }
    });

    if (duplicate) {
      return res.status(400).json({ error: "Cette carte est déjà enregistrée." });
    }

    // 💾 Sauvegarde en base
    const card = await prisma.payment_methods.create({
      data: {
        user_id: req.user.id,
        type: "card",
        provider: "stripe",
        token: pm.id, // ⚡ id Stripe (pm_xxx)
        last4: pm.card.last4,
        brand: pm.card.brand,
      },
    });

    res.json(card);
  } catch (err) {
    console.error("❌ Erreur add-card:", err);
    res.status(500).json({ error: "Impossible d’enregistrer la carte" });
  }
});


// ✅ Récupérer toutes les cartes enregistrées de l’utilisateur
router.get("/my-cards", verifyToken, async (req, res) => {
  try {
    const cards = await prisma.payment_methods.findMany({
      where: { user_id: req.user.id, type: "card" },
      select: {
        id: true,
        brand: true,
        last4: true,
        provider: true,
        created_at: true,
      },
      orderBy: { created_at: "desc" }
    });

    res.json(cards);
  } catch (err) {
    console.error("❌ Erreur my-cards:", err);
    res.status(500).json({ error: "Impossible de récupérer les cartes" });
  }
});

// ✅ Supprimer une carte enregistrée
router.delete("/my-cards/:id", verifyToken, async (req, res) => {
  try {
    const cardId = parseInt(req.params.id, 10);   // 👈 params, pas body
    if (isNaN(cardId)) {
      return res.status(400).json({ error: "card_id invalide" });
    }

    // Vérifier que la carte appartient bien à l’utilisateur
    const card = await prisma.payment_methods.findUnique({
      where: { id: cardId },
    });

    if (!card || card.user_id !== req.user.id) {
      return res.status(404).json({ error: "Carte introuvable ou non autorisée" });
    }

    // Supprimer la carte
    await prisma.payment_methods.delete({
      where: { id: cardId },
    });

    res.json({ success: true, message: "Carte supprimée avec succès" });
  } catch (err) {
    console.error("❌ Erreur suppression carte:", err);
    res.status(500).json({ error: "Impossible de supprimer la carte" });
  }
});

const defaultCardSchema = z.object({
  id: z.string().regex(/^\d+$/, "ID invalide"), // récupéré depuis params
});

// ✅ Définir une carte par défaut
router.post("/my-cards/:id/default", verifyToken,  async (req, res) => {
  try {
const cardId = parseInt(req.body.card_id, 10);
if (isNaN(cardId)) {
  return res.status(400).json({ error: "card_id invalide" });
}

    const card = await prisma.payment_methods.findUnique({
      where: { id: cardId },
    });

    if (!card || card.user_id !== req.user.id) {
      return res.status(404).json({ error: "Carte introuvable ou non autorisée" });
    }

    // Retirer le flag par défaut des autres cartes du user
    await prisma.payment_methods.updateMany({
      where: { user_id: req.user.id },
      data: { is_default: false },
    });

    // Mettre cette carte en défaut
    await prisma.payment_methods.update({
      where: { id: cardId },
      data: { is_default: true },
    });

    res.json({ success: true, message: "Carte définie par défaut" });
  } catch (err) {
    console.error("❌ Erreur default card:", err);
    res.status(500).json({ error: "Impossible de définir la carte par défaut" });
  }
});

const paymentActionSchema = z.object({
  payment_intent_id: z.string().min(1),
  order_id: z.number().int().positive(),
});


// ✅ Capturer un paiement (après acceptation par le livreur)
router.post("/capture-payment", verifyToken,   validate(paymentActionSchema), async (req, res) => {
  try {
      const { payment_intent_id, order_id } = req.validated;

    console.log("⚡ [CAPTURE] Requête reçue");
    console.log("➡️ PaymentIntent ID:", payment_intent_id);
    console.log("➡️ Order ID:", order_id);

    // Vérif commande avant capture
    const order = await prisma.orders.findUnique({ where: { id: order_id } });
    if (!order) {
      console.log("❌ [CAPTURE] Commande introuvable:", order_id);
      return res.status(404).json({ error: "Commande introuvable" });
    }
    if (order.status === "paid") {
      console.log("⚠️ [CAPTURE] Déjà capturé, on ignore.");
      return res.json({ success: true, message: "Déjà capturé" });
    }

    // Capture Stripe
    const intent = await stripe.paymentIntents.capture(payment_intent_id);
    console.log("✅ [CAPTURE] PaymentIntent capturé:", intent.status);

    // Update DB
    await prisma.orders.update({
      where: { id: order_id },
      data: { status: "paid" }
    });
    console.log("✅ [CAPTURE] Commande mise à jour en 'paid'");

    res.json({ success: true, intent });
  } catch (err) {
    console.error("❌ [CAPTURE] Erreur:", err);
    res.status(500).json({ error: "Impossible de capturer le paiement" });
  }
});


// ❌ Annuler un paiement (si le store refuse)
router.post("/cancel-payment", verifyToken, validate(paymentActionSchema), async (req, res) => {
  try {
      const { payment_intent_id, order_id } = req.validated;

    console.log("⚡ [CANCEL] Requête reçue");
    console.log("➡️ PaymentIntent ID:", payment_intent_id);
    console.log("➡️ Order ID:", order_id);

    // Vérif commande avant cancel
    const order = await prisma.orders.findUnique({ where: { id: order_id } });
    if (!order) {
      console.log("❌ [CANCEL] Commande introuvable:", order_id);
      return res.status(404).json({ error: "Commande introuvable" });
    }

    // Cancel Stripe
    const intent = await stripe.paymentIntents.cancel(payment_intent_id);
    console.log("✅ [CANCEL] PaymentIntent annulé:", intent.status);

    // Update DB
    await prisma.orders.update({
      where: { id: order_id },
      data: { status: "cancelled" }
    });
    console.log("✅ [CANCEL] Commande mise à jour en 'cancelled'");

    res.json({ success: true, intent });
  } catch (err) {
    console.error("❌ [CANCEL] Erreur:", err);
    res.status(500).json({ error: "Impossible d’annuler le paiement" });
  }
});
export default router;
