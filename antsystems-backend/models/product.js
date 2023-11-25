const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    unitDetails: {
        masterCase: { type: Number },
        innerBox: { type: Number },
        pack: { type: Number },
        pieces: { type: Number },
        caseByPallet: { type: Number },
        rowAndCase: { type: String}
    },
    marketplace: {
        iSku: { type: String}
    },
    priceDetails: {
        retailPrice: { type: Number },
        wholesalePrice: { type: Number },
        distributor: { type: Number },
        onlinePrice: { type: Number }
    },
    categories: {
        category: { type: String},
        subCategory: { type: String},
        productType: { type: String},
        subProductType: { type: String}
    },
    brandName: {
        brandName: { type: String},
        subBrand: { type: String}
    },
    measuringDetails: {
        lengthWidthHeight: { type: String},
        volume: { type: String},
        measType: { type: String},
        weight: { type: Number },
        weightType: { type: String},
        totalPoundPallet: { type: Number }
    },
    barcode: {
        case: { type: Number },
        inner: { type: Number },
        pack: { type: Number },
        piece: { type: Number }
    },
    locations: {
        warehouseLocation: { type: String},
        binLocation: { type: String}
    },
    expirationDetails: {
        manufactureDate: { type: String},
        expirationDate: { type: String},
        lot: { type: String},
        madeIn: { type: String},
        serialNumber: { type: String}
    }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)