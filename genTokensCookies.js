import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

const clientPayload = { id: 1, email: "client@test.com", role: "client" };
const storePayload = { id: 6, email: "store@test.com", role: "store" };
const driverPayload = { id: 4, email: "driver@test.com", role: "driver" };

const tokens = {
  client: jwt.sign(clientPayload, JWT_SECRET, { expiresIn: "7d" }),
  store: jwt.sign(storePayload, JWT_SECRET, { expiresIn: "7d" }),
  driver: jwt.sign(driverPayload, JWT_SECRET, { expiresIn: "7d" }),
};

// ✅ On sort un JSON propre
console.log(JSON.stringify(tokens));
