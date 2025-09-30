import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
const prisma = new PrismaClient();

// ✅ Middleware global pour restreindre toutes les routes admin
function adminOnly(req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Accès refusé: admin uniquement" });
  }
  next();
}
router.use(verifyToken, adminOnly);

// ✅ Helper: filtrage avec sécurisation
function parseFilters(req) {
  const { month, year, role } = req.query;
  let where = {};

  if (role) {
    where.role = role;
  }

  if (year && !isNaN(parseInt(year))) {
    const y = parseInt(year, 10);
    const m = month && !isNaN(parseInt(month)) ? parseInt(month, 10) : null;
    const startDate = new Date(y, m ? m - 1 : 0, 1);
    const endDate = m ? new Date(y, m, 1) : new Date(y + 1, 0, 1);
    where.created_at = { gte: startDate, lt: endDate };
  }

  return where;
}

/* ===========================
   👤 UTILISATEURS
=========================== */
router.get("/users", async (req, res) => {
  try {
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 50;

    const users = await prisma.users.findMany({
      where: parseFilters(req),
      orderBy: { created_at: "desc" },
      skip,
      take: limit,
      // ✅ On sélectionne uniquement les champs non sensibles
      select: { id: true, email: true, firstname: true, role: true, created_at: true }
    });

    res.json(users);
  } catch (err) {
    console.error("Erreur /admin/users:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

router.get("/users/stats", async (req, res) => {
  try {
    const [clients, drivers, stores] = await Promise.all([
      prisma.users.count({ where: { role: "client" } }),
      prisma.users.count({ where: { role: "driver" } }),
      prisma.users.count({ where: { role: "store" } }),
    ]);
    res.json({ clients, drivers, stores });
  } catch (err) {
    console.error("Erreur /admin/users/stats:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


/* ===========================
   📦 COMMANDES
=========================== */
router.get("/orders", async (req, res) => {
  try {
    const where = parseFilters(req);

    const orders = await prisma.orders.findMany({
      where,
      include: {
        user: { select: { id: true, email: true } },  // ✅ pas users
        store: { select: { id: true, name: true } },  // ✅ pas stores
        order_items: { include: { products: true } },
        deliveries: {
          include: { driver: { select: { id: true, email: true } } }
        }
      },
      orderBy: { created_at: "desc" },
      take: 100 // ✅ limite par défaut
    });

    res.json(orders);
  } catch (err) {
    console.error("Erreur /admin/orders:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

router.get("/orders/:id", async (req, res) => {
  try {
    const order = await prisma.orders.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        user: { select: { id: true, email: true } },
        store: { select: { id: true, name: true } },
        order_items: { include: { products: true } },
        deliveries: { include: { driver: { select: { id: true, email: true } } } },
      },
    });
    if (!order) return res.status(404).json({ error: "Commande introuvable" });
    res.json(order);
  } catch (err) {
    console.error("Erreur /admin/orders/:id:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


/* ===========================
   💰 REVENUS
=========================== */
router.get("/earnings", async (req, res) => {
  try {
    const [drivers, stores, admin] = await Promise.all([
      prisma.driver_earnings.findMany({ orderBy: { created_at: "desc" }, take: 100 }),
      prisma.store_earnings.findMany({ orderBy: { created_at: "desc" }, take: 100 }),
      prisma.admin_earnings.findMany({ orderBy: { created_at: "desc" }, take: 100 }),
    ]);
    res.json({ drivers, stores, admin });
  } catch (err) {
    console.error("Erreur /admin/earnings:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

router.get("/earnings/stats", async (req, res) => {
  try {
    const [drivers, stores, admin] = await Promise.all([
      prisma.driver_earnings.aggregate({ _sum: { amount: true } }),
      prisma.store_earnings.aggregate({ _sum: { amount: true } }),
      prisma.admin_earnings.aggregate({ _sum: { amount: true } }),
    ]);
    res.json({
      drivers: drivers._sum.amount || 0,
      stores: stores._sum.amount || 0,
      admin: admin._sum.amount || 0,
    });
  } catch (err) {
    console.error("Erreur /admin/earnings/stats:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

/* ===========================
   📊 DASHBOARD
=========================== */
router.get("/dashboard", async (req, res) => {
  try {
    const where = parseFilters(req);

    const [usersCount, ordersCount, earnings] = await Promise.all([
      prisma.users.count({ where }),
      prisma.orders.count({ where }),
      prisma.admin_earnings.aggregate({ _sum: { amount: true } }),
    ]);

    res.json({
      usersCount,
      ordersCount,
      adminEarnings: earnings._sum.amount || 0,
    });
  } catch (err) {
    console.error("Erreur /admin/dashboard:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


/* ===========================
   📦 PRODUITS
=========================== */
router.post("/stores/:id/products", async (req, res) => {
  try {
    const storeId = parseInt(req.params.id, 10);
    const store = await prisma.stores.findUnique({ where: { id: storeId } });
    if (!store) {
      return res.status(404).json({ error: "Store introuvable" });
    }

    const { name, description, price, stock, category } = req.body;
    if (!name || isNaN(price) || price <= 0 || !category) {
      return res.status(400).json({ error: "Champs invalides" });
    }

    const product = await prisma.products.create({
      data: {
        store_id: storeId,
        name,
        description,
        price,
        stock: stock || 0,
        category,
        is_active: true,
      },
    });
    res.json(product);
  } catch (err) {
    console.error("Erreur création produit admin:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

router.post("/products", async (req, res) => {
  try {
    const { store_id, name, description, price, stock, category } = req.body;

    if (!store_id || !name || isNaN(price) || price <= 0 || !category) {
      return res.status(400).json({ error: "Champs invalides" });
    }

    const store = await prisma.stores.findUnique({ where: { id: parseInt(store_id) } });
    if (!store) {
      return res.status(404).json({ error: "Store introuvable" });
    }

    const product = await prisma.products.create({
      data: {
        store_id: parseInt(store_id),
        name,
        description,
        price,
        stock: stock || 0,
        category,
        is_active: true,
      },
    });
    res.json(product);
  } catch (err) {
    console.error("Erreur création produit (admin):", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});
export default router;
