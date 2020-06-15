const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const movieRouter = require('./routes/movieRoutes.js')
const randomRouter = require('./routes/randomRoutes.js')
require('dotenv').config()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))
app.use(movieRouter)
app.use(randomRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})