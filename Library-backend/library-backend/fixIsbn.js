import mongoose from "mongoose";
import Book from "./src/models/book.model.js";
import dotenv from "dotenv";

dotenv.config();

async function fixIsbn() {
  await mongoose.connect(process.env.MONGO_URI);

  const books = await Book.find({});
  for (const book of books) {
    if (typeof book.isbn === "number") {
      console.log("Fixing:", book.title, "isbn:", book.isbn);
      book.isbn = String(book.isbn);
      await book.save();
    }
  }

  console.log("✅ All ISBNs converted to strings.");
  process.exit(0);
}

fixIsbn();
