const mongoose = require('mongoose')

const poSchema = new mongoose.Schema({
    poNumber: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    terms: {
        type: String,
        required: true        
    },
    etd: {
        type: String,
        required: true
    },
    eta: {
        type: String,
        required: true
    },
    supplier: {
        vendorID: {
            type: String,
            required: true
        },
        vendorName: {
            type: String,
            required: true
        },
        address: {
            street1: {
                type: String,
                required: true
            },
            street2: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            zip: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: false
            },
            contactName: {
                type: String,
                required: false
            },
            email: {
                type: String,
                required: false
            }
        }       
    },
    deliveryAddress: {
        shipTo: {
            type: String,
            required: true           
        },
        companyName: {
            type: String,
            required: true
        },
        address: {
            street1: {
                type: String,
                required: true
            },
            street2: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            zip: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: false
            },
            contactName: {
                type: String,
                required: false
            },
            email: {
                type: String,
                required: false
            }
        }
    },
    products: [{
        itemNumber: {
            type: String,
            required: true
        },
        orderUnit: {
            type: String,
            required: true
        },
        unit: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        pack: {
            type: String,
            required: true
        },
        orderQty: {
            type: String,
            required: true
        },
        unitPrice: {
            type: String,
            required: true
        },
        extAmount: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model('PO', poSchema)