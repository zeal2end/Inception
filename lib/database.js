// Database 
const mongoose = require('mongoose')
const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Database'))
module.exports = connectDB