const customerModel = require('./../models/customer.model')

module.exports = {
    async get(req, res) {
        const customers = await customerModel.find()
        res.json(customers)
    },
    async store(req, res) {

        const customer = new customerModel({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        })

        const result = await customer.save()
        res.json(result)
    },
    async show(req, res) {
        const customer = await customerModel.findById(req.params.id)
        try {
            res.json(customer)
        }
        catch (e) {
            res.json({
                status: false,
                message: e.message
            })
        }
    },
    async destroy(req, res) {
        await customerModel.findByIdAndRemove(req.params.id)
        res.json('customer removed with success!')
    }
}