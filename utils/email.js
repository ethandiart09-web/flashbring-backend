// backend/utils/email.js
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";
import fs from "fs";

function generateInvoice(order) {
  const doc = new PDFDocument({ margin: 50 });
  const path = `./invoices/facture-${order.id}.pdf`;

  if (!fs.existsSync("./invoices")) {
    fs.mkdirSync("./invoices");
  }

  doc.pipe(fs.createWriteStream(path));

  // --- En-tête ---
  doc.fontSize(20).text("Flashbring.fr", 50, 50);
  doc.fontSize(20).text("FACTURE", 400, 50, { align: "right" });

  // --- Bloc Payé ---
  doc.moveDown().fontSize(12);
  doc.text("Payé", 50, 100);
  doc.text(`Référence de paiement : ${order.paymentRef || "XXXX"}`, 50, 115);
  doc.text("Vendu par Flashbring Micro Française", 50, 130);
  doc.text("TVA : FRXXXXXXXX", 50, 145);

  doc.moveDown();

  // Ligne séparation
  doc.moveTo(50, 170).lineTo(550, 170).stroke();

  // --- Infos Facture ---
  doc.fontSize(12)
    .text(`Date de la facture / livraison : ${new Date().toLocaleDateString()}`, 50, 180)
    .text(`Numéro de facture : FR${order.id}`, 50, 195)
    .text(`Total à payer : ${order.total.toFixed(2)} €`, 50, 210);

  // Bloc Client à gauche
  doc.text(order.customerName, 300, 180)
    .text(order.customerAddress || "Adresse client", 300, 195)
    .text(order.customerCity || "Ville, CP", 300, 210)
    .text("FR", 300, 225);

  // Ligne séparation
  doc.moveTo(50, 250).lineTo(550, 250).stroke();

  // --- Adresses ---
  doc.fontSize(12).text("Adresse de facturation", 50, 260);
  doc.text(order.customerName, 50, 275);
  doc.text(order.customerAddress || "Adresse facturation", 50, 290);
  doc.text(order.customerCity || "Ville, CP", 50, 305);
  doc.text("FR", 50, 320);

  doc.text("Adresse de livraison", 220, 260);
  doc.text(order.customerName, 220, 275);
  doc.text(order.customerAddress || "Adresse livraison", 220, 290);
  doc.text(order.customerCity || "Ville, CP", 220, 305);
  doc.text("FR", 220, 320);

  doc.text("Vendu par", 400, 260);
  doc.text("Flashbring Micro FR", 400, 275);
  doc.text("33 rue d’Amance", 400, 290);
  doc.text("Champenoux 54280", 400, 305);
  doc.text("FR", 400, 320);

  // Ligne séparation
  doc.moveTo(50, 350).lineTo(550, 350).stroke();

  // --- Infos commande ---
  doc.text("Informations de la commande", 50, 360);
  doc.text(`Date de la commande : ${new Date().toLocaleDateString()}`, 50, 375);
  doc.text(`Numéro de la commande : ${order.id}`, 50, 390);

  // Ligne séparation
  doc.moveTo(50, 410).lineTo(550, 410).stroke();

  // --- Détails de la facture ---
  doc.fontSize(12).text("Détails de la facture", 50, 420);
  doc.moveTo(50, 440).lineTo(550, 440).stroke();

  // En-tête du tableau
  let y = 450;
  doc.text("Description", 50, y);
  doc.text("Qté", 250, y);
  doc.text("PU HT", 300, y);
  doc.text("TVA", 370, y);
  doc.text("PU TTC", 420, y);
  doc.text("Total TTC", 500, y, { align: "right" });

  y += 20;

  // Produits
  order.items.forEach(item => {
    const totalHT = item.price * item.qty;
    const tva = 20; // %
    const totalTTC = totalHT * 1.2;

    doc.text(item.name, 50, y);
    doc.text(item.qty.toString(), 250, y);
    doc.text(item.price.toFixed(2) + " €", 300, y);
    doc.text(tva + "%", 370, y);
    doc.text((item.price * 1.2).toFixed(2) + " €", 420, y);
    doc.text(totalTTC.toFixed(2) + " €", 500, y, { align: "right" });
    y += 20;
  });

  // Livraison si applicable
  if (order.delivery) {
    doc.text("Livraison", 50, y);
    doc.text("1", 250, y);
    doc.text(order.delivery.toFixed(2) + " €", 300, y);
    doc.text("20%", 370, y);
    doc.text((order.delivery * 1.2).toFixed(2) + " €", 420, y);
    doc.text((order.delivery * 1.2).toFixed(2) + " €", 500, y, { align: "right" });
    y += 20;
  }

  // Ligne séparation
  doc.moveTo(50, y).lineTo(550, y).stroke();
  y += 10;

  // Totaux
  doc.fontSize(12)
    .text(`Facture Total : ${order.total.toFixed(2)} €`, 400, y, { align: "right" });

  y += 20;
  doc.text("Taux TVA : 20%", 400, y, { align: "right" });
  y += 15;
  doc.text(`Total HT : ${(order.total / 1.2).toFixed(2)} €`, 400, y, { align: "right" });
  y += 15;
  doc.text(`TVA : ${(order.total - order.total / 1.2).toFixed(2)} €`, 400, y, { align: "right" });

  // Ligne séparation
  y += 20;
  doc.moveTo(50, y).lineTo(550, y).stroke();

  y += 10;
  doc.fontSize(14).text(`Total : ${order.total.toFixed(2)} €`, 400, y, { align: "right" });

  doc.end();
  return path;
}

// Envoi email avec facture en PJ
export async function sendInvoiceEmail(order) {
// utils/email.js
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true = SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

  const invoicePath = generateInvoice(order);

  await transporter.sendMail({
    from: `"Mon Shop" <${process.env.SMTP_USER}>`,
    to: order.customerEmail,
    subject: `Facture - Commande #${order.id}`,
    text: `Bonjour ${order.customerName}, merci pour votre commande !`,
    attachments: [{ filename: `facture-${order.id}.pdf`, path: invoicePath }]
  });

  console.log("✅ Facture envoyée à", order.customerEmail);
}
