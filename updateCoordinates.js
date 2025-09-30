import "dotenv/config";
import fetch from "node-fetch";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateCoordinates() {
  const stores = await prisma.stores.findMany({
    select: { id: true, name: true, address: true }
  });

  for (const store of stores) {
    if (!store.address) {
      console.warn(`⚠️ Pas d'adresse pour ${store.name}, id=${store.id}`);
      continue;
    }

    // Adresse complète + France pour être sûr
    const query = `${store.address}, France`;

const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=fr&city=Nancy&q=${encodeURIComponent(store.address)}`;
    const res = await fetch(url, { headers: { "User-Agent": "FlashBring/1.0 (contact@flashbring.fr)" } });
    const data = await res.json();

    if (data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lng = parseFloat(data[0].lon);

      console.log(`📍 ${store.name} (${store.address}) → ${lat}, ${lng}`);

      await prisma.stores.update({
        where: { id: store.id },
        data: { lat, lng }
      });
    } else {
      console.warn(`❌ Pas trouvé : ${store.name} (${store.address})`);
    }
  }
}

updateCoordinates()
  .then(() => {
    console.log("✅ Coordonnées mises à jour avec précision");
    prisma.$disconnect();
  })
  .catch((err) => {
    console.error("Erreur:", err);
    prisma.$disconnect();
  });
