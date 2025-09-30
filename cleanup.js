import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// --- Fonction de nettoyage ---
async function cleanup() {
  console.log("🧹 Nettoyage automatique des commandes abandonnées...");
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 45);

  const deleted = await prisma.orders.deleteMany({
    where: {
      status: { in: ["pending", "canceled"] },
      created_at: { lt: cutoff }
    }
  });

  console.log(`✅ Nettoyage terminé : ${deleted.count} commandes supprimées`);
}

// --- Planifier tous les jours à 13h ---
cron.schedule("0 13 * * *", cleanup, {
  timezone: "Europe/Paris"
});
