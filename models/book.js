const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type:String,
    },
},
{
    timestamps: true
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;