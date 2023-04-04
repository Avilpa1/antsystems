// if (process.env.NODE_ENV !== 'production') {
//   require('dontenv').parse()
// }

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const orderRouter = require('./routes/orders')
const poRouter = require('./routes/purchase')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const uri = "mongodb+srv://avilapa:Oj23QDgPNiYHsPg1@cluster0.9riqpkw.mongodb.net/?retryWrites=true&w=majority";
// Mongoose 
const mongoose = require("mongoose");
mongoose.connect(uri, {
  useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => { console.log(error) })
db.once('open', () => { console.log('Connected to Mongoose') })

// Routes
app.use('/orders', orderRouter)
app.use('/po', poRouter)

app.get('/', (req, res) => {
  res.json({test: 'test 2'})
})


app.listen(3000)

// Oj23QDgPNiYHsPg1