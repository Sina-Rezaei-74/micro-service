const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const customerRoutes = require('./routes/customer.route')

app.use(bodyParser.json())

// Connect to database
mongoose.connect('mongodb://localhost:27017/microservice-customers').then(() => {
    console.log('Database is connected!')
}).catch(err => {
    if (err) {
        throw err
    }
})

app.use('/', customerRoutes)

// Listen
app.listen(5555, () => {
    console.log('Up and running -- This is our Customers service!')
})
