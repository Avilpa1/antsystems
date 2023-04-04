const express = require('express')
const router = express.Router()
const Order = require('../models/order')

// Get Orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find({})
        res.json(orders)
    } catch {
        
    }
})

// Create Order
router.post('/', async (req, res) => {
    console.log(req.body)
    const order = new Order({
        vendor: req.body.vendor,
        carrier: req.body.carrier
    })

    try {
        const newOrder = await order.save()
        res.sendStatus(200)
    } catch {
        console.log('Error')
        res.sendStatus(500)
    }

})

// Update Order
// router.update('/', (req, res) => {
    
// })

// Delete Order
router.delete('/', (req, res) => {
    
})

module.exports = router