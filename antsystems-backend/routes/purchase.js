const express = require('express')
const router = express.Router()
const PO = require('../models/purchase')

// Get PO's
router.get('/', async (req, res) => {
    try {
        const pos = await PO.find({})
        // res.json(pos)
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(pos))
    } catch {
        
    }
})

// Create PO
router.post('/', async (req, res) => {
    console.log(req.body)
    const po = new PO({
        ...req.body
    })

    try {
        const newPO = await po.save()
        res.json(newPO)
    } catch {
        console.log('error')
        res.sendStatus(500)
    }

})

// Update Order
// router.update('/', (req, res) => {
    
// })

// // Delete Order
// router.delete('/', (req, res) => {
    
// })

module.exports = router