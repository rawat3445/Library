import React from "react";
import Library from "./pages/Library";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        📚 Library Manager
      </h1>
      <Library />
    </div>
  );
}
