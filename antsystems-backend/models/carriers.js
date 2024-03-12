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
    address: {
      street: { type: String},
      street2: { type: String},
      city: { type: String},
      state: { type: String},
      zip: { type: String},
    },
  }, { timestamps: true })

module.exports = mongoose.model('carrier', carrierSchema)