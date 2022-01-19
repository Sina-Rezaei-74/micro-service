const mongoose = require('mongoose')

const { Schema } = mongoose

const customerSchema = new Schema({
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

module.exports = customerSchema
