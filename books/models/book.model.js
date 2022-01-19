const mongoose = require('mongoose')
const bookSchema = require('./../schema/book.schema')

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
