const app = require('express')()
require('./database')
const bodyParser = require('body-parser')
const customerRoutes = require('./routes/customer.route')
require('dotenv').config()

app.use(bodyParser.json())
app.use('/', customerRoutes)

app.listen(process.env.PORT, () => {
    console.log('Up and running -- This is our Customers service!')
})
