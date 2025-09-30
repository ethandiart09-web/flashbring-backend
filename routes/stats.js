import express from "express";
import { PrismaClient } from "@prisma/client";
import { verifyToken, verifyRole } from "../middleware/auth.js";

const router = express.Router();
const prisma = new PrismaClient();

// ==================== ADMIN ====================
router.get("/admin", verifyToken, verifyRole("admin"), async (req, res) => {
  try {
    const deliveredOrders = await prisma.orders.count({
      where: { status: "delivered" },
    });

    const totalSales = await prisma.orders.aggregate({
      _sum: { total: true },
      where: { status: "delivered" },
    });

    const driverEarnings = await prisma.driver_earnings.aggregate({
      _sum: { amount: true },
    });

    const adminEarnings = await prisma.admin_earnings.aggregate({
      _sum: { amount: true },
    });

    res.json({
      deliveredOrders,
      totalSales: totalSales._sum.total || 0,
      driverEarnings: driverEarnings._sum.amount || 0,
      adminEarnings: adminEarnings._sum.amount || 0,
      storeEarnings:
        (totalSales._sum.total || 0) -
        (driverEarnings._sum.amount || 0) -
        (adminEarnings._sum.amount || 0),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur stats admin" });
  }
});

// ==================== STORE ====================
router.get("/store/:id", verifyToken, verifyRole("store"), async (req, res) => {
  try {
    const storeId = parseInt(req.params.id);
    if (req.user.id !== storeId) return res.status(403).json({ error: "Accès interdit" });

    const completedOrders = await prisma.orders.count({
      where: { store_id: storeId, status: "delivered" },
    });

    const totalRevenue = await prisma.orders.aggregate({
      _sum: { total: true },
      where: { store_id: storeId, status: "delivered" },
    });

// Top produits avec noms
const grouped = await prisma.order_items.groupBy({
  by: ["product_id"],
  _sum: { quantity: true },
  orderBy: { _sum: { quantity: "desc" } },
  take: 5,
});

const productIds = grouped.map(g => g.product_id);

const products = await prisma.products.findMany({
  where: { id: { in: productIds } },
  select: { id: true, name: true }
});

// Fusion des données
const topProducts = grouped.map(g => {
  const product = products.find(p => p.id === g.product_id);
  return {
    product_id: g.product_id,
    name: product ? product.name : "Inconnu",
    quantity: g._sum.quantity
  };
});

    // enrichir avec le nom du produit
    const productsInfo = await prisma.products.findMany({
      where: { id: { in: topProducts.map(p => p.product_id) } },
      select: { id: true, name: true },
    });

    const topProductsWithNames = topProducts.map(p => ({
      ...p,
      name: productsInfo.find(prod => prod.id === p.product_id)?.name || "Inconnu",
    }));

res.json({   
  completedOrders, 
  totalRevenue: totalRevenue._sum.total || 0,
  topProducts,
});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur stats store" });
  }
});

// ==================== DRIVER ====================
router.get("/driver/:id", verifyToken, verifyRole("driver"), async (req, res) => {
  try {
    const driverId = parseInt(req.params.id);
    if (req.user.id !== driverId) return res.status(403).json({ error: "Accès interdit" });

    const totalDeliveries = await prisma.deliveries.count({
      where: { driver_id: driverId, status: "delivered" },
    });

    const totalEarnings = await prisma.driver_earnings.aggregate({
      _sum: { amount: true },
      where: { driver_id: driverId },
    });

    const history = await prisma.deliveries.findMany({
      where: { driver_id: driverId },
      include: {
        orders: { select: { id: true, total: true, status: true, created_at: true } },
      },
      orderBy: { created_at: "desc" },
      take: 10,
    });

    res.json({
      totalDeliveries,
      totalEarnings: totalEarnings._sum.amount || 0,
      history,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur stats driver" });
  }
});


// ==================== GLOBAL ====================
router.get("/global", verifyToken, verifyRole("admin"), async (req, res) => {
  try {
    // Nombre d’inscriptions par jour (7 derniers jours)
    const usersByDay = await prisma.$queryRaw`
      SELECT DATE(created_at) as jour, COUNT(*)::int as count
      FROM users
      GROUP BY jour
      ORDER BY jour DESC
      LIMIT 7
    `;

    // Nombre de commandes par jour (7 derniers jours)
    const ordersByDay = await prisma.$queryRaw`
      SELECT DATE(created_at) as jour, COUNT(*)::int as count
      FROM orders
      GROUP BY jour
      ORDER BY jour DESC
      LIMIT 7
    `;

    res.json({
      usersByDay,
      ordersByDay
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur stats globales" });
  }
});


export default router;
