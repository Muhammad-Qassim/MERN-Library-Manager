const express = require('express');
const router = express.Router();
const Book = require('../models/Books');


// get all books
router.get('/', async (req, res) => {
    const status = req.query.status === 'true';
    const books = await Book.find({ status });
    res.json(books);
});

