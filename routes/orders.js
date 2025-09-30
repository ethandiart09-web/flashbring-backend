// routes/orders.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";
import { requireOwnership } from "../middleware/ownership.js";
import { z } from "zod";
import { validate } from "../middleware/validate.js"; // si ce n’est pas déjà importé

// Helpers multi-store
import { buildSingleStoreOrder, buildMultiStoreOrder, calculateMultiStoreDistance } from "../utils/orderHelpers.js";

// Helpers de livraison (frais, distance, temps)
import { calculateDeliveryFee, getDistanceKm, calculateDeliveryTime } from "../utils/delivery.js";

const router = express.Router();
const prisma = new PrismaClient();


// ✅ Créer une commande à partir du panier utilisateur
router.post("/", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "client" && req.user.role !== "admin") {
      return res.status(403).json({ error: "Seul un client peut passer commande" });
    }

    // récupérer le panier
    const cartItems = await prisma.cart_items.findMany({
      where: { user_id: req.user.id },
      include: {
        product: true,
        supplements: { include: { product: true } }
      }
    });

    if (!cartItems.length) {
      return res.status(400).json({ error: "Aucun produit dans la commande" });
    }


// 💰 total produits + suppléments
const totalProducts = cartItems.reduce((sum, item) => {
  let itemTotal = parseFloat(item.product.price) * item.quantity;

  if (item.supplements?.length) {
    for (const supp of item.supplements) {
      itemTotal += parseFloat(supp.product.price) * supp.quantity;
    }
  }

  return sum + itemTotal;
}, 0);

// 💸 frais
const serviceFee = parseFloat((totalProducts * 0.05).toFixed(2));
const deliveryFee = 5.40;
const total = +(totalProducts + serviceFee + deliveryFee).toFixed(2);

    const store_id = cartItems[0].product.store_id;

// 👉 déterminer moyen de paiement par défaut
let defaultPayment = "apple";

// Cherche une carte par défaut
const defaultCard = await prisma.payment_methods.findFirst({
  where: { user_id: req.user.id, type: "card", is_default: true }
});

if (defaultCard) {
  defaultPayment = `card:${defaultCard.id}`;
} else {
  // Si pas de carte par défaut, tu peux fallback sur la plus récente
  const lastCard = await prisma.payment_methods.findFirst({
    where: { user_id: req.user.id, type: "card" },
    orderBy: { created_at: "desc" }
  });
  if (lastCard) {
    defaultPayment = `card:${lastCard.id}`;
  }
}

// ✅ créer commande avec produits + suppléments liés
    const order = await prisma.orders.create({
      data: {
        user_id: req.user.id,
        store_id,
        total,
        service_fee: serviceFee,
        delivery_fee: deliveryFee,
        status: "pending",
        payment_method: defaultPayment,
        order_items: {
          create: cartItems.map(i => ({
            product_id: i.product_id,
            quantity: i.quantity,
            price: i.product.price,

            // 👉 insérer les suppléments ici
            supplements: {
              create: i.supplements.map(s => ({
                product_id: s.product_id,
                quantity: s.quantity,
                price: s.product.price
              }))
            }
          }))
        }
      },
 include: {
        order_items: {
          include: { supplements: { include: { product: true } } }
        },
        store: true,
         deliveries: true   // 👈 ajoute cette ligne
      }
    });

// 🔗 Vérifie si le client avait déjà choisi une préférence de livraison
const pref = await prisma.user_delivery_preferences.findUnique({
  where: {
    user_id_store_id: {
      user_id: req.user.id,
      store_id
    }
  }
});

