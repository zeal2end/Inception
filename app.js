// setting development variables
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

// Database
const connectDB = require("./lib/database")
connectDB()

// Routes
const indexRouter = require('./routes/index')

// views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})