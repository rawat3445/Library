📚 Library Management System – Full Stack
🚀 Project Overview

This is a Full Stack Library Management System built for the internship assignment.
It includes both backend (REST API + database) and frontend (React web app).

✨ Features

➕ Add new books (Admin only)

📖 View all available books

🔍 Search books by title/author/ISBN

📕 Borrow a book

📗 Return a book

(Bonus) JWT Authentication + User roles (Admin / Member)

🛠 Tech Stack
Backend

Node.js + Express

MongoDB (Mongoose ORM)

Postman (API testing)

Frontend

React + Vite (or CRA, whichever you used)

TailwindCSS (or your styling choice)

Axios (for API calls)

📂 Project Structure
library-management-system/
│── backend/                # Express + MongoDB API
│   ├── src/                # Code (models, routes, controllers)
│   ├── .env.example
│   └── README.md
│
│── frontend/               # React UI
│   ├── src/                # Components, pages, API calls
│   ├── .env.example
│   └── README.md
│
│── Library_Management_API.postman_collection.json
│── README.md               # This file (full-stack overview)

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone <your-repo-link>
cd library-management-system

2️⃣ Backend Setup
cd backend
npm install


Create .env file (based on .env.example):

PORT=4000
MONGO_URI=mongodb://localhost:27017/library
JWT_SECRET=your_secret_key


Run server:

npm run dev


API will run at: http://localhost:4000/api/books

3️⃣ Frontend Setup
cd frontend
npm install


Create .env file (based on .env.example):

VITE_API_URL=http://localhost:4000/api


Run app:

npm run dev


Frontend will run at: http://localhost:5173 (Vite default)

📌 API Endpoints
Books

POST /api/books → Add book

GET /api/books → Get all books

GET /api/books?search=title → Search books

PATCH /api/books/:id/borrow → Borrow book

PATCH /api/books/:id/return → Return book

📂 Postman Collection included: Library_Management_API.postman_collection.json

🖥️ Frontend Features

Home page → Displays all books

Search bar → Filter books by title/author/ISBN

Borrow / Return buttons → Calls backend API

(Admin only) Add Book form

🔒 Bonus Features

JWT-based login system

User roles:

Admin → Can add books

Member → Can borrow/return

