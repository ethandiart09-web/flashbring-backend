// routes/cart.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";

const prisma = new PrismaClient();
const router = express.Router();

/* ======================================================
   ✅ GET /api/cart → Récupérer panier avec filtres
====================================================== */
router.get("/", verifyToken, async (req, res) => {
  try {
    const { store_id } = req.query;

    console.log("\n==============================");
    console.log("🔥 [API CART] GET /api/cart");
    console.log("👤 User ID:", req.user.id);
    if (store_id) console.log("🏬 Filtre Store ID:", store_id);
    console.log("==============================");


const whereClause = {
  user_id: req.user.id,
  ...(store_id
    ? { product: { is: { store_id: Number(store_id) } } }
    : {})
};

    const cart = await prisma.cart_items.findMany({
      where: whereClause,
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            image_url: true,
            store_id: true
          }
        },
        supplements: {
          include: {
            product: { select: { id: true, name: true, price: true } }
          }
        }
      }
    });
// 🛠 DEBUG : log brut pour voir la structure envoyée
console.log("🛒 [API CART] Contenu brut:", JSON.stringify(cart, null, 2));
    console.log("📦 [API CART] Nombre d’items trouvés:", cart.length);

    if (cart.length === 0) {
      console.log(
        `⚠️ [API CART] Panier ${
          store_id ? `du store ${store_id}` : "global"
        } vide pour user:`,
        req.user.id
      );
    } else {
      cart.forEach((item, idx) => {
        console.log(`   #${idx + 1} ➤ Produit: ${item.product.name}`);
        console.log(`      ID: ${item.product.id}`);
        console.log(`      Quantité: ${item.quantity}`);
        console.log(`      Prix unitaire: ${item.product.price}`);
        console.log(`      Store ID: ${item.product.store_id}`);
      });
    }

    console.log("==============================\n");

    res.json(cart);
  } catch (err) {
    console.error("❌ [API CART] Erreur récupération panier:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ======================================================
// ✅ POST /api/cart/add → Ajout avec distinction des combos
// ======================================================
router.post("/add", verifyToken, async (req, res) => {
  const { product_id, quantity, supplements } = req.body;

  if (!Number.isInteger(product_id) || product_id <= 0) {
    return res.status(400).json({ error: "ID produit invalide" });
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({ error: "Quantité invalide" });
  }

  try {
    // ⚡ On récupère le produit pour vérifier qu’il existe et choper son store_id
    const product = await prisma.products.findFirst({
      where: { id: product_id, is_active: true }
    });

    if (!product) {
      return res.status(404).json({ error: "Produit non trouvé" });
    }

    const store_id = product.store_id; // 👈 maintenant défini correctement
    let cartItem;

    if (supplements && Object.keys(supplements).length > 0) {
      // 👉 Cas avec suppléments
      const allItems = await prisma.cart_items.findMany({
        where: {
          user_id: req.user.id,
          product_id,
          product: { store_id } // filtre via relation
        },
        include: { supplements: true }
      });

      // Cherche un item avec la même combinaison de suppléments
      cartItem = allItems.find(item => {
        if (item.supplements.length !== Object.keys(supplements).length) return false;
        return item.supplements.every(
          s => supplements[s.product_id] === s.quantity
        );
      });

      if (cartItem) {
        cartItem = await prisma.cart_items.update({
          where: { id: cartItem.id },
          data: { quantity: cartItem.quantity + quantity }
        });
      } else {
        cartItem = await prisma.cart_items.create({
          data: {
            user_id: req.user.id,
            product_id,
            quantity,
            supplements: {
              create: Object.entries(supplements).map(([suppId, qty]) => ({
                product_id: parseInt(suppId),
                quantity: qty
              }))
            }
          }
        });
      }
    } else {
      // 👉 Cas sans suppléments
      const existing = await prisma.cart_items.findFirst({
        where: {
          user_id: req.user.id,
          product_id,
          product: { store_id } // filtre via relation
        },
        include: { supplements: true }
      });

      if (existing && existing.supplements.length === 0) {
        cartItem = await prisma.cart_items.update({
          where: { id: existing.id },
          data: { quantity: existing.quantity + quantity }
        });
      } else {
        cartItem = await prisma.cart_items.create({
          data: { user_id: req.user.id, product_id, quantity }
        });
      }
    }

    res.json(cartItem);
  } catch (err) {
    console.error("❌ Erreur ajout panier:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

/* ======================================================
   ✅ POST /api/cart/clear → Vider le panier (par store si store_id fourni)
====================================================== */
router.post("/clear", verifyToken, async (req, res) => {
  try {
    const { store_id } = req.body; // ⚡ on récupère store_id depuis le body
    console.log("🗑️ [API CART CLEAR] user:", req.user.id, "store_id:", store_id);

    let whereClause = { user_id: req.user.id };

    if (store_id) {
      // On supprime seulement les items du store donné
      whereClause = {
        user_id: req.user.id,
product: { is: { store_id: Number(store_id) } }
      };
    }

    const result = await prisma.cart_items.deleteMany({
      where: whereClause
    });

    console.log(`✅ [API CART CLEAR] ${result.count} items supprimés`);
    res.json({
      message: store_id
        ? `Panier du store ${store_id} vidé`
        : "Panier global vidé",
      deleted: result.count
    });
  } catch (err) {
    console.error("❌ [API CART CLEAR] Erreur:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

/* ======================================================
   🔹 Utilitaires
====================================================== */
function calculateDeliveryFee(category, distanceKm) {
  if (category === "food") {
    if (distanceKm < 0.5) return 3.0;
    if (distanceKm <= 1) return 3.5;
    return 3.5 + (distanceKm - 1) * 1.2;
  }
  return 3.0 + distanceKm * 1.0;
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // rayon Terre (km)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}        

/* ======================================================
   ✅ GET /api/cart/checkout → Totaux par store (ou global)
====================================================== */
router.get("/checkout", verifyToken, async (req, res) => {
  try {
    const { store_id, priority } = req.query;
    const isPriority = priority === "true";

    console.log("🔥 [CHECKOUT] Requête reçue pour user:", req.user.id, "store_id:", store_id);


// Vérifier que store_id est bien un nombre valide
const storeIdNum = store_id && !isNaN(Number(store_id)) ? Number(store_id) : null;

const whereClause = {
  user_id: req.user.id,
  ...(storeIdNum ? { product: { is: { store_id: storeIdNum } } } : {})
};

const cartItems = await prisma.cart_items.findMany({
  where: whereClause,
  include: {
    product: {
      select: {
        id: true,
        name: true,
        price: true,
        store_id: true
      }
    },
    supplements: {
      include: { product: { select: { id: true, name: true, price: true } } }
    }
  }
});

    console.log("📦 [CHECKOUT] Items récupérés:", cartItems.length);

    if (!cartItems.length) {
      return res.status(400).json({ error: "Panier vide" });
    }

// 💰 Calcul produits + suppléments
let productsTotal = 0;
for (const item of cartItems) {
  productsTotal += parseFloat(item.product.price) * item.quantity;
  for (const supp of item.supplements) {
    productsTotal += parseFloat(supp.product.price) * supp.quantity;
  }
}

productsTotal = +productsTotal.toFixed(2);
const serviceFee = +(productsTotal * 0.05).toFixed(2);

// 🔹 Calcul des frais de livraison
let deliveryFee = 0;
let store = null;


if (storeIdNum) {
  store = await prisma.stores.findUnique({
    where: { id: storeIdNum },
    select: {
      id: true,
      name: true,
      address: true,
      category: true,
      lat: true,
      lng: true
    }
  });

  const user = await prisma.users.findUnique({
    where: { id: req.user.id },
    select: { id: true, lat: true, lng: true }
  });


  if (store?.lat && store?.lng && user?.lat && user?.lng) {
    const distanceKm = getDistanceKm(user.lat, user.lng, store.lat, store.lng);
    deliveryFee = calculateDeliveryFee(store.category, distanceKm);
    console.log(
      `📍 Distance client→store = ${distanceKm.toFixed(2)} km → Frais livraison = ${deliveryFee.toFixed(2)} €`
    );
  } else {
    deliveryFee = 3.0; // fallback si coordonnées manquantes
    console.warn("⚠️ Coordonnées manquantes → livraison par défaut 3.0 €");
  }

  if (isPriority) {
    deliveryFee += 1.99;
    console.log("⚡ Supplément priorité appliqué → +1.99 €");
  }
}

const total = +(productsTotal + serviceFee + deliveryFee).toFixed(2);

    res.json({
      items: cartItems.map(ci => ({
        name: ci.product.name,
        price: ci.product.price,
        quantity: ci.quantity,
        supplements: ci.supplements.map(s => ({
          name: s.product.name,
          price: s.product.price,
          quantity: s.quantity
        }))
      })),
      productsTotal,
      serviceFee,
      deliveryFee,
      total,
      ...(store ? {
        store: {
          id: store.id,
          name: store.name,
          address: store.address,
          category: store.category
        }
      } : {})
    });

  } catch (err) {
    console.error("❌ [CHECKOUT] Erreur:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});



export default router;
