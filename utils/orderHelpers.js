// utils/orderHelpers.js
import { getDistanceKm, calculateDeliveryFee, calculateDeliveryTime } from "./delivery.js";

export function calculateMultiStoreDistance(user, stores) {
  if (!user?.lat || !user?.lng || stores.length === 0) return 0;

  const userLat = Number(user.lat);
  const userLng = Number(user.lng);

  // Trouver le store le plus proche
  let closestStore = stores[0];
  let minDist = getDistanceKm(userLat, userLng, stores[0].lat, stores[0].lng);

  stores.forEach(store => {
    const dist = getDistanceKm(userLat, userLng, store.lat, store.lng);
    if (dist < minDist) {
      minDist = dist;
      closestStore = store;
    }
  });

  let totalDist = minDist;

  // Distance entre closestStore et les autres
  stores.forEach(store => {
    if (store.id !== closestStore.id) {
      totalDist += getDistanceKm(
        closestStore.lat, closestStore.lng,
        store.lat, store.lng
      );
    }
  });

  return totalDist;
}

export async function buildSingleStoreOrder(order, userId, prisma) {
  const user = await prisma.users.findUnique({
    where: { id: userId },
    select: { lat: true, lng: true }
  });

  // ✅ Total produits
  const productsTotal = order.order_items.reduce((sum, item) => {
    const qty = Number(item.quantity) || 0;
    let itemTotal = parseFloat(item.price) * qty;

if (item.supplements?.length) {
  item.supplements
    .filter(Boolean) // ⚡ enlève les null
    .forEach(supp => {
      itemTotal += parseFloat(supp.price) * (supp.quantity || 0);
    });
}
    return sum + itemTotal;
  }, 0);

  // ✅ Identifier le store (fallback si order.store vide)
  let store = order.store;
  if (!store && order.order_items.length > 0) {
    store = order.order_items[0].products.store;
  }

  // ✅ Frais livraison + délais
  let deliveryFee = 0;
  let deliveryTime = 0;
  if (user?.lat && user?.lng && store?.lat && store?.lng) {
    const dist = getDistanceKm(user.lat, user.lng, store.lat, store.lng);
deliveryFee = calculateDeliveryFee(dist);
    deliveryTime = calculateDeliveryTime(store, user);
  }

  // ✅ Frais service
  const serviceFee = productsTotal * 0.05;

  // ✅ Total général
  const total = parseFloat((productsTotal + serviceFee + deliveryFee).toFixed(2));

  return {
    id: order.id,
    store_id: store?.id || null,
    status: order.status,
    payment_method: order.payment_method,
    store: store
      ? {
          id: store.id,
          name: store.name,
          banner_url: store.banner_url,
          address: store.address,
          lat: store.lat,
          lng: store.lng,
          category: store.category
        }
      : null,
    fees: {
      service: parseFloat(serviceFee.toFixed(2)),
      delivery: parseFloat(deliveryFee.toFixed(2))
    },
    deliveryTime,
    subtotal: parseFloat(productsTotal.toFixed(2)),
    total,
    items: order.order_items.map(i => ({
      id: i.id,
      product_id: i.product_id,
      name: i.products.name,
      image: i.products.image_url,
      quantity: i.quantity,
      price: parseFloat(i.price),
      total:
        parseFloat(i.price) * i.quantity +
        (i.supplements?.reduce(
          (s, sup) => s + parseFloat(sup.price) * sup.quantity,
          0
        ) || 0),
supplements: (i.supplements || [])
  .filter(Boolean)
  .map(s => ({
    name: s.product.name,
    quantity: s.quantity,
    price: parseFloat(s.price)
      }))
    }))
  };
}

export async function buildMultiStoreOrder(order, userId, prisma) {
  const user = await prisma.users.findUnique({
    where: { id: userId },
    select: { lat: true, lng: true }
  });

  const uniqueStores = [];
  order.order_items.forEach(i => {
    if (i.products.store && !uniqueStores.find(s => s.id === i.products.store.id)) {
      uniqueStores.push(i.products.store);
    }
  });

  const productsTotal = order.order_items.reduce((sum, item) => {
    const qty = Number(item.quantity) || 0;
    let itemTotal = parseFloat(item.price) * qty;

    if (item.supplements?.length) {
      item.supplements.forEach(supp => {
        itemTotal += parseFloat(supp.price) * (supp.quantity || 0);
      });
    }
    return sum + itemTotal;
  }, 0);

  let deliveryFee = 0;
  let deliveryTime = 0;
  if (user?.lat && user?.lng) {
    const totalDist = calculateMultiStoreDistance(
      { lat: user.lat, lng: user.lng },
      uniqueStores
    );
    deliveryFee = 3.0 + totalDist * 1.0;
    deliveryTime = Math.round(totalDist * 3 + 15 + 6);
  }

  const serviceFee = productsTotal * 0.10;
  const total = parseFloat((productsTotal + serviceFee + deliveryFee).toFixed(2));

  return {
    id: order.id,
    status: order.status,
    payment_method: order.payment_method,
    stores: uniqueStores.map(s => ({
      id: s.id,
      name: s.name,
      address: s.address,
      banner_url: s.banner_url
    })),
    fees: {
      service: parseFloat(serviceFee.toFixed(2)),
      delivery: parseFloat(deliveryFee.toFixed(2))
    },
    deliveryTime,
    subtotal: parseFloat(productsTotal.toFixed(2)),
    total,
    items: order.order_items.map(i => ({
      id: i.id,
      product_id: i.product_id,
      name: i.products.name,
      image: i.products.image_url,
      quantity: i.quantity,
      price: parseFloat(i.price),
      total:
        parseFloat(i.price) * i.quantity +
        (i.supplements?.reduce((s, sup) => s + parseFloat(sup.price) * sup.quantity, 0) || 0),
      store: {
        id: i.products.store.id,
        name: i.products.store.name,
        address: i.products.store.address,
        banner_url: i.products.store.banner_url
      },
      supplements: i.supplements.map(s => ({
        name: s.product.name,
        quantity: s.quantity,
        price: parseFloat(s.price)
      }))
    }))
  };
}
