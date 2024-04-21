const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookSchema = new mongoose.Schema({
    id: { type: Number},
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String, required: true },
    ISBN: { type: String, required: true },
    status: { type: Boolean, default: true },
    checkedOutBy: { type: String, default: null },
    dueDate: { type: Date, default: null },
});

module.exports = model('book', bookSchema);