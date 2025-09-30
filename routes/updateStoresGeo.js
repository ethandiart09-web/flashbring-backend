import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import fetch from "node-fetch";

dotenv.config({ path: "../.env" });

const prisma = new PrismaClient();

async function geocodeStores() {
  try {
    // 🔎 Récupérer tous les stores Gifts (sans coordonnées)
    const stores = await prisma.stores.findMany({
      where: {
        category: "gifts",
        OR: [{ lat: null }, { lng: null }],
      },
    });

    console.log(`➡️ ${stores.length} stores gifts à mettre à jour`);

    for (const store of stores) {
      if (!store.address) {
        console.warn(`⚠️ Store ${store.name} n’a pas d’adresse, ignoré.`);
        continue;
      }

      console.log(`📍 Géocodage: ${store.name} (${store.address})`);

      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(store.address)}&limit=1`
        );
        const data = await response.json();

        if (data.features?.length > 0) {
          const [lon, lat] = data.features[0].geometry.coordinates;

          await prisma.stores.update({
            where: { id: store.id },
            data: {
              lat: parseFloat(lat.toFixed(5)),
              lng: parseFloat(lon.toFixed(5)),
            },
          });

          console.log(`✅ ${store.name} mis à jour → ${lat.toFixed(5)}, ${lon.toFixed(5)}`);
        } else {
          console.warn(`❌ Aucun résultat trouvé pour ${store.name}`);
        }
      } catch (err) {
        console.error(`⚠️ Erreur géocodage pour ${store.name}:`, err.message);
      }
    }

    console.log("🎉 Géocodage terminé pour les stores Gifts !");
  } catch (err) {
    console.error("❌ Erreur principale:", err);
  } finally {
    await prisma.$disconnect();
  }
}

geocodeStores();
