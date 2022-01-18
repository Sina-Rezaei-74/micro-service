const router = require('express').Router()
const bookController = require('./../controllers/book.controller')

router.get('/', bookController.show)

router.post('/book', bookController.store)

router.get('/books', bookController.get)

router.get('/book/:id', bookController.show)

router.delete('/book/:id', bookController.destroy)

module.exports = router