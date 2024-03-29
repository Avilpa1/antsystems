// if (process.env.NODE_ENV !== 'production') {
//   require('dontenv').parse()
// }

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors=require('cors');

const itemRouter = require('./routes/items')
const categoriesRouter = require('./routes/categories')
const vendorRouter = require('./routes/vendors')
const carriersRouter = require('./routes/carriers')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Mongoose 
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://antsystems_dev:4SQ9iaBd3NjlkLo5@cluster0.lgg6esd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => { console.log(error) })
db.once('open', () => { console.log('Connected to AntsystemsDB') })

// Routes
app.use('/items', itemRouter)
app.use('/categories', categoriesRouter)
app.use('/vendors', vendorRouter)
app.use('/carriers', carriersRouter)

app.get('/', (req, res) => {
  res.json({test: 'test'})
})


app.listen(3000, (req,res) => {
  console.log('Server Running');
  });