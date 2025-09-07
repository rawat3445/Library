import Book from "../models/book.model.js";

// GET /api/books?search=keyword
// GET /api/books?search=keyword
export async function getBooks(req, res) {
  try {
    const { search } = req.query;

    // no search -> return everything
    if (!search || search.trim() === "") {
      const all = await Book.find({});
      return res.json(all);
    }

    const regex = new RegExp(search, "i");

    // search by title/author (regex) OR ISBN (exact string match)
    const results = await Book.find({
      $or: [
        { title:  { $regex: regex } },
        { author: { $regex: regex } },
        { isbn: search }, // ✅ exact match ISBN
        { isbn: { $regex: regex } }
      ]
    });

    return res.json(results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error fetching books", error: err.message });
  }
}



// POST /api/books
export async function addBook(req, res) {
  try {
    const { title, author, isbn } = req.body;
    if (!title || !author || !isbn) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // force ISBN to string on write (extra safety)
    const saved = await new Book({ title, author, isbn: String(isbn) }).save();
    res.status(201).json(saved);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "ISBN already exists" });
    }
    res.status(500).json({ message: "Error adding book", error: err.message });
  }
}

// PATCH /api/books/:id/borrow
export const borrowBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(
      id,
      { available: false },
      { new: true }
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error borrowing book", error: error.message });
  }
};

// PATCH /api/books/:id/return
export const returnBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(
      id,
      { available: true },
      { new: true }
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error returning book", error: error.message });
  }
};
