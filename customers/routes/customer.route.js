const router = require('express').Router()
const customerController = require('./../controllers/customer.controller')

router.get('/', customerController.show)

router.post('/customer', customerController.store)

router.get('/customers', customerController.get)

router.get('/customer/:id', customerController.show)

router.delete('/customer/:id', customerController.destroy)

module.exports = router
