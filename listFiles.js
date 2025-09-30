// listFiles.js sécurisé
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ on bloque la racine au dossier backend
const rootDir = path.resolve(__dirname);

function listDir(dir, prefix = "") {
  // 🔒 sécurité : refuse de sortir du dossier root
  const safePath = path.resolve(rootDir, path.relative(rootDir, dir));
  if (!safePath.startsWith(rootDir)) {
    console.error("❌ Chemin non autorisé :", dir);
    return;
  }

// eslint-disable-next-line security/detect-non-literal-fs-filename
  const items = fs.readdirSync(safePath, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(safePath, item.name);
    if (item.isDirectory()) {
      console.log(`${prefix}📂 ${item.name}/`);
      listDir(fullPath, prefix + "  "); // recursion
    } else {
      console.log(`${prefix}📄 ${item.name}`);
    }
  }
}

console.log(`\n📌 Structure des fichiers dans ${rootDir}\n`);
listDir(rootDir);
