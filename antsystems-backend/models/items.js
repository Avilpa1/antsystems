const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    id: { type: Number },
    active: {type: Boolean},
    sku: { type: String },
    item: { type: String },
    description: { type: String },
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
        category: {
            name: { type: String},
            id: { type: Number},
            parentId: { type: [Number]}
        },
        subCategory: {
            name: { type: String},
            id: { type: Number},
            parentId: { type: [Number]}
        },
        productType: {
            name: { type: String},
            id: { type: Number},
            parentId: { type: [Number]}
        },
        subProductType: {
            name: { type: String},
            id: { type: Number},
            parentId: { type: [Number]}
        },
    },
    brandName: {
        brandName: { type: String},
        subBrand: { type: String}
    },
    measuringDetails: {
        lengthWidthHeight: { type: String},
        volume: { type: String},
        measuringType: {
            name: { type: String },
            id: { type: Number },
            MeasuringType: { type: String },
        },
        weight: { type: Number },
        weightType: {
            name: { type: String },
            id: { type: Number },
            MeasuringType: { type: String },
        },
        totalPoundPallet: { type: Number }
    },
    barcode: {
        case: { type: Number },
        inner: { type: Number },
        pack: { type: Number },
        piece: { type: Number }
    },
    locations: {
        warehouseLocation: {
            address: {
                street: { type: String},
                street2: { type: String},
                city: { type: String},
                state: { type: String},
                zip: { type: String},
                country: { type: String},
            },
            id: { type: Number},
            parentId: { type: [Number]}
        },
        binLocation: {
            name: { type: String},
            note: { type: String },
            id: { type: Number},
            parentId: { type: [Number]}
        },
    },
    expirationDetails: {
        manufactureDate: { type: String},
        expirationDate: { type: String},
        lot: { type: String},
        madeIn: { type: String},
        serialNumber: { type: String}
    }
}, { timestamps: true })

const itemSchema2 = new mongoose.Schema({
    id: {
      type: Number
    },
    active: {
      type: Boolean
    },
    sku: {
      type: String
    },
    item: {
      type: String
    },
    description: {
      type: String
    },
    unitDetails: {
      masterCase: {
        type: Number
      },
      innerBox: {
        type: Number
      },
      pack: {
        type: Number
      },
      pieces: {
        type: Number
      },
      caseByPallet: {
        type: Number
      },
      rowAndCase: {
        type: String
      }
    },
    marketplace: {
      iSku: {
        type: String
      }
    },
    priceDetails: {
      retailPrice: {
        type: Number
      },
      wholesalePrice: {
        type: Number
      },
      distributor: {
        type: Number
      },
      onlinePrice: {
        type: Number
      }
    },
    categories: {
      category: {
        name: {
          type: String
        },
        id: {
          type: Number
        }
      },
      subCategory: {
        name: {
          type: String
        },
        id: {
          type: Number
        },
        parentId: {
          type: [
            Number
          ]
        }
      },
      productType: {
        name: {
          type: String
        },
        id: {
          type: Number
        },
        parentId: {
          type: [
            Number
          ]
        }
      },
      subProductType: {
        name: {
          type: String
        },
        id: {
          type: Number
        },
        parentId: {
          type: [
            Number
          ]
        }
      }
    },
    brandName: {
      brandName: {
        name: {
          type: String
        },
        id: {
          type: Number
        }
      },
      subBrand: {
        name: {
          type: String
        },
        id: {
          type: Number
        },
        parentId: {
          type: [
            Number
          ]
        }
      }
    },
    measuringDetails: {
      lengthWidthHeight: {
        type: String
      },
      volume: {
        type: String
      },
      measuringType: {
        name: {
          type: String
        },
        id: {
          type: Number
        },
        MeasuringType: {
          type: String
        }
      },
      weight: {
        type: String
      },
      weightType: {
        name: {
          type: String
        },
        id: {
          type: Number
        },
        weightType: {
          type: String
        }
      },
      totalPoundPallet: {
        type: String
      }
    },
    barcode: {
      case: {
        type: String
      },
      inner: {
        type: String
      },
      pack: {
        type: String
      },
      piece: {
        type: String
      }
    },
    locations: {
      warehouseLocation: {
        id: {
          type: Number
        },
        name: {
          type: String
        },
        address: {
          street: {
            type: String
          },
          street2: {
            type: String
          },
          city: {
            type: String
          },
          state: {
            type: String
          },
          zip: {
            type: Date
          },
          country: {
            type: String
          }
        }
      },
      binLocation: {
        id: {
          type: Number
        },
        parentId: {
          type: [
            Number
          ]
        },
        name: {
          type: String
        },
        note: {
          type: String
        }
      }
    },
    expirationDetails: {
      manufactureDate: {
        type: String
      },
      expirationDate: {
        type: String
      },
      lot: {
        type: String
      },
      madeIn: {
        type: String
      },
      serialNumber: {
        type: String
      }
    }
  }, { timestamps: true })

module.exports = mongoose.model('item', itemSchema2)