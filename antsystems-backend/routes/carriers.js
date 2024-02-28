const express = require('express')
const router = express.Router()
const Carriers = require('../models/carriers')

// Get
router.get('/', async (req, res) => {
    try {
        const carrier = await Carriers.find({})
        res.json(carrier)
    } catch {
        
    }
})

// Create
router.post('/', async (req, res) => {
    console.log(req.body)
    const carrier = new Carriers(req.body)
    try {
        const newItem = await carrier.save()
        console.log(newItem)
        res.json(newItem) //.sendStatus(200)
    } catch (err) {
        console.log('Error', err)
        res.sendStatus(500)
    }

})

// Update Order
router.patch('/', async (req, res) => {
    const id = "655c8bd073225f8dc0fd0baf"
    try {
        const update = await Product.findByIdAndUpdate(id, {
            brandName: {
                brandName: "Energizer 1234"
        }})
        res.json(update).sendStatus(200)
    } catch {
        console.log('Error')
        res.sendStatus(500)
    }

})

// Delete Order
router.delete('/', async (req, res) => {
    const id = "655c99d844a15705cf13176a"
    try {
        await Product.findByIdAndDelete({ _id: id })
        res.sendStatus(200)
    } catch {
        console.log('Error')
        res.sendStatus(500)
    }
    Product.findByIdAndDelete(id)
})

module.exports = router