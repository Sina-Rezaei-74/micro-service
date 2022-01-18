// Load express
const express = require('express')
const app = express()

// Load body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Load mongoose
const mongoose = require('mongoose')

// Load model
require('./customer')
const Customer = mongoose.model('Customer')

// Connect to database
mongoose.connect('mongodb://localhost:27017/microservice-customers').then(() => {
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

app.post('/customer', (req, res) => {
    let newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }
    let customer = new Customer(newCustomer)

    customer.save().then(() => {
        console.log('Customer Created')
        res.send('Customer created')
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.get('/customers', (req, res) => {
    Customer.find().then(customers => {
        res.json(customers)
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.get('/customer/:id', (req, res) => {
    Customer.findById(req.params.id).then(customer => {
        if (customer) {
            res.json(customer)
        } else {
            res.send('Invalid ID!')
        }
    }).catch(err => {
        if (err) {
            throw err
        }
    })
})

app.delete('/customer/:id', (req, res) => {
    Customer.findByIdAndRemove(req.params.id).then(() => {
        console.log('Customer deleted with success!')
        res.send('Customer deleted with success!')
    }).catch((err) => {
        if (err) {
            throw err
        }
    })
})

// Listen
app.listen(5555, () => {
    console.log('Up and running -- This is our Customers service!')
})
