import React, { useState } from "react";
import { useBooks } from "../context/useBooks.js";
import SearchBar from "../shared/SearchBar.jsx";
import BookCard from "../shared/BookCard.jsx";

export default function Library() {
  const { books, loading, error, fetchBooks } = useBooks();
  const [search, setSearch] = useState("");

  const onSearch = (q) => {
    setSearch(q);
    fetchBooks(q);
  };

  return (
    <div className="space-y-6">
      <SearchBar onSearch={onSearch} value={search} />

      {loading && <p className="text-yellow-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length === 0 && !loading ? (
          <p className="text-gray-400">No books found.</p>
        ) : (
          books.map((b) => <BookCard key={b._id} book={b} />)
        )}
      </div>
    </div>
  );
}
