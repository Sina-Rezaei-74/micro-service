const orderModel = require('./../models/order.model')
const axios = require('axios')

module.exports = {
    async get(req, res) {
        const orders = await orderModel.find()
        res.json(orders)
    },
    async store(req, res) {

        const order = new orderModel({
            CustomerID: req.body.CustomerID,
            BookID: req.body.BookID,
            initialDate: req.body.initialDate,
            deliveryDate: req.body.deliveryDate
        })

        const result = await order.save()
        res.json(result)

    },
    async show(req, res) {
        const order = await orderModel.findById(req.params.id)
        try {
            const result = await axios.get('http://localhost:4545/book/' + order.BookID)
            let orderObject = { bookTitle: result.data.title, customerName: '' }

            const result_2 = await axios.get('http://localhost:5555/customer/' + order.CustomerID)
            orderObject.customerName = result_2.data.name
            res.json(orderObject)
        }
        catch (e) {
            res.json({
                status: false,
                message: e.message
            })
        }
    }
}
