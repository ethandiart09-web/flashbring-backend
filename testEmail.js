// testEmail.js
import "dotenv/config";              // 👈 charge ton .env automatiquement
import { sendInvoiceEmail } from "./utils/email.js";

async function main() {
  console.log("SMTP_USER =", process.env.SMTP_USER); // debug
  console.log("SMTP_PASS =", process.env.SMTP_PASS ? "*****" : "undefined"); // debug

  const fakeOrder = {
    id: 999,
    customerName: "John Doe",
    customerEmail: "ethan.diart09@gmail.com",
    total: 42.5,
    items: [
      { name: "Produit A", qty: 2, price: 10 },
      { name: "Produit B", qty: 1, price: 22.5 }
    ]
  };

  await sendInvoiceEmail(fakeOrder);
}

main().catch(console.error);
