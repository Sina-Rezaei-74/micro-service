// Load mongoose
const mongoose = require('mongoose')

// Create model and write schema
mongoose.model('Book', {
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    numberPages: {
        type: Number,
        require: false
    },
    publisher: {
        type: String,
        require: false
    }
})
