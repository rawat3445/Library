import React from "react";
import { useBooks } from "../context/useBooks";

export default function BookCard({ book }) {
  const { borrowBook, returnBook } = useBooks();

  return (
    <div className="border rounded-xl shadow-md p-4 flex flex-col">
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p className="text-sm text-gray-600">Author: {book.author}</p>
      <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
      <p
        className={`mt-2 text-sm font-medium ${
          book.available ? "text-green-600" : "text-red-600"
        }`}
      >
        {book.available ? "Available" : "Borrowed"}
      </p>

      <div className="mt-3">
        {book.available ? (
          <button
            onClick={() => borrowBook(book._id)}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
          >
            Borrow
          </button>
        ) : (
          <button
            onClick={() => returnBook(book._id)}
            className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
          >
            Return
          </button>
        )}
      </div>
    </div>
  );
}
