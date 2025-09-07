// src/app.js
import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.routes.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';
import booksRoutes from "./routes/books.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Library API is running. Try /api/health or /api/books");
});


app.use("/api/books", booksRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running 🚀" });
});

export default app;
