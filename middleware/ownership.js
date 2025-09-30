// prisma.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;


/**
 * Middleware pour vérifier qu’un utilisateur est bien propriétaire d’une ressource.
 *
 * @param {Object} options
 * @param {string} options.model - Le modèle Prisma ciblé (orders, users, products, etc.)
 * @param {string} [options.idParam="id"] - Nom du paramètre de route contenant l’ID
 * @param {string} [options.ownerField="user_id"] - Champ représentant le propriétaire
 * @param {boolean} [options.allowAdmin=true] - Si true, ADMIN a toujours accès
 */
export function requireOwnership({
  model,
  idParam = "id",
  ownerField = "user_id",
  allowAdmin = true,
} = {}) {
  if (!model) {
    throw new Error("❌ requireOwnership: option `model` est obligatoire");
  }

  // ✅ Liste blanche des modèles autorisés
  const allowedModels = {
    users: prisma.users,
    orders: prisma.orders,
    stores: prisma.stores,
    products: prisma.products,
    order_items: prisma.order_items,
  };

  // eslint-disable-next-line security/detect-object-injection
  const modelClient = allowedModels[model];
  if (!modelClient) {
    console.warn("❌ requireOwnership: modèle Prisma non autorisé:", model);
    return (req, res) =>
      res.status(400).json({ error: "Modèle non autorisé" });
  }

  return async (req, res, next) => {
    try {
      const id = parseInt(req.params[idParam], 10);
      if (isNaN(id)) {
        return res.status(400).json({ error: "ID invalide" });
      }

      // ✅ L’utilisateur doit être authentifié
      if (!req.user) {
        return res.status(401).json({ error: "Non authentifié" });
      }

      // ✅ ADMIN bypass si activé
      if (allowAdmin && req.user.role === "ADMIN") {
        return next();
      }

      // 🔎 Vérifie que la ressource appartient à l’utilisateur
      // eslint-disable-next-line security/detect-object-injection
      const record = await modelClient.findUnique({
        where: { id },
        // eslint-disable-next-line security/detect-object-injection
        select: { [ownerField]: true },
      });

      if (!record) {
        return res.status(404).json({ error: `${model} introuvable` });
      }

      if (record[ownerField] !== req.user.id) {
        return res.status(403).json({ error: "Accès interdit" });
      }

      // ✅ Tout est ok → passe au suivant
      next();
    } catch (err) {
      console.error("❌ requireOwnership error:", err);
      res.status(500).json({ error: "Erreur serveur" });
    }
  };
}
