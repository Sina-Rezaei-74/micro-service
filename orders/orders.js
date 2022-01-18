// Load express
const express = require('express')
const app = express()

// Load axios
const axios = require('axios')

// Load body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Load mongoose
const mongoose = require('mongoose')

// Load model
require('./order')
const Order = mongoose.model('Order')

// Connect to database
mongoose.connect('mongodb://localhost:27017/microservice-orders').then(() => {
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

app.post('/order', (req, res) => {
    let newOrder = {
        CustomerID: req.body.CustomerID,
        BookID: req.body.BookID,
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    }

    let order = new Order(newOrder)

    order.save().then(() => {
        console.log('Order created with success!')
        res.send('Order created with success!')
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.get('/orders', (req, res) => {
    Order.find().then(orders => {
        res.json(orders)
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.get('/order/:id', (req, res) => {
    Order.findById(req.params.id).then(order => {
        if (order) {
            axios.get('http://localhost:4545/book/' + order.BookID).then(response => {
                let orderObject = { bookTitle: response.data.title, customerName: '' }

                axios.get('http://localhost:5555/customer/' + order.CustomerID).then(response => {
                    orderObject.customerName = response.data.name
                    res.json(orderObject)
                }).catch(err => {
                    if (err) {
                        throw err
                    }
                })
            }).catch(err => {
                if (err) {
                    throw err
                }
            })
        } else {
            res.send('Invalid order')
        }
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

// Listen
app.listen(7777, () => {
    console.log('Up and running -- This is our Order service!')
})
