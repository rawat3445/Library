// src/services/api.js
const API_URL = "http://localhost:4000/api";

const api = {
  getBooks: async (search = "") => {
    const url = search ? `${API_URL}/books?search=${search}` : `${API_URL}/books`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch books");
    return res.json();
  },

  borrowBook: async (id) => {
    const res = await fetch(`${API_URL}/books/${id}/borrow`, { method: "PATCH" });
    if (!res.ok) throw new Error("Failed to borrow");
    return res.json();
  },

  returnBook: async (id) => {
    const res = await fetch(`${API_URL}/books/${id}/return`, { method: "PATCH" });
    if (!res.ok) throw new Error("Failed to return");
    return res.json();
  },
};

export default api;
