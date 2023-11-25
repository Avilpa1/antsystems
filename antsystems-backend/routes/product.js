const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// Get Orders
router.get('/', async (req, res) => {
    try {
        const product = await Product.find({})
        res.json(product)
    } catch {
        
    }
})

// Create Order
router.post('/', async (req, res) => {
    console.log(req.body)
    const product = new Product({
    unitDetails: {
        masterCase: 0,
        innerBox: 0,
        pack: 0,
        pieces: 0,
        caseByPallet: 0,
        rowAndCase: "abc123"
    },
    marketplace: {
        iSku: "abc123"
    },
    priceDetails: {
        retailPrice: 0,
        wholesalePrice: 0,
        distributor: 0,
        onlinePrice: 0
    },
    categories: {
        category: "abc123",
        subCategory: "abc123",
        productType: "abc123",
        subProductType: "abc123"
    },
    brandName: {
        brandName: "abc123",
        subBrand: "abc123"
    },
    measuringDetails: {
        lengthWidthHeight: "abc123",
        volume: "abc123",
        measType: "abc123",
        weight: 0,
        weightType: "abc123",
        totalPoundPallet: 0
    },
    barcode: {
        case: 0,
        inner: 0,
        pack: 0,
        piece: 0
    },
    locations: {
        warehouseLocation: "abc123",
        binLocation: "abc123"
    },
    expirationDetails: {
        manufactureDate: "abc123",
        expirationDate: "abc123",
        lot: "abc123",
        madeIn: "abc123",
        serialNumber: "abc123"
    },
    id: "123456"
})

    try {
        const newProduct = await product.save()
        res.sendStatus(200)
    } catch {
        console.log('Error')
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