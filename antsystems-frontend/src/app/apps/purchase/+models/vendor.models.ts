import { address } from "../../shared/models/shared.models";

export interface Vendor {
    id: number;
    accountNumber: string;
    address: address;
    companyName: string;
    contactName: string;
    createdAt: string;
    email: string;
    netPayment: string;
    phone: string;
    updatedAt: string;
    vendorId: string;
    _id: string;
}