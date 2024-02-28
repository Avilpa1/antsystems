const express = require('express')
const router = express.Router()
const DB = require('../models/vendors')

// Get
router.get('/', async (req, res) => {
    try {
        const db = await DB.find({})
        res.json(db)
    } catch {
        
    }
})

// Create
router.post('/', async (req, res) => {
    console.log(req.body)
    const db = new DB(req.body)
    try {
        const newItem = await db.save()
        console.log(newItem)
        res.json(newItem)//.sendStatus(200)
    } catch (err) {
        console.log('Error', err)
        res.sendStatus(500)
    }

})

// Update
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

// Delete
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