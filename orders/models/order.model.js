const mongoose = require('mongoose')
const orderSchema = require('./../schema/order.schema')

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
