import React, { createContext, useState, useEffect, useCallback } from "react";
import api from "../services/api";

export const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async (search = "") => {
    try {
      setLoading(true);
      const data = await api.getBooks(search);
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error?.message || "Failed to fetch books");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // Borrow a book
  const borrowBook = async (id) => {
    const updated = await api.borrowBook(id);
    setBooks((prev) => prev.map((b) => (b._id === id ? updated : b)));
  };

  // Return a book
  const returnBook = async (id) => {
    const updated = await api.returnBook(id);
    setBooks((prev) => prev.map((b) => (b._id === id ? updated : b)));
  };

  return (
    <BooksContext.Provider
      value={{ books, loading, error, fetchBooks, borrowBook, returnBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
