// generate_client_token.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userId = process.argv[2] || 1; // ⚡ par défaut 1 si non fourni

const token = jwt.sign(
  {
    id: parseInt(userId, 10),
    email: `user${userId}@test.com`,
    role: "client"
  },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

console.log("👉 Token généré pour user", userId, ":", token);
