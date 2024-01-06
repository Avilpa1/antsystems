export interface Item {
    unitDetails:       UnitDetails;
    marketplace:       Marketplace;
    priceDetails:      PriceDetails;
    categories:        Categories;
    brandName:         BrandName;
    measuringDetails:  MeasuringDetails;
    barcode:           Barcode;
    locations:         Locations;
    expirationDetails: ExpirationDetails;
    sku: string;
    item: string;
    description: string;
    _id: string;
    id: number;
}

export interface Barcode {
    case:  string;
    inner: string;
    pack:  string;
    piece: string;
}

export interface BrandName {
    brandName: string;
    subBrand:  string;
}

export interface Categories {
    category:   CategoryItem[];
    subCategory:    CategoryItem[];
    productType:    CategoryItem[];
    subProductType: CategoryItem[];
}

export interface ExpirationDetails {
    manufactureDate: string;
    expirationDate:  string;
    lot:             string;
    madeIn:          string;
    serialNumber:    string;
}

export interface Locations {
    warehouseLocation: string;
    binLocation:       string;
}

export interface Marketplace {
    iSku: string;
}

export interface MeasuringDetails {
    lengthWidthHeight: string;
    volume:            string;
    measType:          string;
    weight:            string;
    weightType:        string;
    totalPoundPallet:  string;
}

export interface PriceDetails {
    retailPrice:    string;
    wholesalePrice: string;
    distributor:    string;
    onlinePrice:    string;
}

export interface UnitDetails {
    masterCase:   string;
    innerBox:     string;
    pack:         string;
    pieces:       string;
    caseByPallet: string;
    rowAndCase:   string;
}

export interface CategoryItem {
    id: number;
    name: string;
    parentId?: number[];
}
