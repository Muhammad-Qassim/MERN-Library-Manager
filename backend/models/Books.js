const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: string, required: true },
    publisher: { type: string, required: true },
    ISBN: { type: Number, required: true },
    status: { type: Boolean, default: 'available' },
    checkedOutBy: { type: String, default: null },
    dueDate: { type: Date, default: null },
});

module.exports = model('book', bookSchema);