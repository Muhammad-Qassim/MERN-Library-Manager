const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Books");
const app = express();

app.use(express.json());

//CORS middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.header("Cache-control", "no-store");
  if (req.method === "OPTIONS") res.sendStatus(200);
  else next();
});

//connect to MongoDB
require("dotenv").config();
const mongoCS = process.env.MONGODB_URI;
mongoose.connect(mongoCS, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
connection.once("open", function () {
  console.log("connected");
});

async function populateBooks() {
  const booksData = [
    {
      id: "1",
      title: "Reactions in REACT",
      author: "Ben Dover",
      publisher: "Random House",
      ISBN: "978-3-16-148410-0",
      status: true,
    },
    {
      id: "2",
      title: "Express-sions",
      author: "Frieda Livery",
      publisher: "Chaotic House",
      ISBN: "978-3-16-148410-2",
      status: true,
    },
    {
      id: "3",
      title: "RESTful Rest",
      author: "Al Gorithm",
      publisher: "ACM Publishers",
      ISBN: "978-3-16-143310-1",
      status: true,
    },
    {
      id: "4",
      title: "See Es Es",
      author: "Anna Log",
      publisher: "O'Reilly",
      ISBN: "987-6-54-148220-1",
      status: false,
      checkedOutBy: "Homer",
      dueDate: "1/1/23",
    },
    {
      id: "5",
      title: "Scripting in Javascript",
      author: "Dee Gital",
      publisher: "IEEE",
      ISBN: "987-6-54-321123-1",
      status: false,
      checkedOutBy: "Marge",
      dueDate: "1/2/23",
    },
    {
      id: "6",
      title: "HTML Heros",
      author: "Jen Neric",
      publisher: "self",
      ISBN: "987-6-54-321123-2",
      status: false,
      checkedOutBy: "Lisa",
      dueDate: "1/3/23",
    },
    {
      id: "7",
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K. Rowling",
      publisher: "Bloomsbury",
      ISBN: "978-1-4088-5601-6",
      status: true,
    },
    {
      id: "8",
      title: "Allegiant",
      author: "Veronica Roth",
      publisher: "Katherine Tegen Books",
      ISBN: "978-0-06-202406-0",
      status: true,
    },
    {
      id: "9",
      title: "The Magicians",
      author: "Lev Grossman",
      publisher: "Viking Press",
      ISBN: "978-0-670-02055-3",
      status: true,
    },
    {
      id: "10",
      title: "Ready Player One",
      author: "Ernest Cline",
      publisher: "Random House",
      ISBN: "978-0-307-88743-6",
      status: true,
    },
  ];

  try {
    await Book.insertMany(booksData);
    console.log("Database populated with 10 books successfully.");
  } catch (err) {
    console.error("Error populating database:", err);
  }
}

populateBooks();

//routes
const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

// welcome message for the root route
app.get("/", (req, res) => {
  res.send("Welcome to the library server");
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
