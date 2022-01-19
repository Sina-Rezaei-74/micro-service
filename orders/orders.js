const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const orderRoutes = require('./routes/order.route')

app.use(bodyParser.json())

// Connect to database
mongoose.connect('mongodb://localhost:27017/microservice-orders').then(() => {
    console.log('Database is connected!')
}).catch(err => {
    if (err) {
        throw err
    }
})

app.use('/', orderRoutes)

// Listen
app.listen(7777, () => {
    console.log('Up and running -- This is our Order service!')
})
