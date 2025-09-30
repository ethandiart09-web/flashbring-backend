// utils/delivery.js

// Frais de livraison (progressifs selon la distance)
export function calculateDeliveryFee(distanceKm) {
  if (distanceKm <= 5) {
    return 2 + (distanceKm * 1);
  } else if (distanceKm <= 10) {
    return 3 + (distanceKm * 1.5);
  } else {
    return 3.5 + (distanceKm * 2);
  }
}

// Distance (Haversine)
export function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Temps de livraison
export function calculateDeliveryTime(store, user, mode = "scooter") {
  const prepTime = 15;
  const buffer = 6;

  if (!user?.lat || !user?.lng || !store.lat || !store.lng) {
    return prepTime + buffer;
  }

  const dist = getDistanceKm(user.lat, user.lng, store.lat, store.lng);
  const speed = mode === "bike" ? 5 : 3; // min/km
  const travelTime = dist * speed;

  return Math.round(prepTime + travelTime + buffer);
}
