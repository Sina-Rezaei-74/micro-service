// Load express
const express = require('express')
const app = express()

// Load body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Load mongoose
const mongoose = require('mongoose')

// Load model
require('./book')
const Book = mongoose.model('Book')

// Connect to database
mongoose.connect('mongodb://localhost:27017/microservice-books').then(() => {
    console.log('Database is connected!')
}).catch(err => {
    if (err) {
        throw err
    }
})

// Routes
app.get('/', (req, res) => {
    res.send('This is our main endpoint!')
})

app.post('/book', (req, res) => {
    let newBook = {
        title: req.body.title,
        author: req.body.author,
        numberPages: req.body.numberPages,
        publisher: req.body.publisher
    }

    let book = new Book(newBook)

    book.save().then(() => {
        console.log('New book created!')
        res.send('A new book created success!')
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.get('/books', (req, res) => {
    Book.find().then(books => {
        res.json(books)
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.get('/book/:id', (req, res) => {
    Book.findById(req.params.id).then(book => {
        if (book) {
            res.json(book)
        } else {
            res.sendStatus(404)
        }
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.delete('/book/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id).then(() => {
        console.log('Book removed with success!')
        res.send('Book removed with success!')
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

// Listen
app.listen(4545, () => {
    console.log('Up and running! -- This is our Books service')
})
