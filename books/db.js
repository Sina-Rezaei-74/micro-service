const mongoose = require('mongoose')

const async db = await mongoose.connect('mongodb://localhost:27017/microservice-books')
console.log('Database is connected!')

module.exports = {
    db
}
