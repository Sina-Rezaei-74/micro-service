const app = require('express')()
require('./database')
const bookRoutes = require('./routes/book.route')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.json())
app.use('/', bookRoutes)

app.listen(process.env.PORT, () => {
    console.log('Up and running! -- This is our Books service')
})