// Si une préférence existe → on crée la livraison liée à cette commande
if (pref) {
await prisma.deliveries.create({
    data: {
      order_id: order.id,
      status: "scheduled", // tu peux choisir "pending" si tu préfères
      delivery_date: pref.delivery_date,
      delivery_slot: pref.delivery_slot,
delivery_code: "0000"
    }
  });
// ❌ Supprimer la préférence après l’avoir transférée
  await prisma.user_delivery_preferences.delete({
    where: {
      user_id_store_id: {
        user_id: req.user.id,
        store_id
      }
    }
  });
}

    res.json(order);
  } catch (err) {
    console.error("❌ Erreur création commande:", err);
    res.status(500).json({ error: "Erreur serveur lors de la création de la commande" });
  }
});
// ✅ Récupérer mes commandes (seulement livrées ou annulées)
router.get("/me", verifyToken, async (req, res) => {
  try {
    const orders = await prisma.orders.findMany({
      where: {
        user_id: req.user.id,
        status: { in: ["delivered", "cancelled"] }
      },
      orderBy: { created_at: "desc" },
      include: {
store: { 
  select: { id: true, name: true, banner_url: true }  
},
        order_items: {
          include: {
            products: {
              select: {
                id: true,
                name: true,
                image_url: true,
                price: true
              }
            },
            supplements: true
          }
        }
      }
    });


    // ⚡ Transformation pour le front
    const formatted = orders.map(order => ({
      id: order.id,
      status: order.status,
      total: order.total,
      delivery_fee: order.delivery_fee || 0,
      service_fee: order.service_fee || 0,
      created_at: order.created_at,
      store: order.store,
      items: order.order_items.map(it => ({
        quantity: it.quantity,
        name: it.products?.name,
        image_url: it.products?.image_url,
        price: it.products?.price,
        supplements: it.supplements?.map(s => ({
          name: s.name,
          price: s.price
        })) || []
      }))
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Erreur récupération commandes utilisateur:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Récupérer toutes les commandes d'un store spécifique (seul le store owner ou un admin peut)
router.get("/store/:id", verifyToken, async (req, res) => {
  try {
    const storeId = parseInt(req.params.id);

    // Vérifier rôle
    if (req.user.role !== "store" && req.user.role !== "admin") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    // Vérifier que ce store appartient bien au user si role = store
    if (req.user.role === "store") {
      const store = await prisma.stores.findFirst({
        where: { user_id: req.user.id }
      });
      if (!store || store.id !== storeId) {
        return res.status(403).json({ error: "Tu ne peux voir que tes propres commandes" });
      }
    }

    const orders = await prisma.orders.findMany({
      where: { store_id: storeId },
      orderBy: { created_at: "desc" }
    });

    res.json(orders);
  } catch (err) {
    console.error("Erreur récupération commandes par store:", err);
    res.status(500).json({ error: err.message });
  }
});

const updateStatusSchema = z.object({
  status: z.enum(["pending", "preparing", "delivering", "delivered", "cancelled"]),
});

// ✅ Mettre à jour le statut d’une commande (store uniquement)
router.patch("/:id/status", verifyToken, validate(updateStatusSchema), async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
const { status } = req.validated;

    if (req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    // Liste des statuts valides côté store
    const validStatuses = ["accepted", "rejected", "preparing"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Statut invalide pour un store" });
    }

    // Récupérer le store lié à ce user
    const store = await prisma.stores.findFirst({
      where: { user_id: req.user.id },
    });

    if (!store) {
      return res.status(403).json({ error: "Aucun store trouvé pour cet utilisateur" });
    }

    // Vérifier que la commande appartient bien à ce store
    const order = await prisma.orders.findUnique({ where: { id: orderId } });
    if (!order || order.store_id !== store.id) {
      return res.status(403).json({ error: "Tu ne peux modifier que tes commandes" });
    }


// ✅ Si accepté, créer automatiquement une livraison et la retourner
let delivery = null;
if (status === "accepted") {
  // ⚡ Chercher la commande complète
  const fullOrder = await prisma.orders.findUnique({ where: { id: orderId } });

  if (fullOrder.payment_intent_id) {
    try {
      const intent = await stripe.paymentIntents.capture(fullOrder.payment_intent_id);
      console.log("💳 Paiement capturé Stripe:", intent.id, intent.status);

      await prisma.orders.update({
        where: { id: orderId },
        data: { status: "paid" }
      });
    } catch (err) {
      console.error("❌ Erreur capture Stripe:", err);
    }
  }

  delivery = await prisma.deliveries.create({
    data: { order_id: orderId, status: "pending_assignment" }
  });
}


    // ❌ Si rejeté → annuler le paiement Stripe
    if (status === "rejected") {
      const fullOrder = await prisma.orders.findUnique({ where: { id: orderId } });

      if (fullOrder.payment_intent_id) {
        try {
          const intent = await stripe.paymentIntents.cancel(fullOrder.payment_intent_id);
          console.log("💸 Paiement annulé Stripe:", intent.id, intent.status);

          await prisma.orders.update({
            where: { id: orderId },
            data: { status: "cancelled" }
          });
        } catch (err) {
          console.error("❌ Erreur annulation Stripe:", err);
        }
      }
    }

const updatedOrder = await prisma.orders.findUnique({
  where: { id: orderId },
  include: { deliveries: true }
});


// On renvoie à la fois la commande et la livraison (si créée)
res.json({
  order: updatedOrder,
  delivery
});
} catch (err) {
  console.error("Erreur update statut commande:", err);
  res.status(500).json({ error: "Erreur serveur" });
}
});   // 👈 fermeture de router.patch



// ... toutes les autres routes des commandes ...

// ✅ Récapitulatif avant paiement
router.get("/:id/summary", verifyToken, async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);

    const order = await prisma.orders.findUnique({
      where: { id: orderId },
      include: { order_items: { include: { products: true } } },
    });

    if (!order) {
      return res.status(404).json({ error: "Commande introuvable" });
    }

    // 🛒 Total produits
    const productsTotal = order.order_items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0
    );

    // 🚚 Frais fixes pour tout type de produit
    const distanceKm = 3; // TODO: calcul réel avec Maps
    const deliveryFee = 3 + distanceKm * 1.5;
    const serviceFee = Math.max(0.5, productsTotal * 0.05);

    // ✅ Total à payer
    const total = parseFloat(
      (productsTotal + serviceFee + deliveryFee).toFixed(2)
    );

    // 🚨 Vérifier que l'utilisateur a bien accès à cette commande
    if (req.user.role === "client" && order.user_id !== req.user.id) {
      return res.status(403).json({ error: "Tu ne peux pas accéder à cette commande" });
    }
    if (req.user.role === "store") {
      const store = await prisma.stores.findFirst({ where: { user_id: req.user.id } });
      if (!store || order.store_id !== store.id) {
        return res.status(403).json({ error: "Tu ne peux accéder qu’aux commandes de ton store" });
      }
    }

    res.json({
      order_id: order.id,
      products: order.order_items.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        unit_price: parseFloat(item.price),
        total: parseFloat(item.price) * item.quantity,
      })),
      fees: {
        service: parseFloat(serviceFee.toFixed(2)),
        delivery: parseFloat(deliveryFee.toFixed(2)),
      },
      total,
    });
  } catch (err) {
    console.error("Erreur résumé commande:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

const updateInstructionsSchema = z.object({
  delivery_option: z.string().min(1).optional(),
  instructions: z.string().max(500).optional(),
});

// routes/orders.js
router.put("/:id/instructions", verifyToken, validate(updateInstructionsSchema), async (req, res) => {
  try {
    const { id } = req.params;
  const { delivery_option, instructions } = req.validated;


    const order = await prisma.orders.update({
      where: { id: parseInt(id, 10) },
      data: {
        delivery_option,
        instructions
      }
    });

    res.json({ success: true, order });
  } catch (err) {
    console.error("❌ Erreur update instructions:", err);
    res.status(500).json({ error: "Impossible de mettre à jour les instructions" });
  }
});



// ==============================
// ROUTE /current (uniquement 1 store_id)
// ==============================
router.get("/current", verifyToken, async (req, res) => {
  try {
    // Récupération de la commande
    const order = await prisma.orders.findFirst({
      where: { user_id: req.user.id, status: "pending" },
      orderBy: { created_at: "desc" },
      include: {
        order_items: {
          include: {
            products: { include: { store: true } },
            supplements: { include: { product: true } }
          }
        },
        store: true
      }
    });

    if (!order) return res.json(null);

    // Vérifier combien de stores différents
    const uniqueStores = [
      ...new Set(order.order_items.map(i => i.products.store_id))
    ];
    if (uniqueStores.length !== 1) {
      return res.status(400).json({ error: "Commande multi-store, utilisez /current-multistore" });
    }

// 🛒 Sous-total produits + suppléments
    const productsTotal = order.order_items.reduce((sum, item) => {
      let itemTotal = parseFloat(item.price) * item.quantity;
      if (item.supplements?.length) {
        item.supplements.forEach(supp => {
          itemTotal += parseFloat(supp.price) * supp.quantity;
        });
      }
      return sum + itemTotal;
    }, 0);

    // ⚡ Lire priorité
    const isPriority = req.query.priority === "true";

    // ⚡ Récupérer coordonnées user
    const user = await prisma.users.findUnique({
      where: { id: req.user.id },
      select: { lat: true, lng: true }
    });

let deliveryFee = 0;
let deliveryTime = 0;
let dist = 0; // ✅ déclaré ici

if (user?.lat && user?.lng && order.store?.lat && order.store?.lng) {
  // Distance client → store
  dist = getDistanceKm(
    Number(user.lat),
    Number(user.lng),
    Number(order.store.lat),
    Number(order.store.lng)
  );

  console.log(`📍 Distance client → ${order.store.name}: ${dist.toFixed(2)} km`);

  // 💸 Calcul frais et temps via utilitaires
  deliveryFee = calculateDeliveryFee(dist);
  deliveryTime = calculateDeliveryTime(order.store, user);
}

console.log("📏 Distance calculée:", {
  userLat: user.lat,
  userLng: user.lng,
  storeLat: order.store.lat,
  storeLng: order.store.lng,
  dist
});


    if (isPriority) {
      deliveryFee += 1.99;
    }

    // 💸 Frais de service
    const serviceFee = productsTotal * 0.05;

    // ✅ Total
    const total = parseFloat((productsTotal + serviceFee + deliveryFee).toFixed(2));


    res.json({
      id: order.id,
      store_id: order.store_id,
      status: order.status,
      payment_method: order.payment_method,
      store: {
        id: order.store.id,
        name: order.store.name,
        banner_url: order.store.banner_url,
        address: order.store.address
      },
      fees: {
        service: parseFloat(serviceFee.toFixed(2)),
        delivery: parseFloat(deliveryFee.toFixed(2))
      },
      deliveryTime,
      subtotal: parseFloat(productsTotal.toFixed(2)),
      total,
      items: order.order_items.map(i => ({
 id: i.id, // ligne order_item
  product_id: i.product_id, // ✅ id du produit brut      
  name: i.products.name,
        image: i.products.image_url,
        quantity: i.quantity,
        price: parseFloat(i.price),
        total:
          parseFloat(i.price) * i.quantity +
          (i.supplements?.reduce(
            (s, sup) => s + parseFloat(sup.price) * sup.quantity,
            0
          ) || 0),
        supplements: i.supplements.map(s => ({
          name: s.product.name,
          quantity: s.quantity,
          price: parseFloat(s.price)
        }))
      }))
    });
  } catch (err) {
    console.error("❌ Erreur /current:", err);
    res.status(500).json({ error: "Impossible de récupérer la commande" });
  }
});

// ==============================
// ROUTE /current-multistore (2 stores ou +)
// ==============================
router.get("/current-multistore", verifyToken, async (req, res) => {
  try {
    const order = await prisma.orders.findFirst({
      where: { user_id: req.user.id, status: "pending" },
      orderBy: { created_at: "desc" },
      include: {
        order_items: {
          include: {
            products: { include: { store: true } },
            supplements: { include: { product: true } }
          }
        }
      }
    });

    if (!order) return res.json(null);

    // Extraire les stores uniques
    const uniqueStores = [];
    order.order_items.forEach(i => {
      if (i.products.store && !uniqueStores.find(s => s.id === i.products.store.id)) {
        uniqueStores.push(i.products.store);
      }
    });

    if (uniqueStores.length < 2) {
      return res.status(400).json({ error: "Commande mono-store, utilisez /current" });
    }

    // 🛒 Sous-total produits + suppléments
    const productsTotal = order.order_items.reduce((sum, item) => {
      let itemTotal = parseFloat(item.price) * item.quantity;
      if (item.supplements?.length) {
        item.supplements.forEach(supp => {
          itemTotal += parseFloat(supp.price) * supp.quantity;
        });
      }
      return sum + itemTotal;
    }, 0);

    // ⚡ Lire priorité
    const isPriority = req.query.priority === "true";

    // ⚡ Récupérer coordonnées user
    const user = await prisma.users.findUnique({
      where: { id: req.user.id },
      select: { lat: true, lng: true }
    });

    let deliveryFee = 0;
    let deliveryTime = 0;

    if (user?.lat && user?.lng) {
      // Distance totale via utilitaire calculateMultiStoreDistance
      const totalDist = calculateMultiStoreDistance(
        { lat: user.lat, lng: user.lng },
        uniqueStores
      );

      // Frais multi-store : 3€ + 1€/km
      deliveryFee = 3.0 + totalDist * 1.0;

      // Temps livraison = totalDist*3 + 15 + 6
      deliveryTime = Math.round(totalDist * 3 + 15 + 6);

      console.log("📦 Multi-store distance:", totalDist.toFixed(2), "km");
    }

    if (isPriority) {
      deliveryFee += 1.99;
    }

    // 💸 Frais service
    const serviceFee = productsTotal * 0.10;

    // ✅ Total
    const total = parseFloat((productsTotal + serviceFee + deliveryFee).toFixed(2));

    res.json({
      id: order.id,
      status: order.status,
      payment_method: order.payment_method,
      stores: uniqueStores.map(s => ({
        id: s.id,
        name: s.name,
        address: s.address,
        banner_url: s.banner_url
      })),
      fees: {
        service: parseFloat(serviceFee.toFixed(2)),
        delivery: parseFloat(deliveryFee.toFixed(2))
      },
      deliveryTime,
      subtotal: parseFloat(productsTotal.toFixed(2)),
      total,
      items: order.order_items.map(i => ({
id: i.id, // ligne order_item
  product_id: i.product_id, // ✅ id du produit brut
        name: i.products.name,
        image: i.products.image_url,
        quantity: i.quantity,
        price: parseFloat(i.price),
        total:
          parseFloat(i.price) * i.quantity +
          (i.supplements?.reduce(
            (s, sup) => s + parseFloat(sup.price) * sup.quantity,
            0
          ) || 0),
        store: {
          id: i.products.store.id,
          name: i.products.store.name,
          address: i.products.store.address,
          banner_url: i.products.store.banner_url
        },
        supplements: i.supplements.map(s => ({
          name: s.product.name,
          quantity: s.quantity,
          price: parseFloat(s.price)
        }))
      }))
    });
  } catch (err) {
    console.error("❌ Erreur /current-multistore:", err);
    res.status(500).json({ error: "Impossible de récupérer la commande multi-store" });
  }
});

const recapPanierSchema = z.object({
  orderId: z.number().int(),
  products: z.array(
    z.object({
      productId: z.number().int(),
      quantity: z.number().int().min(1),
    })
  ),
});

router.post("/recap-panier", verifyToken, validate(recapPanierSchema), async (req, res) => {
  try {
const { orderId, products } = req.validated;

    console.log("📩 [BACK] Payload reçu /recap-panier:", {
      orderId,
      products
    });

    if (!orderId || !products || typeof products !== "object") {
      console.warn("⚠️ [BACK] Paramètres manquants");
      return res.status(400).json({ error: "Paramètres manquants" });
    }

    const order = await prisma.orders.findUnique({
      where: { id: orderId },
      include: {
        order_items: {
          include: {
            products: {
              include: {
                store: {
                  select: {
                    id: true,
                    name: true,
                    address: true,
                    banner_url: true,
                    lat: true,
                    lng: true,
                    category: true
                  }
                }
              }
            },
            supplements: { include: { product: true } }
          }
        },
        store: {
          select: {
            id: true,
            name: true,
            address: true,
            banner_url: true,
            lat: true,
            lng: true,
            category: true
          }
        }
      }
    });

    if (!order || order.user_id !== req.user.id || order.status !== "pending") {
      console.warn("⛔ [BACK] Commande introuvable ou non autorisée", {
        orderId,
        userId: req.user.id,
        status: order?.status
      });
      return res.status(403).json({ error: "Commande introuvable ou non autorisée" });
    }


const filteredItems = await Promise.all(
  products.map(async (p) => {
    const product = await prisma.products.findUnique({
      where: { id: p.product_id },
      include: { store: true }
    });

    if (!product) return null;

    // ⚡ Générer une clé basée uniquement sur le payload brut du front
    const rawSuppsKey = (p.supplements || [])
      .map(s => `${s.product_id || s.id}:${s.quantity || 1}`)
      .sort()
      .join("|");
    const key = `${p.product_id}-${rawSuppsKey || "nosupp"}`;

    // ⚡ enrichir chaque supplément avec ses infos produit
    const enrichedSupps = (
      await Promise.all(
        (p.supplements || []).map(async (s) => {
          const suppId = s.product_id || s.id;
          if (!suppId) return null;

          const suppProd = await prisma.products.findUnique({
            where: { id: suppId }
          });

          if (!suppProd) {
            console.warn("⚠️ Supplément introuvable en DB:", suppId);
            return null;
          }

          return {
            product_id: suppId,
            quantity: s.quantity || 1,
            price: s.price ?? suppProd?.price ?? 0,
            product: suppProd
          };
        })
      )
    ).filter(Boolean);

    // 🔎 Debug
    console.log("🔑 Génération clé:", {
      produit: p.product_id,
      rawSupps: p.supplements,
      key
    });

    return {
      key, // ✅ permet de distinguer les items même avec suppléments
      product_id: p.product_id,
      quantity: p.quantity,
      price: product.price,
      products: product,
      supplements: enrichedSupps
    };
  })
);

// ⚡ Nettoyer aussi les null éventuels de produits principaux
const cleanItems = filteredItems.filter(Boolean);

console.log("🛒 [BACK] Items retenus pour le récap:", cleanItems);

// Utiliser cleanItems pour construire l’ordre
const filteredOrder = { ...order, order_items: cleanItems };


    // Mono ou multi-store
    const uniqueStores = [...new Set(filteredOrder.order_items.map(i => i.products.store_id))];
    let recap;

    if (uniqueStores.length > 1) {
      console.log("🏪 [BACK] Multi-store détecté:", uniqueStores);
      recap = await buildMultiStoreOrder(filteredOrder, req.user.id, prisma);
    } else {
      const selectedStore = filteredOrder.order_items[0]?.products?.store;
      filteredOrder.store = selectedStore;
      console.log("🏪 [BACK] Mono-store détecté:", selectedStore?.name);
      recap = await buildSingleStoreOrder(filteredOrder, req.user.id, prisma);
    }

    console.log("✅ [BACK] Récap généré:", recap);
    res.json(recap);

  } catch (err) {
    console.error("❌ [BACK] Erreur /recap-panier:", err);
    res.status(500).json({ error: "Impossible de générer le récap" });
  }
});


const updatePaymentSchema = z.object({
  method: z.enum(["card", "cash", "paypal"]), // adapte selon tes méthodes
  card_id: z.string().uuid().optional(),
});

// ✅ Mettre à jour le moyen de paiement d’une commande
router.put("/:id/payment", verifyToken, validate(updatePaymentSchema), async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);   
 const { method, card_id } = req.validated;

    // 👉 Nouveau: normaliser la méthode
    let paymentMethodValue = method;

    // --- Cas carte: soit "card" + card_id, soit "card:xx"
    if (method.startsWith("card")) {
      // extraire id si envoyé en mode "card:xx"
      if (method.includes(":")) {
        card_id = parseInt(method.split(":")[1], 10);
      }

      if (!card_id) {
        return res.status(400).json({ error: "card_id requis pour carte" });
      }

      const card = await prisma.payment_methods.findUnique({
        where: { id: card_id },
      });
      if (!card || card.user_id !== req.user.id) {
        return res.status(403).json({ error: "Carte invalide" });
      }

      paymentMethodValue = `card:${card.id}`;
    }

    // --- Cas Apple / cash
    if (method === "apple" || method === "cash") {
      paymentMethodValue = method;
    }

    // 🔥 Sauvegarde en DB
    const updated = await prisma.orders.update({
      where: { id: orderId },
      data: { payment_method: paymentMethodValue },
    });

    res.json(updated);
  } catch (err) {
    console.error("❌ Erreur update payment:", err);
    res.status(500).json({ error: "Impossible de mettre à jour le paiement" });
  }
});	

