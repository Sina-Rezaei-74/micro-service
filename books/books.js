const app = require('express')()
const bookRoutes = require('./routes/book.route')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.json())

// Connect to database
mongoose.connect('mongodb://localhost:27017/microservice-books').then(() => {
    console.log('Database is connected!')
}).catch(err => {
    if (err) {
        throw err
    }
})


app.use('/', bookRoutes)

// Listen
app.listen(4545, () => {
    console.log('Up and running! -- This is our Books service')
})
