const mongoose = require('mongoose')

const vendorsSchema = new mongoose.Schema({
    id: { type: Number },
    vendorId: { type: string },
    accountNumber: {type: string},
    netPayment: { type: String },
    address: { type: String },
    companyName: { type: String },
    contactName: { type: String },
    phone: { type: String },
    email: { type: String },
}, { timestamps: true })

module.exports = mongoose.model('vendors', vendorsSchema)