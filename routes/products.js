// routes/products.js
import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
const prisma = new PrismaClient();

function formatCategory(cat) {
  if (!cat) return null;
  return cat.replace(/_/g, " "); // remplace tous les "_" par des espaces
}

// ✅ Modifier un produit
router.patch("/:id", verifyToken, async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const { name, price, description, stock } = req.body;

    if (req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const product = await prisma.products.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Produit non trouvé" });

const store = await prisma.stores.findFirst({
  where: { user_id: req.user.id },
});
    if (!store || store.user_id !== req.user.id) {
      return res.status(403).json({ error: "Tu ne peux modifier que tes produits" });
    }

    const updated = await prisma.products.update({
      where: { id: productId },
      data: { name, price, description, stock },
    });

    res.json(updated);
  } catch (err) {
    console.error("Erreur update produit:", err);
    res.status(500).json({ error: err.message });
  }
});

// ❌ Désactivation produit (soft delete)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const productId = parseInt(req.params.id);

    // Vérifier que le produit appartient bien au store
    const store = await prisma.stores.findFirst({
      where: { user_id: req.user.id },
    });

    
const product = await prisma.products.findUnique({
      where: { id: productId },
    });

    if (!product || product.store_id !== store.id) {
      return res.status(403).json({ error: "Tu ne peux modifier que tes produits" });
    }

    const updatedProduct = await prisma.products.update({
      where: { id: productId },
      data: { is_active: false },
    });

    res.json({ message: "Produit désactivé avec succès", product: updatedProduct });
  } catch (err) {
    console.error("Erreur désactivation produit:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Lister les produits d’un store (seulement actifs) avec notes réelles
router.get("/store/:id", async (req, res) => {
  try {
    const storeId = parseInt(req.params.id);

    // Récupérer tous les produits du store
    const products = await prisma.products.findMany({
      where: { store_id: storeId, is_active: true },
      orderBy: { id: "asc" },
      include: {
        brand: true,
        tech_category: true,
        accessory: true,
        product_bundles: {
          include: {
            bundle: {
              include: {
                bundle_items: { include: { item: true } }
              }
            }
          }
        },
 // 👇 Ajout des options avec leurs valeurs
        product_options: {
          include: {
            values: true
          }
        },
 // 👇 Ajout des images supplémentaires
        product_images: true
      }
    });

    // Calculer les reviews pour tous les produits de ce store
    const productIds = products.map(p => p.id);
    const reviewsByProduct = await prisma.reviews.groupBy({
      by: ["product_id"],
      where: {
        product_id: { in: productIds },
        approved: true
      },
      _avg: { rating: true },
      _count: { rating: true }
    });

    // Mettre en dictionnaire pour lookup rapide
    const statsMap = reviewsByProduct.reduce((acc, r) => {
      acc[r.product_id] = {
        avg: r._avg.rating || 0,
        count: r._count.rating || 0
      };
      return acc;
    }, {});

    // Construire la réponse enrichie
const productsWithDetails = products.map(p => ({
  id: p.id,
  name: p.name,
  price: p.price,
  image_url: p.image_url || (p.product_images[0]?.image_url ?? null),
  images: p.product_images.map(img => img.image_url),
  category: p.category,
main_category: formatCategory(p.main_category) || null,
sub_category: formatCategory(p.sub_category) || null,
  gender: p.gender,
  color: p.color,
  description: p.description,
  option_title: p.option_title,
  ingredients: p.ingredients,
  is_active: p.is_active,
  condition: p.condition,
  brand: p.brand ? p.brand.name : null,
  tech_category: p.tech_category ? p.tech_category.name : null,
  accessory: p.accessory ? p.accessory.name : null,
  avg_rating: statsMap[p.id]?.avg || 0,
  review_count: statsMap[p.id]?.count || 0,
  product_options: p.product_options
}));

    res.json(productsWithDetails);
  } catch (err) {
    console.error("Erreur récupération produits:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Réactiver un produit désactivé
router.patch("/:id/reactivate", verifyToken, async (req, res) => {
  try {
    const productId = parseInt(req.params.id);

    if (req.user.role !== "store" && req.user.role !== "admin") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const product = await prisma.products.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ error: "Produit non trouvé" });

    // Si c’est un store, on vérifie que c’est bien SON produit
    if (req.user.role === "store") {
const store = await prisma.stores.findFirst({
  where: { user_id: req.user.id },
});
      if (!store || store.user_id !== req.user.id) {
        return res.status(403).json({ error: "Tu ne peux réactiver que tes produits" });
      }
    }

    const updated = await prisma.products.update({
      where: { id: productId },
      data: { is_active: true },
    });

    res.json({ message: "Produit réactivé avec succès", product: updated });
  } catch (err) {
    console.error("Erreur réactivation produit:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Lister les produits du store connecté
router.get("/my-products", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const store = await prisma.stores.findFirst({
      where: { user_id: req.user.id },
    });

    if (!store) {
      return res.status(404).json({ error: "Aucun store trouvé" });
    }

const products = await prisma.products.findMany({
  where: { id: { in: Object.keys(counts).map(Number) } }, // ✅ uniquement les produits commandés
  orderBy: { id: "asc" },
  include: {
    brand: true,          
    tech_category: true,  
    accessory: true,      
    product_bundles: {    // 👈 inclure les bundles
      include: {
        bundle: {
          include: {
            bundle_items: {
              include: { item: true }
            }
          }
        }
      }
    }
  }
});

    // ✅ Ajout explicite de color (et autres champs utiles au front)
    const productsWithColor = products.map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image_url: p.image_url,
      category: p.category,
main_category: formatCategory(p.main_category) || null,
sub_category: formatCategory(p.sub_category) || null,
      gender: p.gender,
      color: p.color,            // 👈 ici
      description: p.description,
      option_title: p.option_title,
      ingredients: p.ingredients,
      is_active: p.is_active,
    }));

    res.json(productsWithColor);
  } catch (err) {
    console.error("Erreur get my-products:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Créer un produit (store uniquement)
router.post("/my-products", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }

// --- Ajout catégorie obligatoire ---
const { name, description, price, stock, category, material } = req.body;    

    if (!category || !["food", "non-food"].includes(category)) {
      return res
        .status(400)
        .json({ error: "La catégorie est requise et doit être 'food' ou 'non-food'" });
    }

    
 // ✅ Liste des matières autorisées
    const validMaterials = ["COTON", "LIN", "LAINE", "SOIE", "POLYESTER", "VISCOSE"];
    if (!material || !validMaterials.includes(material.toUpperCase())) {
      return res
        .status(400)
        .json({ error: `La matière est requise et doit être parmi : ${validMaterials.join(", ")}` });
    }


const store = await prisma.stores.findFirst({
      where: { user_id: req.user.id },
    });

const conditionFormatted = condition
  ? condition.toUpperCase()
  : "NEUF"; // fallback

    // Création du produit avec catégorie
const product = await prisma.products.create({
      data: {
        store_id: store.id,
        name,
        description,
        price,
        stock,
        category, // ✅ catégorie stockée
        material: material.toUpperCase(), // ✅ stocké en majuscules pour uniformité
        condition: conditionFormatted, // 👈 toujours un enum valide
        is_active: true,
      },
    });

    res.json(product);
  } catch (err) {
    console.error("Erreur create product:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Modifier un produit (store uniquement)
router.patch("/my-products/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }  
    
    const productId = parseInt(req.params.id);
    
    const store = await prisma.stores.findFirst({
      where: { user_id: req.user.id },
    });
        
    // Vérifie que le produit appartient bien au store
    const product = await prisma.products.findUnique({ where: { id: productId } });
    if (!product || product.store_id !== store.id) {
      return res.status(403).json({ error: "Tu ne peux modifier que tes produits" });
    }

    const data = { ...req.body };

    // ✅ Validation matière si fournie
    if (data.material) {
      const validMaterials = ["COTON", "LIN", "LAINE", "SOIE", "POLYESTER", "VISCOSE"];
      if (!validMaterials.includes(data.material.toUpperCase())) {
        return res
          .status(400)
          .json({ error: `La matière doit être parmi : ${validMaterials.join(", ")}` });
      }
      data.material = data.material.toUpperCase(); // uniformisation
    }
        
    const updatedProduct = await prisma.products.update({
      where: { id: productId },
      data,
    });
    
    res.json(updatedProduct);
  } catch (err) {
    console.error("Erreur update product:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Désactiver un produit (soft delete)
router.delete("/my-products/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.role !== "store") {
      return res.status(403).json({ error: "Accès interdit" });
    }

    const productId = parseInt(req.params.id);

const store = await prisma.stores.findFirst({
  where: { user_id: req.user.id },
});

    const product = await prisma.products.findUnique({ where: { id: productId } });
    if (!product || product.store_id !== store.id) {
      return res.status(403).json({ error: "Tu ne peux supprimer que tes produits" });
    }

    const disabledProduct = await prisma.products.update({
      where: { id: productId },
      data: { is_active: false },
    });

    res.json({ message: "Produit désactivé", product: disabledProduct });
  } catch (err) {
    console.error("Erreur delete product:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ✅ Récupérer les produits d’un store
router.get("/", async (req, res) => {
  try {
    const storeId = parseInt(req.query.store_id);
    const whereBase = storeId ? { store_id: storeId, is_active: true } : { is_active: true };

    // 1️⃣ Compter uniquement les commandes livrées
    const deliveredItems = await prisma.order_items.findMany({
      where: {
        orders: { status: "delivered" },
        ...(storeId ? { products: { store_id: storeId } } : {})
      },
      select: { product_id: true, quantity: true }
    });

    // ⚡ maintenant counts est défini avant d’être utilisé
    const counts = deliveredItems.reduce((acc, item) => {
      acc[item.product_id] = (acc[item.product_id] || 0) + item.quantity;
      return acc;
    }, {});

    // 2️⃣ Charger les produits
    const products = await prisma.products.findMany({
      where: whereBase,
      orderBy: { id: "asc" },
      include: {
        brand: true,
        tech_category: true,
        accessory: true,
        product_bundles: {
          include: {
            bundle: {
              include: {
                bundle_items: { include: { item: true } }
              }
            }
          }
        }
      }
    });

    // 3️⃣ Construire la réponse
const productsWithCount = products.map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image_url: p.image_url,
      category: p.category,
main_category: formatCategory(p.main_category) || null,
sub_category: formatCategory(p.sub_category) || null,
      tech_category: p.tech_category?.name || null,
      brand: p.brand?.name || null,
      accessory: p.accessory?.name || null,
      gender: p.gender,
      color: p.color,
      material: p.material,
      condition: p.condition,
      description: p.description,
      option_title: p.option_title,
      ingredients: p.ingredients,
      is_active: p.is_active,
      rating: p.rating,
      review_count: p.review_count,
      orderCount: counts[p.id] || 0,

      bundles: p.product_bundles.map(link => ({
        id: link.bundle.id,
        name: link.bundle.name,
        items: link.bundle.bundle_items.map(i => ({
          id: i.item.id,
          name: i.item.name,
          price: i.item.price,
          image_url: i.item.image_url
        }))
      }))
    }));

// 👉 LOG ICI
console.log("📦 Produits envoyés au front:", productsWithCount);
    res.json(productsWithCount);
  } catch (err) {
    console.error("Erreur get products:", err);
    res.status(500).json({ error: "Impossible de récupérer les produits" });
  }
});

// --- ARTICLES EN VEDETTE (BESTSELLERS) ---
router.get("/bestsellers", async (req, res) => {
  try {
    const deliveredItems = await prisma.order_items.findMany({
      where: { orders: { status: "delivered" } },
      select: { product_id: true, quantity: true }
    });

    const counts = deliveredItems.reduce((acc, item) => {
      acc[item.product_id] = (acc[item.product_id] || 0) + item.quantity;
      return acc;
    }, {});

    const bestsellers = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([product_id, qty]) => ({ product_id: parseInt(product_id), quantity: qty }));

    
const products = await prisma.products.findMany({
      where: { id: { in: bestsellers.map(b => b.product_id) } }
    });

const result = bestsellers.map(b => {
  const product = products.find(p => p.id === b.product_id);
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image_url: product.image_url,
    category: product.category,
main_category: formatCategory(p.main_category) || null,
sub_category: formatCategory(p.sub_category) || null,
    description: product.description,
    option_title: product.option_title,
    orderCount: b.quantity
  };
});

    res.json(result);
  } catch (err) {
    console.error("Erreur bestsellers:", err);
    res.status(500).json({ error: "Impossible de récupérer les bestsellers" });
  }
});


// ✅ Récupérer le détail d’un produit avec ses options
router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);
    console.log("📩 Requête GET /api/products/:id =", productId);

    // 🚨 Vérifier que l'ID est bien un entier
    if (isNaN(productId)) {
      console.warn("⚠️ ID produit invalide reçu:", req.params.id);
      return res.status(400).json({ error: "ID produit invalide" });
    }

    const product = await prisma.products.findUnique({
      where: { id: productId },
      include: {
        product_options: {
          include: { values: true }
        },
        product_images: true
      }
    });

    if (!product) {
      console.warn("⚠️ Aucun produit trouvé pour id:", productId);
      return res.status(404).json({ error: "Produit introuvable" });
    }

    console.log("✅ Produit trouvé:", {
      id: product.id,
      name: product.name,
      images: product.product_images?.length || 0,
      options: product.product_options?.length || 0
    });

    res.json(product);
  } catch (err) {
    console.error("❌ Erreur get product:", err);
    res.status(500).json({ error: "Impossible de récupérer le produit" });
  }
});

// /api/products/reorder
router.get("/reorder", verifyToken, async (req, res) => {
  const storeId = parseInt(req.query.store_id, 10);

  try {
    if (!storeId) {
      return res.status(400).json({ error: "store_id requis" });
    }

    // 🔹 Récupérer les dernières commandes de l’utilisateur
    const orders = await prisma.orders.findMany({
      where: { user_id: req.user.id, store_id: storeId },
      orderBy: { created_at: "desc" },
      take: 8
    });

    if (!orders.length) return res.json([]);

    const orderIds = orders.map(o => o.id);

    // 🔹 Items livrés dans ces commandes
    const deliveredItems = await prisma.order_items.findMany({
      where: {
        order_id: { in: orderIds },
        orders: { status: "delivered" },
        products: { store_id: storeId }
      },
      select: { product_id: true, quantity: true }
    });

    // 🔹 Compter combien de fois chaque produit a été commandé
    const counts = deliveredItems.reduce((acc, item) => {
      acc[item.product_id] = (acc[item.product_id] || 0) + item.quantity;
      return acc;
    }, {});

    // 🔹 Charger les produits avec leurs bundles
    const products = await prisma.products.findMany({
      where: { id: { in: Object.keys(counts).map(Number) } },
      orderBy: { id: "asc" },
      include: {
        brand: true,
        tech_category: true,
        accessory: true,
        product_bundles: {
          include: {
            bundle: {
              include: {
                bundle_items: { include: { item: true } }
              }
            }
          }
        }
      }
    });

    // 🔹 Préparer la réponse pour le front
const productsWithCount = products.map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image_url: p.image_url,
      category: p.category,
main_category: formatCategory(p.main_category) || null,
sub_category: formatCategory(p.sub_category) || null,
      tech_category: p.tech_category?.name || null,
      brand: p.brand?.name || null,
      accessory: p.accessory?.name || null,
      gender: p.gender,
      color: p.color,
      material: p.material,
      condition: p.condition,
      description: p.description,
      option_title: p.option_title,
      ingredients: p.ingredients,
      is_active: p.is_active,
      rating: p.rating,
      review_count: p.review_count,
      orderCount: counts[p.id] || 0,

      // ✅ Bundles associés
      bundles: p.product_bundles.map(link => ({
        id: link.bundle.id,
        name: link.bundle.name,
        items: link.bundle.bundle_items.map(i => ({
          id: i.item.id,
          name: i.item.name,
          price: i.item.price,
          image_url: i.item.image_url
        }))
      }))
    }));


// 👉 LOG ICI
console.log("📦 Produits envoyés au front:", productsWithCount);
    console.log("🛒 Produits renvoyés reorder:", productsWithCount);
    res.json(productsWithCount);
  } catch (err) {
    console.error("❌ Erreur reorder:", err);
    res.status(500).json({ error: "Impossible de récupérer les produits déjà commandés" });
  }
});
export default router;
