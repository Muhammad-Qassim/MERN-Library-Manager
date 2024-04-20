const express = require('express');
const router = express.Router();
const Book = require('../models/Books');


// get all books
router.get('/', async (req, res) => {
    const status = req.query.status === 'true';
    const books = await Book.find({ status });
    res.json(books);
});

// post a new book
router.post('/', async (req, res) => {
    const newBook = new Book(req.body);
    const existingBook = await Book.findOne({ id: newBook.id });
    if (existingBook) {
        return res.status(400).json({ message: 'Book already exists' });
    } else {
        await newBook.save();
        res.status(201).json(newBook);
    }
});