#!/bin/bash
set -e

# Génère les tokens
TOKENS=$(node genTokensCookies.js)

CLIENT_TOKEN=$(echo "$TOKENS" | jq -r .client)
STORE_TOKEN=$(echo "$TOKENS" | jq -r .store)
DRIVER_TOKEN=$(echo "$TOKENS" | jq -r .driver)

if [[ -z "$CLIENT_TOKEN" || -z "$STORE_TOKEN" || -z "$DRIVER_TOKEN" ]]; then
  echo "❌ Erreur: impossible de charger les tokens"
  echo "Sortie brute de genTokensCookies.js :"
  echo "$TOKENS"
  exit 1
fi

echo "== Tokens chargés =="
echo "CLIENT: $CLIENT_TOKEN"
echo "STORE:  $STORE_TOKEN"
echo "DRIVER: $DRIVER_TOKEN"
echo ""

# ======================================
# 1. Client ajoute un produit au panier
# ======================================
echo "== 1. Client ajoute un produit au panier =="
CART_JSON=$(curl -s -X POST https://localhost:3000/api/cart/add \
  -H "Content-Type: application/json" \
  -H "Cookie: token=$CLIENT_TOKEN" \
  -d '{"product_id":2,"quantity":2}' \
  --insecure)

echo "$CART_JSON" | jq . 2>/dev/null || echo "⚠️ Réponse non JSON: $CART_JSON"
echo ""

# ======================================
# 2. Client crée une commande
# ======================================
echo "== 2. Client crée une commande =="
ORDER_JSON=$(curl -s -X POST https://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -H "Cookie: token=$CLIENT_TOKEN" \
  -d '{"store_id":14,"payment_method":"card"}' \
  --insecure)

echo "$ORDER_JSON" | jq . 2>/dev/null || echo "⚠️ Réponse non JSON: $ORDER_JSON"
ORDER_ID=$(echo "$ORDER_JSON" | jq -r '.id' 2>/dev/null)
STORE_ID=$(echo "$ORDER_JSON" | jq -r '.store.id' 2>/dev/null)

echo "📦 Order ID = $ORDER_ID"
echo "🏪 Store ID = $STORE_ID"
echo ""

# ======================================
# 3. Création de la livraison
# ======================================
echo "== 3. Création de la livraison liée à la commande =="
DELIVERY_JSON=$(curl -s -X POST https://localhost:3000/api/deliveries \
  -H "Content-Type: application/json" \
  -H "Cookie: token=$STORE_TOKEN" \
  -d "{\"order_id\":$ORDER_ID,\"delivery_code\":\"1234\",\"delivery_date\":\"2025-09-30\",\"delivery_slot\":\"09:00 - 10:00\"}" \
  --insecure)

echo "$DELIVERY_JSON" | jq . 2>/dev/null || echo "⚠️ Réponse non JSON: $DELIVERY_JSON"
DELIVERY_ID=$(echo "$DELIVERY_JSON" | jq -r '.id' 2>/dev/null)

echo "🚚 Delivery ID = $DELIVERY_ID"
echo ""

# ======================================
# 4. Driver prend la livraison
# ======================================
echo "== 4. Driver prend la livraison =="
ACCEPT_JSON=$(curl -s -X POST https://localhost:3000/api/deliveries/$DELIVERY_ID/accept \
  -H "Cookie: token=$DRIVER_TOKEN" \
  --insecure)

echo "$ACCEPT_JSON" | jq . 2>/dev/null || echo "⚠️ Réponse non JSON: $ACCEPT_JSON"
echo ""

# ======================================
# 5. Driver valide la livraison
# ======================================
echo "== 5. Driver valide la livraison avec code PIN =="
VALIDATE_JSON=$(curl -s -X POST https://localhost:3000/api/deliveries/$DELIVERY_ID/validate \
  -H "Content-Type: application/json" \
  -H "Cookie: token=$DRIVER_TOKEN" \
  -d '{"code":"1234"}' \
  --insecure)

echo "$VALIDATE_JSON" | jq . 2>/dev/null || echo "⚠️ Réponse non JSON: $VALIDATE_JSON"
echo ""
