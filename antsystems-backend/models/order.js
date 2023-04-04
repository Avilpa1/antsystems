const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    vendor: {
        type: String,
        // required: true
    },
    carrier: {
        type: String,
        // required: true
    }
})

module.exports = mongoose.model('Order', orderSchema)