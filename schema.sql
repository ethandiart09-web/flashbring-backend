

-- Magasins
CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Produits
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  store_id INT REFERENCES stores(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Commandes
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  store_id INT REFERENCES stores(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending', -- pending, delivered, etc.
  total NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Détail d'une commande
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL,
  price NUMERIC(10,2) NOT NULL
);

-- Livreurs
CREATE TABLE drivers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  vehicle_type TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Livraison (qui livre quelle commande)
CREATE TABLE deliveries (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  driver_id INT REFERENCES drivers(id),
  status TEXT DEFAULT 'assigned',
  created_at TIMESTAMP DEFAULT NOW()
);
