import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const payload = {
  id: 1,  // 👈 ton user admin (ethan.diart09@gmail.com)
  email: "ethan.diart09@gmail.com",
  role: "admin"
};

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });

console.log("👉 Token admin:", token);
