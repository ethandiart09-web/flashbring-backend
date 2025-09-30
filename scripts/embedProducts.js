// scripts/embedProducts.js
import "dotenv/config";
import OpenAI from "openai";
import pkg from "pg";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const client = new pkg.Client({ connectionString: process.env.DATABASE_URL });

await client.connect();

async function embedAllProducts() {
  const res = await client.query(`
    SELECT id, name, description, category
    FROM products
    WHERE is_active = true AND stock > 0
  `);

  for (const row of res.rows) {
    const text = `${row.name} - ${row.description || ""} - ${row.category}`;
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    const embedding = embeddingRes.data[0].embedding;

    // 🔥 Correction ici
await client.query(
  "UPDATE products SET embedding = $1::vector WHERE id = $2",
  [embedding, row.id] // <== on envoie directement le tableau JS
);

    console.log(`✅ Produit ${row.name} mis à jour`);
  }

  await client.end();
}

embedAllProducts().catch(console.error);
