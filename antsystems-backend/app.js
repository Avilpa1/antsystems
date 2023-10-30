// if (process.env.NODE_ENV !== 'production') {
//   require('dontenv').parse()
// }

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const orderRouter = require('./routes/orders')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Mongoose 
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/antsystems', {
  useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => { console.log(error) })
db.once('open', () => { console.log('Connected to Mongoose') })

// Routes
app.use('/orders', orderRouter)

app.get('/', (req, res) => {
  res.json({test: 'test'})
})


app.listen(3000)