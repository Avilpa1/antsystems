const express = require('express')
const router = express.Router()
const {CategoriesMain, CategoriesSub} = require('../models/categories')

// Get
router.get('/', async (req, res) => {
    try {
        const categoriesMain = await CategoriesMain.find({})
        res.json(categoriesMain)
    } catch {
        
    }
})

// Post
router.post('/createCategories', async (req, res) => {
    console.log(req.body)
    if (req.body.categoriesMain) { const main = new CategoriesMain(req.body.categoriesMain) }
    if (req.body.categoriesSub) { const sub = new CategoriesSub(req.body.categoriesSub) }
    // if (req.body.categoriesMain) { const main = new CategoriesMain(req.body.categoriesMain) }
    // if (req.body.categoriesMain) { const main = new CategoriesMain(req.body.categoriesMain) }
    try {
        const responseMain = await main.save()
        const responseSub = await sub.save()

        const response = {
            categoriesMain: responseMain,
            categoriesSub: responseSub
        }
        res.json(response).sendStatus(200)
    } catch {
        console.log('Error')
        res.sendStatus(500)
    }

})

// Update Order
// router.patch('/', async (req, res) => {
//     const id = "655c8bd073225f8dc0fd0baf"
//     try {
//         const update = await Product.findByIdAndUpdate(id, {
//             brandName: {
//                 brandName: "Energizer 1234"
//         }})
//         res.json(update).sendStatus(200)
//     } catch {
//         console.log('Error')
//         res.sendStatus(500)
//     }

// })

// Delete Order
// router.delete('/', async (req, res) => {
//     const id = "655c99d844a15705cf13176a"
//     try {
//         await Product.findByIdAndDelete({ _id: id })
//         res.sendStatus(200)
//     } catch {
//         console.log('Error')
//         res.sendStatus(500)
//     }
//     Product.findByIdAndDelete(id)
// })

module.exports = router