import React from "react";

export default function SearchBar({ onSearch, value }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search by title or author..."
        className="px-4 py-2 w-64 rounded-l-lg border border-gray-700 bg-gray-800 text-white focus:outline-none"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button
        onClick={() => onSearch(value)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-white"
      >
        Search
      </button>
    </div>
  );
}
