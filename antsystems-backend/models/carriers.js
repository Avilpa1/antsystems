const mongoose = require('mongoose')

const carrierSchema = new mongoose.Schema({
    id: { type: Number },
    carrierId: {
      type: string
    },
    serviceType: {
      type: string
    },
    email: {
      type: String
    },
    companyName: {
      type: String
    },
    contactName: {
      type: String
    },
    phone: {
      type: String
    },
  }, { timestamps: true })

module.exports = mongoose.model('carrier', carrierSchema)