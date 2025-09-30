// scanRoutes.js
import fs from "fs";
import path from "path";

const routesDir = path.resolve("./routes");

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");

  const results = [];

  lines.forEach((line, idx) => {
    // Détecte les définitions de routes
    const routeMatch = line.match(/router\.(post|get|put|patch|delete)\(["'`](.*?)["'`]/);
    if (routeMatch) {
      const method = routeMatch[1].toUpperCase();
      const route = routeMatch[2];
      let body = false, params = false, query = false;

      if (line.includes("req.body")) body = true;
      if (line.includes("req.params")) params = true;
      if (line.includes("req.query")) query = true;

      results.push({ method, route, body, params, query, file: filePath, line: idx + 1 });
    }
  });

  return results;
}

function scanRoutes(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".js"));
  let allResults = [];

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const res = scanFile(filePath);
    allResults = allResults.concat(res);
  });

  return allResults;
}

const results = scanRoutes(routesDir);

console.log("📌 Résumé des routes trouvées :\n");
results.forEach(r => {
  console.log(`${r.method} ${r.route} (${r.file}:${r.line})`);
  if (r.body) console.log("   👉 req.body détecté → ajoute un schéma Zod");
  if (r.params) console.log("   👉 req.params détecté → valide les paramètres");
  if (r.query) console.log("   👉 req.query détecté → valide les queries");
});

console.log("\n✅ Suggestion de squelette :\n");
results.forEach(r => {
  if (r.body) {
    console.log(`// ${r.method} ${r.route}`);
    console.log(`const ${r.method}_${r.route.replace(/[:/]/g, "_")}_Schema = z.object({\n  // ... à compléter\n});\n`);
  }
});
