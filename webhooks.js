// webhooks.js
import express from "express";
import Stripe from "stripe";
import prisma from "./prismaClient.js"; 
import { sendInvoiceEmail } from "./utils/email.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export function registerStripeWebhooks(app) {
  app.post(
    "/api/webhook",
    express.raw({ type: "application/json" }),
    async (req, res) => {
      try {
        const sig = req.headers["stripe-signature"];
        const event = stripe.webhooks.constructEvent(
          req.body,
          sig,
          process.env.STRIPE_WEBHOOK_SECRET
        );



switch (event.type) {
case "payment_intent.succeeded": {
  const intent = event.data.object;
  console.log("✅ Paiement réussi:", intent.id);

  // 🔎 Récupérer la commande correspondante
const order = await prisma.orders.findFirst({
  where: { payment_intent_id: intent.id },
  include: {
    order_items: { include: { products: true } }, // 👈 utilise "products"
    user: true,
  },
});

  if (!order) {
    console.warn("⚠️ Aucun order trouvé pour ce payment_intent:", intent.id);
    break;
  }

  // ✅ Mettre la commande à jour
  await prisma.orders.update({
    where: { id: order.id },
    data: { status: "paid" },
  });

  // 📩 Envoyer la facture par email
await sendInvoiceEmail({
  id: order.id,
  customerName: order.user.name,
  customerEmail: order.user.email,
  total: order.total,
  items: order.order_items.map(i => ({
    name: i.products.name,   // 👈 c’est "products"
    qty: i.quantity,
    price: i.price,
  })),
});

  console.log("📩 Facture envoyée à", order.user.email);
  break;
}

  case "payment_intent.payment_failed": {
    const intent = event.data.object;
    console.log("❌ Paiement échoué:", intent.id);

    await prisma.orders.updateMany({
      where: { payment_intent_id: intent.id },
      data: { status: "failed" },
    });
    break;
  }

  case "payment_intent.amount_capturable_updated": {
    const intent = event.data.object;
    console.log("⚠️ Paiement en attente de capture:", intent.id);

    await prisma.orders.updateMany({
      where: { payment_intent_id: intent.id },
      data: { status: "requires_capture" },
    });
    break;
  }

  default:
    console.log("ℹ️ Event non géré:", event.type);
}



        res.json({ received: true });
      } catch (err) {
        console.error("❌ Erreur webhook:", err);
        res.status(400).send(`Webhook Error: ${err.message}`);
      }
    }
  );
}
