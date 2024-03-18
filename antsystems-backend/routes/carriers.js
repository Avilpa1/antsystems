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
router.patch('/:id', async (req, res) => {
    var id = req.params.id;
    var {id, ...data} = req.body
    try {
        const update = await Carriers.findByIdAndUpdate(id, {
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
        await Carriers.findByIdAndDelete({ _id: id })
        res.json({status: "OK"})
    } catch {
        console.log('Error')
        res.sendStatus(500)
    }
})

module.exports = router