const router = require('express').Router()
const orderController = require('./../controllers/order.controller')

router.get('/', orderController.show)

router.post('/order', orderController.store)

router.get('/orders', orderController.get)

router.get('/order/:id', orderController.show)

module.exports = router