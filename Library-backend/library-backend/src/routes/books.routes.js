// routes/books.routes.js
import { Router } from "express";
import Book from "../models/book.model.js";
import { addBook, borrowBook, returnBook } from "../controllers/books.controller.js";

const router = Router();

// GET /api/books?search=keyword
router.get("/", async (req, res) => {
  try {
    const { search } = req.query;

    let query = { available: true };

    
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
          { isbn:   { $regex: search, $options: "i" } },
        ],
      };
    }

    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books", error: err });
  }
});

// POST /api/books
router.post("/", addBook);

// PATCH /api/books/:id/borrow
router.patch("/:id/borrow", borrowBook);

// PATCH /api/books/:id/return
router.patch("/:id/return", returnBook);

export default router;
