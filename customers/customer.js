// Load mongoose
const mongoose = require('mongoose')

// Create model and write schema
mongoose.model('Customer', {
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    }
})
