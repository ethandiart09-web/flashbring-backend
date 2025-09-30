// import_products.js
import fs from "fs";
import path from "path";
import { PrismaClient } from "@prisma/client";
import csv from "csv-parser";

const prisma = new PrismaClient();

// ✅ Sécurise le chemin du fichier
function safeFilePath(filePath) {
  const baseDir = path.resolve("./imports"); // dossier autorisé
  const absPath = path.resolve(filePath);

  if (!absPath.startsWith(baseDir)) {
    throw new Error("❌ Fichier non autorisé (path traversal détecté)");
  }
  if (path.extname(absPath) !== ".csv") {
    throw new Error("❌ Seuls les fichiers .csv sont autorisés");
}

// eslint-disable-next-line security/detect-non-literal-fs-filename
  if (!fs.existsSync(absPath)) {
    throw new Error("❌ Le fichier n’existe pas :" + absPath);
  }

  return absPath;
}

async function importProducts(filePath) {
  const results = [];

// eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      try {
        for (const row of results) {
          // 1. Vérifie si le store existe déjà
          let store = await prisma.stores.findFirst({
            where: { name: row.store_name },
          });

          // 2. Sinon crée-le
          if (!store) {
            store = await prisma.stores.create({
              data: {
                name: row.store_name,
                address: "Adresse fictive", // à remplacer si tu as la vraie adresse
                user_id: 1, // ⚠️ adapte à ton user_id
              },
            });
          }

          // 3. Ajoute le produit
          await prisma.products.create({
            data: {
              name: row.product_name,
              description: row.description,
              price: parseFloat(row.price),
              stock: 100,
              store_id: store.id,
              category: row.category,
            },
          });
        }

        console.log("✅ Import terminé !");
      } catch (err) {
        console.error("❌ Erreur pendant l’import :", err);
      } finally {
        await prisma.$disconnect();
      }
    });
}

// 🚀 Lancer avec : node import_products.js imports/pizza-luigi.csv
const filePath = safeFilePath(process.argv[2]);
importProducts(filePath);
