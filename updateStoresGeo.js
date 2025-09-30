import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";

const prisma = new PrismaClient();

async function geocodeStores() {
  try {
const stores = await prisma.stores.findMany({
  where: {
    category: { in: ["home"] },  // ✅ prend gifts et home
    OR: [{ lat: null }, { lng: null }],
  },
});

    console.log(`➡️ ${stores.length} stores à mettre à jour`);

    for (const store of stores) {
      console.log(`📍 Géocodage: ${store.name} (${store.address})`);

      try {
        const res = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(store.address)}&limit=1`
        );
        const data = await res.json();

        if (data.features?.length) {
          const [lon, la] = data.features[0].geometry.coordinates;
          const lat = parseFloat(la.toFixed(5));
          const lng = parseFloat(lon.toFixed(5));

          await prisma.stores.update({
            where: { id: store.id },
            data: { lat, lng }
          });

          console.log(`✅ ${store.name} mis à jour → ${lat}, ${lng}`);
        } else {
          console.warn(`⚠️ Adresse introuvable: ${store.address}`);
        }
      } catch (err) {
        console.error(`❌ Erreur API pour ${store.name}:`, err.message);
      }
    }

    console.log("🎉 Géocodage terminé !");
  } catch (err) {
    console.error("Erreur principale:", err);
  } finally {
    await prisma.$disconnect();
  }
}

geocodeStores();
