// debugStore.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("=== Vérification des données ===");

  const users = await prisma.users.findMany();
  console.log("\n👤 USERS");
  console.table(users.map(u => ({
    id: u.id,
    email: u.email,
    role: u.role
  })));

  const stores = await prisma.stores.findMany();
  console.log("\n🏪 STORES");
  console.table(stores.map(s => ({
    id: s.id,
    name: s.name,
    user_id: s.user_id
  })));

  const orders = await prisma.orders.findMany();
  console.log("\n🛒 ORDERS");
  console.table(orders.map(o => ({
    id: o.id,
    user_id: o.user_id,
    store_id: o.store_id,
    status: o.status,
    total: o.total
  })));
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
