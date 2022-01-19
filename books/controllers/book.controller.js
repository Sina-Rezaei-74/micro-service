const bookModel = require('./../models/book.model')

module.exports = {
    async get(req, res) {
        const books = await bookModel.find()
        res.json(books)
    },
    async store(req, res) {

        // just make instance
        const book = new bookModel({
            title: req.body.title,
            author: req.body.author,
            numberPages: req.body.numberPages,
            publisher: req.body.publisher
        })

        // save instance into database
        const result = await book.save()
        res.json(result)
    },
    async show(req, res) {
        const book = await bookModel.findById(req.params.id)
        try {
            res.json(book)
        }
        catch (e) {
            res.json({
                status: false,
                message: e.message
            })
        }
    },
    async destroy(req, res) {
        await bookModel.findByIdAndRemove(req.params.id)
        res.json('Book removed with success!')
    },
}
