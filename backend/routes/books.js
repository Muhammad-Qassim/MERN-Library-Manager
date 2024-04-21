const express = require("express");
const router = express.Router();
const Book = require("../models/Books");

// get all books
router.get("/", async (req, res) => {
  const status = req.query.status === "true";
  const books = await Book.find({ status });
  res.json(books);
});

// get all checked out books
router.get("/checkedout", async (req, res) => {
  const status = req.query.status === "false";
  const books = await Book.find({ status });
  res.json(books);
});

// post a new book
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  const count = await Book.countDocuments();
  newBook.id = count + 1;
  const existingBook = await Book.findOne({ id: newBook.id });
  if (existingBook) {
    return res.status(400).json({ message: "Book already exists" });
  } else {
    await newBook.save();
    res.status(201).json(newBook);
  }
});

// check out a book
router.post("/checkout/:id", async (req, res) => {
  const book = await Book.findOne({ id: req.params.id });
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  } else if (book.status === false) {
    return res.status(400).json({ message: "Book is already checked out" });
  } else {
    book.status = false;
    book.checkedOutBy = req.body.checkedOutBy;
    book.dueDate = req.body.dueDate;
    await book.save();
    res.json(book);
  }
});

// check in a book
router.post("/checkin/:id", async (req, res) => {
  const book = await Book.findOne({ id: req.params.id });
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  } else if (book.status === true) {
    return res.status(400).json({ message: "Book is already checked in" });
  } else {
    book.status = true;
    book.checkedOutBy = null;
    book.dueDate = null;
    await book.save();
    res.json(book);
  }
});


// export the router
module.exports = router;