const payOrderSchema = z.object({
  payment_method: z.enum(["card", "cash", "paypal"]), // adapte
});

// ✅ Payer une commande existante
router.post("/:id/pay", verifyToken, validate(payOrderSchema), async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
  const { payment_method } = req.validated;


    // 🔒 Vérifier commande
    const order = await prisma.orders.findFirst({
      where: { id: orderId, user_id: req.user.id, status: "pending" }
    });

    if (!order) {
      return res.status(404).json({ error: "Commande introuvable ou déjà payée" });
    }

    // 👉 Mettre à jour la commande
    const updated = await prisma.orders.update({
      where: { id: orderId },
      data: {
        payment_method: payment_method || order.payment_method,
        status: "paid", // ⚡ si tu veux marquer comme payée
        // tu pourras ici ajouter appel Stripe plus tard
      }
    });

    console.log("💳 Commande payée:", updated.id, "via", updated.payment_method);

    res.json(updated);
  } catch (err) {
    console.error("❌ Erreur paiement:", err);
    res.status(500).json({ error: "Erreur serveur lors du paiement" });
  }
});

// ✅ Récupérer une commande par son id
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);

// 🚨 Protection : ID doit être un entier valide
    if (isNaN(orderId)) {
      return res.status(400).json({ error: "ID invalide" });
    }
// 🔍 Recherche de la commande
    const order = await prisma.orders.findUnique({
      where: { id: orderId },
      include: {
        order_items: {
          include: {
            products: {   // 👈 correspond au schema (pluriel)
              select: {
                id: true,
                name: true,
                image_url: true,
                price: true
              }
            },
            supplements: {
              include: {
                product: {   // 👈 correspond au schema (singulier)
                  select: {
                    id: true,
                    name: true,
                    image_url: true,
                    price: true
                  }
                }
              }
            }
          }
        },
        store: true,
      }
    });

    if (!order) {
      return res.status(404).json({ error: "Commande non trouvée" });
    }

// 🔒 Vérifie que la commande appartient bien au user connecté
    if (order.user_id !== req.user.id) {
      return res.status(403).json({ error: "Accès interdit 🚫" });
    }

    res.json(order);
  } catch (err) {
    console.error("❌ Erreur récupération commande:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});




export default router;   // 👈 bien à la fin, tout seul
