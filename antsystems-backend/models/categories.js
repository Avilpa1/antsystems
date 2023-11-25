const mongoose = require('mongoose')

const categoriesMainSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true, 
        required: true
        // required: true
    },
    // categoriesSub: {
    //     type: String,
    //     // required: true
    // },
    // categoriesProductType: {
    //     type: String,
    //     // required: true
    // },
    // categoriesProductSubType: {
    //     type: String,
    //     // required: true
    // }

})

const categoriesSubSchema = new mongoose.Schema({
    // categoriesMain: {
    //     type: String,
    //     // required: true
    // },
    // categoriesSub: {
    //     type: String,
    //     // required: true
    // },
    // categoriesProductType: {
    //     type: String,
    //     // required: true
    // },
    // categoriesProductSubType: {
    //     type: String,
    //     // required: true
    // }

})

const CategoriesMain = mongoose.model('CategoriesMain', categoriesMainSchema)
const CategoriesSub = mongoose.model('CategoriesSub', categoriesSubSchema)

module.exports = {CategoriesMain, CategoriesSub}