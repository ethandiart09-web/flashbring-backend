// stores.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";
import { getDistanceKm, calculateDeliveryTime, calculateDeliveryFee } from "../utils/delivery.js";

const prisma = new PrismaClient();
const router = express.Router();

// 🏪 Postuler pour créer un store (client connecté)
router.post("/apply", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "client") {
      return res.status(400).json({ error: "Seuls les clients peuvent postuler" });
    }

    const { name, address, phone } = req.body;

    const existing = await prisma.stores.findUnique({
      where: { user_id: req.user.id }
    });
    if (existing) {
      return res.status(400).json({ error: "Tu as déjà postulé pour un store" });
    }

    const store = await prisma.stores.create({
      data: {
        name,
        address,
        phone,
        user_id: req.user.id,
        is_active: false
      }
    });

    res.json({ message: "Candidature envoyée", store });
  } catch (err) {
    console.error("Erreur apply store:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// 👑 Validation candidature store
router.post("/validate/:id", verifyToken, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Accès réservé à l’admin" });
  }

  const { action } = req.body; // "approve" ou "reject"
  const storeId = parseInt(req.params.id);

  try {
    
const store = await prisma.stores.findUnique({ where: { id: storeId } });
    if (!store) return res.status(404).json({ error: "Store introuvable" });

    if (action === "approve") {
      await prisma.stores.update({
        where: { id: storeId },
        data: { is_active: true }
      });

      await prisma.users.update({
        where: { id: store.user_id },
        data: { role: "store" }
      });

      return res.json({ message: "Store approuvé ✅" });
    } else {
      await prisma.stores.delete({ where: { id: storeId } });
      return res.json({ message: "Candidature rejetée ❌" });
    }
  } catch (err) {
    console.error("Erreur validation store:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Fonction utilitaire pour calculer les frais de livraison

// ✅ Récupérer les stores, filtrables par catégorie
router.get("/", async (req, res) => {
  try {
    const { category, lat, lng, search, etat } = req.query;

    console.log("📩 Requête reçue avec params :", { lat, lng, category, search });

const whereClause = { AND: [] };

if (category) {
  whereClause.AND.push({
    category: category.toLowerCase() // cast en minuscule
  });
}

// ✅ Filtre par état produit (tech)
    if (etat) {
      whereClause.AND.push({ store_type: etat.toLowerCase() }); 
      // ex: etat=neuf → store_type='neuf'
      //     etat=reconditionné → store_type='reconditionné'
    }

if (search) {
  const stores = await prisma.$queryRaw`
    SELECT s.*, COUNT(o.id) as orders_count
    FROM stores s
    LEFT JOIN orders o ON o.store_id = s.id
    WHERE to_tsvector('french', s.name || ' ' || s.subcategory || ' ' || coalesce(s.diet_type, ''))
          @@ plainto_tsquery('french', ${search})
    GROUP BY s.id
    ORDER BY s.id ASC
  `;
  return res.json(stores);
}

console.log("🔎 whereClause final :", JSON.stringify(whereClause, null, 2));

const stores = await prisma.stores.findMany({
  where: whereClause.AND.length ? whereClause : undefined,
  orderBy: { id: "asc" },
  select: {
    id: true,
    name: true,
    address: true,
    banner_url: true,
    lat: true,
    lng: true,
    max_km: true,
    created_at: true,
    category: true,
    subcategory: true,
    diet_type: true,
    store_type: true,
    is_partner: true,   // ✅ AJOUTE CECI
    recommended_for: true,   // ✅ renvoie le tableau des appareils ciblés
sections: {             // 👈 ajoute les sections ici
          select: {
            id: true,
            name: true,
            position: true
          },
          orderBy: { position: "asc" }
        },
    _count: {
      select: { orders: true }
    }
  }
});

// Ajout des infos distance + frais + badges
const now = new Date();
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(now.getDate() - 7);

// Trouver le max commandes pour top vendeur
const maxOrders = Math.max(...stores.map(s => s._count?.orders || s.orders_count || 0));
const topThreshold = maxOrders * 0.9; // top 10%

const storesWithFee = stores.map(store => {
  let distanceKm = null; 
  let deliveryFee = null;

  if (lat && lng && store.lat && store.lng) {
    distanceKm = getDistanceKm(
      parseFloat(lat),
      parseFloat(lng),
      store.lat,
      store.lng
    );
deliveryFee = calculateDeliveryFee(distanceKm);

    console.log(
      `📍 ${store.name} → ${distanceKm.toFixed(2)} km → ${deliveryFee.toFixed(2)} €`
    );
  }

// --- 🔥 Ajout des badges avec expiration à 7 jours
let badges = [];
const orders = store._count?.orders || store.orders_count || 0;

// Date de création + vérif expiration
const createdAt = new Date(store.created_at);
const expired = createdAt < sevenDaysAgo;

// Partenaire (seulement si pas expiré)
if (store.is_partner && !expired) {
  badges.push("partenaire");
}

// Nouveau (seulement si pas expiré)
if (!expired) {
  badges.push("nouveau");
}

// Top vendeur (seulement si pas expiré)
if (orders >= topThreshold && orders > 0 && !expired) {
  badges.push("top");
}
// 🔥 Temps de livraison estimé (par défaut scooter)
const estimatedDeliveryTime = calculateDeliveryTime(
  store,
  { lat: parseFloat(lat), lng: parseFloat(lng) },
  "scooter"
);


return {   
  ...store,
  distance_km: distanceKm,  
  delivery_fee: deliveryFee,
  badges,
  estimated_delivery_time: estimatedDeliveryTime
};
});

res.json(storesWithFee);
  } catch (err) {
    console.error("Erreur récupération stores:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Créer un produit pour un magasin (admin ou store)
router.post("/:id/products", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "admin" && req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }
     
    const storeId = parseInt(req.params.id);
    const { name, description, price, stock, category } = req.body;
    
    // 🔒 Vérifie que le store appartient bien au user (sauf admin)
    if (req.user.role === "store") {
      
const store = await prisma.stores.findUnique({
        where: { id: storeId },
      });
  
      if (!store || store.user_id !== req.user.id || !store.is_active) {
        return res.status(403).json({ error: "Ton magasin n’est pas actif ou ne t’appartient pas" });
      }
    } else {
      // Même pour un admin → empêcher d’ajouter un produit dans un store inactif
      const store = await prisma.stores.findUnique({ where: { id: storeId } });
      if (!store || !store.is_active) {
        return res.status(400).json({ error: "Impossible d’ajouter un produit dans un magasin inactif" });
      }
    }
    
    const product = await prisma.products.create({
      data: {
        store_id: storeId,
        name,
        description,
        price,
        stock,
        category,
        is_active: true,
      },
    });
    
    res.json(product);
  } catch (err) {
    console.error("Erreur création produit:", err);
    res.status(500).json({ error: err.message });
  } 
});

         
// ✅ Suggestions auto-complétion
router.get("/suggest", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || query.length < 2) {
      return res.json([]);
    }

    const suggestions = await prisma.$queryRawUnsafe(`
      -- Sous-catégories (array)
      SELECT DISTINCT sub AS suggestion
      FROM stores s
      CROSS JOIN UNNEST(s.subcategory) AS sub
      WHERE sub ILIKE '%${query}%'

      UNION

      -- Types de régime
      SELECT DISTINCT s.diet_type AS suggestion
      FROM stores s
      WHERE s.diet_type ILIKE '%${query}%'

      UNION

      -- Noms de magasins
      SELECT s.name AS suggestion
      FROM stores s
      WHERE s.name ILIKE '%${query}%'

      LIMIT 10;
    `);

    res.json(suggestions.map(s => s.suggestion).filter(Boolean));
  } catch (err) {
    console.error("Erreur suggestions:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Récupérer un magasin par ID (public)
router.get("/:id", async (req, res) => {
  try {
    const storeId = parseInt(req.params.id, 10);

    // 🚨 Vérification d’ID valide
    if (isNaN(storeId)) {
      return res.status(400).json({ error: "ID invalide" });
    }

    const { lat, lng } = req.query;

// 🔹 Récupérer les infos du store + horaires
    const store = await prisma.stores.findUnique({
      where: { id: storeId },
      select: {
        id: true,
        name: true,
        address: true,
        banner_url: true,
        lat: true,
        lng: true,
        category: true,
        subcategory: true,
        store_type: true,
        created_at: true,
        is_partner: true, // ✅ badge partenaire
        _count: {
          select: { orders: true, reviews: true }
        },
        reviews: {
          select: { rating: true }
        },
        store_hours: {                      // ✅ ajoute ça
          select: {
            day: true,
            open: true,
            close: true
          },
          orderBy: { id: "asc" }            // garder l’ordre logique
        },
sections: {   // 👈 récupère les sections liées
          orderBy: { position: "asc" },
          select: {
            id: true,
            name: true,
            position: true,
            products: {   // 👈 produits dans la section
              where: { is_active: true },
              select: {
                id: true,
                name: true,
                price: true,
                image_url: true,
                description: true
              }
            }
          }
        }
      }
    });

    if (!store) return res.status(404).json({ error: "Magasin introuvable" });

// --- Calcul rating/review_count depuis Postgres directement
const ratingData = await prisma.$queryRawUnsafe(`
  SELECT ROUND(AVG(rating)::numeric, 1) AS avg_rating, COUNT(*) AS total_reviews
  FROM reviews
  WHERE store_id = ${storeId}
`);

const avgRating = ratingData[0]?.avg_rating || 0;
const reviewCount = ratingData[0]?.total_reviews || 0;

    // --- Calcul distance + frais si lat/lng dispo
    let distanceKm = null;
    let deliveryFee = null;

    if (lat && lng && store.lat && store.lng) {
      distanceKm = getDistanceKm(
        parseFloat(lat),
        parseFloat(lng),
        store.lat,
        store.lng
      );
deliveryFee = calculateDeliveryFee(distanceKm);
    }

    res.json({
      ...store,
rating: Number(avgRating),     // ✅ stable (toujours 1 décimale)
  review_count: Number(reviewCount),
      orders_count: store._count.orders,
      distance_km: distanceKm,
      delivery_fee: deliveryFee
    });
  } catch (err) {
    console.error("Erreur récupération magasin:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Modifier un magasin (store owner ou admin)
router.patch("/:id", verifyToken, async (req, res) => {
  try {
    const storeId = parseInt(req.params.id, 10);
    const { name, address, banner_url } = req.body;

    const store = await prisma.stores.findUnique({ where: { id: storeId } });
    if (!store) {
      return res.status(404).json({ error: "Magasin introuvable" });
    }

    // 🔒 Vérifie si c’est bien le store du user connecté ou un admin
    if (store.user_id !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    let lat = store.lat;
    let lng = store.lng;

// 📍 Géocoder si l’adresse est fournie ET (soit elle change, soit lat/lng sont vides)
if (address && (address !== store.address || !store.lat || !store.lng)) {
  try {
    const response = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`
    );
    const data = await response.json();
    if (data.features?.length) {
      const [lon, la] = data.features[0].geometry.coordinates;
      lat = parseFloat(la.toFixed(5));
      lng = parseFloat(lon.toFixed(5));
    }
  } catch (geoErr) {
    console.warn("⚠️ Impossible de géocoder l’adresse:", geoErr.message);
  }
}

    // 🔄 Mise à jour en base
    const updated = await prisma.stores.update({
      where: { id: storeId },
      data: {
        name: name || store.name,
        address: address || store.address,
        banner_url: banner_url || store.banner_url,
        lat,
        lng,
      },
    });

    res.json(updated);
  } catch (err) {
    console.error("❌ Erreur update store:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Supprimer un magasin (store owner ou admin)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const storeId = parseInt(req.params.id);

    const store = await prisma.stores.findUnique({ where: { id: storeId } });
    if (!store) {
      return res.status(404).json({ error: "Magasin introuvable" });
    }

    // 🔒 Vérifie si c’est bien le store du user connecté
    if (store.user_id !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    await prisma.stores.delete({ where: { id: storeId } });
    res.json({ message: "Magasin supprimé ✅" });
  } catch (err) {
    console.error("Erreur delete store:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


router.post("/search/log", async (req, res) => {
  console.log("📩 [SEARCH_LOG] Route appelée !");
  try {
    const { query, resultsCount } = req.body;
    const userId = req.user?.id || null;

    const log = await prisma.search_logs.create({
      data: {
        user_id: userId,
        query,
        results_count: resultsCount,
      },
    });

    console.log("✅ [SEARCH_LOG] Insertion réussie :", log);
    res.json({ success: true, log });
  } catch (err) {
    console.error("❌ [SEARCH_LOG] Erreur log recherche:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Création d’un store
router.post("/apply", verifyToken, async (req, res) => {
  try {
    const { name, address, category, subcategory, store_type, banner_url } = req.body;

    let lat = null;
    let lng = null;

    // 📍 Géocodage auto depuis l’adresse (si fournie)
    if (address) {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`
        );
        const data = await response.json();
        if (data.features?.length) {
          const [lon, la] = data.features[0].geometry.coordinates;
          lat = parseFloat(la.toFixed(5));
          lng = parseFloat(lon.toFixed(5));
        }
      } catch (geoErr) {
        console.warn("⚠️ Impossible de géocoder l’adresse:", geoErr.message);
      }
    }

    // 🔄 Création du store
    const store = await prisma.stores.create({
      data: {
        name,
        address,
        category,
        subcategory,
        store_type,
        banner_url,
        lat,
        lng,
        user_id: req.user.id,
      },
    });

    res.json(store);
  } catch (err) {
    console.error("❌ Erreur création store:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Récupérer les horaires d’un store
router.get("/:id/hours", async (req, res) => {
  try {
    const storeId = parseInt(req.params.id, 10);

    const hours = await prisma.store_hours.findMany({
      where: { store_id: storeId },
      orderBy: { id: "asc" }
    });

    res.json(hours);
  } catch (err) {
    console.error("❌ Erreur récupération horaires:", err);
    res.status(500).json({ error: "Impossible de récupérer les horaires" });
  }
});


export default router;
