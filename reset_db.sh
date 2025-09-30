#!/bin/bash

# reset_db.sh
# ⚠️ NE PAS UTILISER EN PROD
# Ce script supprime toutes les données (tables) pour repartir d'une base propre

if [ "$NODE_ENV" != "development" ]; then
  echo "❌ Refusé : ce script ne peut tourner qu'en développement (NODE_ENV=development)"
  exit 1
fi

echo "⚠️ Suppression de toutes les données..."
npx prisma db execute --file ./prisma/reset.sql --schema=./prisma/schema.prisma

echo "✅ Base de données vidée. Tu peux relancer ./test_backend.sh"
