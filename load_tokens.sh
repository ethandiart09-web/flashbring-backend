#!/bin/bash
TOKENS=$(node genTokensCookies.js | tail -n 1)

export CLIENT_TOKEN=$(echo "$TOKENS" | jq -r .client)
export STORE_TOKEN=$(echo "$TOKENS" | jq -r .store)
export DRIVER_TOKEN=$(echo "$TOKENS" | jq -r .driver)

echo "✅ Tokens exportés dans l'environnement"
echo "CLIENT=$CLIENT_TOKEN"
echo "STORE=$STORE_TOKEN"
echo "DRIVER=$DRIVER_TOKEN"
