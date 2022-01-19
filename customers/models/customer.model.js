const mongoose = require('mongoose')
const customerSchema = require('./../schema/customer.schema')

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer