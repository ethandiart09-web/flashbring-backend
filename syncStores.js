import { google } from "googleapis";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

// --- Auth Google ---
const auth = new google.auth.GoogleAuth({
  keyFile: "./flashbring-3d555cc22f03.json", // fichier JSON service account
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

// --- Client Sheets ---
const sheets = google.sheets({ version: "v4", auth });

/**
 * Synchronise un store et ses produits depuis Google Sheets
 * @param {number} storeId - L'ID du store dans la DB
 */
async function syncStore(storeId) {
  try {
    const store = await prisma.stores.findUnique({ where: { id: storeId } });
    if (!store) {
      console.error("❌ Store introuvable");
      return;
    }

    // --- Récupère toutes les lignes de produits
const res = await sheets.spreadsheets.values.get({
  spreadsheetId: store.sheet_id,
  range: "Feuille 1!A2:I"   // <- adapte au vrai nom
});
    const rows = res.data.values || [];

    // --- Récupère la bannière globale du store (ex: F1)
    const bannerRes = await sheets.spreadsheets.values.get({
      spreadsheetId: store.sheet_id,
      range: "F2",
    });

    const bannerUrl = bannerRes.data.values?.[0]?.[0] || null;

    if (bannerUrl) {
      await prisma.stores.update({
        where: { id: storeId },
        data: { banner_url: bannerUrl },
      });
      console.log(`🖼️ Bannière mise à jour pour le store ${store.name}`);
    }

    // --- Transforme les produits
    const sheetProducts = rows
      .map((row) => {
        const [
          productName, // A
          description, // B
          priceStr, // C
          category, // D
          image_url, // E
          , // F (bannière, déjà gérée au-dessus)
          ingredients, // G
          order_count, // H
          option_title, // I
        ] = row;

        if (!productName) return null;

        return {
          productName: productName.trim(),
          description: description?.trim() || null,
          price: parseFloat(
            String(priceStr).replace("€", "").replace(",", ".").trim()
          ),
          category: category?.trim() || "food",
          image_url: image_url?.trim() || null,
          ingredients: ingredients?.trim() || null,
          order_count: parseInt(order_count) || 0,
          option_title: option_title?.trim() || null,
        };
      })
      .filter(Boolean);

    // --- 2. Récupère les produits actuels en BDD
    const dbProducts = await prisma.products.findMany({
      where: { store_id: storeId },
    });

    const sheetNames = sheetProducts.map((p) => p.productName);

    // --- 3. Désactive les produits absents du Sheet
    for (const dbProd of dbProducts) {
      if (!sheetNames.includes(dbProd.name)) {
        await prisma.products.update({
          where: { id: dbProd.id },
          data: { is_active: false },
        });
        console.log(`🗑️ Produit désactivé : ${dbProd.name}`);
      }
    }

    // --- 4. Upsert produits
    for (const prod of sheetProducts) {
      await prisma.products.upsert({
        where: {
          store_id_name: {
            store_id: storeId,
            name: prod.productName,
          },
        },
        update: {
          description: prod.description,
          price: isNaN(prod.price) ? 0 : prod.price,
          category: prod.category,
          image_url: prod.image_url,
          order_count: prod.order_count,
          ingredients: prod.ingredients,
          option_title: prod.option_title,
          is_active: true,
        },
        create: {
          name: prod.productName,
          description: prod.description,
          price: isNaN(prod.price) ? 0 : prod.price,
          stock: 100,
          store_id: storeId,
          category: prod.category,
          image_url: prod.image_url,
          order_count: prod.order_count,
          ingredients: prod.ingredients,
          option_title: prod.option_title,
        },
      });
      console.log(`✅ Produit sync : ${prod.productName}`);
    }

    console.log("🎯 Sync terminé !");
  } catch (err) {
    console.error("❌ Erreur syncStore:", err);
  } finally {
    await prisma.$disconnect();
  }
}

// --- Export pour server.js ---
export { syncStore };

// --- Si exécuté en CLI ---
if (process.argv[1] === new URL(import.meta.url).pathname) {
  if (process.argv[2]) {
    const storeId = parseInt(process.argv[2], 10);
    syncStore(storeId);
  } else {
    console.warn("⚠️ Merci de donner un storeId: node syncStores.js 1");
  }
}
