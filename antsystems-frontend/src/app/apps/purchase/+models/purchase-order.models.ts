import { Item } from "../../inventory/products/item/item.models";

export interface PurchaseOrder {
    id: number,
    status: string,
    vendor: {
      vendorId: string,
      vendorName: string,
      netPayment: number,
      accountNumber: string,
    },
    carrier: {
      carrierId: string,
      carrierName: string,
      serviceType: string,
      freightTerm: string,
    },
    date: string,
    etaDate: string,
    refrence: string,
    note: string,
    poNumber: string,
    subTotal: number,
    freight: number,
    extra: number,
    discount: number,
    total: number,
    items: Item[],
}