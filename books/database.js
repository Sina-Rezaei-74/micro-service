const mongoose = require('mongoose')
require('dotenv').config()

async function main() {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    console.log('Database is connected!')

}

module.exports = main()
