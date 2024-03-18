const express = require('express')
const router = express.Router()
// const DB = require('../models/vendors')
const Vendors = require('../models/vendors')

// Get
router.get('/', async (req, res) => {
    try {
        const db = await Vendors.find({})
        res.json(db)
    } catch {
        
    }
})

// Create
router.post('/', async (req, res) => {
    console.log(req.body)
    const vendor = new Vendors(req.body)
    try {
        const newItem = await vendor.save()
        console.log(newItem)
        res.json(newItem) //.sendStatus(200)
    } catch (err) {
        console.log('Error', err)
        res.sendStatus(500)
    }

})

// Update Order
router.patch('/:id', async (req, res) => {
    var id = req.params.id;
    var {id, ...data} = req.body
    try {
        const update = await Vendors.findByIdAndUpdate(id, {
            ...data
        })
        res.json({status: "OK"})
    } catch (err) {
        console.log('Error', err)
        res.sendStatus(500)
    }

})

// Delete Order
router.delete('/:id', async (req, res) => {
    var id = req.params.id;
    console.log('delete', id)
    try {
        await Vendors.findByIdAndDelete({ _id: id })
        res.json({status: "OK"})
    } catch {
        console.log('Error')
        res.sendStatus(500)
    }
})

module.exports = router