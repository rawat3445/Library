import { useContext } from "react";
import { BooksContext } from "../context/BooksContext.jsx"; // 👈 no .jsx needed

export function useBooks() {
  return useContext(BooksContext);
}
