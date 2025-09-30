// prisma/seed.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Nettoyage complet
  await prisma.deliveries.deleteMany();
  await prisma.order_items.deleteMany();
  await prisma.orders.deleteMany();
  await prisma.products.deleteMany();
  await prisma.stores.deleteMany();
  await prisma.users.deleteMany();

// Hashs de mot de passe
const hashAdmin = await bcrypt.hash("Loulou@2009", 10);
const hashClient = await bcrypt.hash("azerty", 10);
const hashStore = await bcrypt.hash("store123", 10);   // 🔑 corrige ici
const hashDriver = await bcrypt.hash("driver123", 10); // 🔑 corrige ici

  // Admin
  const admin = await prisma.users.create({
    data: {
      email: "ethan.diart09@gmail.com",
      password_hash: hashAdmin,
      role: "admin",
      delivery_code: "1234",
    },
  });

  // Client
  const client = await prisma.users.create({
    data: {
      email: "jean@test.com",
      password_hash: hashClient,
      firstname: "Jean",
      lastname: "Dupont",
      role: "client",
      delivery_code: "6396",
      city: "Paris",
    },
  });

  // Store Owner
  const storeOwner = await prisma.users.create({
    data: {
      email: "pizzeria@test.com",
      password_hash: hashStore,
      firstname: "Luigi",
      lastname: "Pizza",
      role: "store",
    },
  });

  // Store
  const store = await prisma.stores.create({
    data: {
      name: "Pizzeria Luigi",
      address: "10 rue de la Pizza, Paris",
      user_id: storeOwner.id,
    },
  });

  // Produit
  const product = await prisma.products.create({
    data: {
      store_id: store.id,
      name: "Pizza Margherita",
      price: 10.5,
      stock: 50,
      category: "food",
      is_active: true,
    },
  });

  // Driver
  const driver = await prisma.users.create({
    data: {
      email: "driver@test.com",
      password_hash: hashDriver,
      firstname: "Paul",
      lastname: "Driver",
      role: "driver",
    },
  });

  // Order test
  const order = await prisma.orders.create({
    data: {
      user_id: client.id,
      store_id: store.id,
      status: "pending",
      total: product.price,
      category: "food",
order_items: {
  create: [
    {
      product_id: product.id,
      quantity: 1,
      price: product.price   // ✅ on ajoute le prix attendu par le schéma
    }
  ]
}
    },
  });

// livraison libre (pas encore de driver)
const delivery = await prisma.deliveries.create({
  data: {
    order_id: order.id,
    status: "pending_assignment", // dispo pour test accept
    delivery_code: "9999"
  }
});

  console.log("✅ Seed terminé avec succès !");
  console.log({ admin, client, storeOwner, store, product, driver, order, delivery });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
