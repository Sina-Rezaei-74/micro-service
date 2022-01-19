const app = require('express')()
require('./database')
const bodyParser = require('body-parser')
const orderRoutes = require('./routes/order.route')
require('dotenv').config()

app.use(bodyParser.json())
app.use('/', orderRoutes)

app.listen(process.env.PORT, () => {
    console.log('Up and running -- This is our Order service!')
})
