const mongoose = require('mongoose')

const carrierSchema = new mongoose.Schema({
    id: { type: Number },
    carrierId: {
      type: String
    },
    serviceType: {
      type: String
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