// public/utils/api.js

async function apiFetch(url, options = {}) {
  const opts = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include", // 👈 toujours envoyer les cookies/session
  };

  return fetch(url, opts);
}

window.apiFetch = apiFetch;
