import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductForm } from './products.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productForm!: FormGroup;
  data = [
    { title: 'Product Lower', icon: 'system_update_alt', products: 24, categories: 3, color: 'emergency' },
    { title: 'Product Expired Soon', icon: 'update', products: 4, categories: 3, color: 'emergency' },
    { title: 'Product Most Seller', icon: 'sell', products: 8, categories: 3, color: 'success' },
    { title: 'Product Back Order', icon: 'low_priority', products: 4, categories: 3, color: 'base' },
    { title: 'Product Stocked for 3mo', icon: 'orders', products: 4, categories: 3, color: 'warning' },
    { title: 'Product Overstock', icon: 'shelves', products: 4, categories: 3, color: 'warning' },
    { title: 'Product Damages', icon: 'warning', products: 4, categories: 3, color: 'warning' },
    { title: 'Product Over cost', icon: 'monetization_on', products: 4, categories: 3, color: 'emergency' },
  ]

  constructor() {
    this.initForm()
  }

  initForm() {
    this.productForm = new FormGroup(
      {
        unitDetails: new FormGroup({
            masterCase: new FormControl(''),
            innerBox: new FormControl(''),
            pack: new FormControl(''),
            pieces: new FormControl(''),
            caseByPallet: new FormControl(''),
            rowAndCase: new FormControl('')
        }),
        marketplace: new FormGroup({
          iSku: new FormControl(''),
        }),
        priceDetails: new FormGroup({
          retailPrice: new FormControl(''),
          wholesalePrice: new FormControl(''),
          distributor: new FormControl(''),
          onlinePrice: new FormControl(''),
        }),
        categories: new FormGroup({
          category: new FormControl(''),
          subCategory: new FormControl(''),
          productType: new FormControl(''),
          subProductType: new FormControl(''),
        }),
        brandName: new FormGroup({
          brandName: new FormControl(''),
          subBrand: new FormControl(''),
        }),
        measuringDetails: new FormGroup({
          lengthWidthHeight: new FormControl(''),
          volume: new FormControl(''),
          measType: new FormControl(''),
          weight: new FormControl(''),
          weightType: new FormControl(''),
          totalPoundPallet: new FormControl(''),
        }),
        barcode: new FormGroup({
          case: new FormControl(''),
          inner: new FormControl(''),
          pack: new FormControl(''),
          piece: new FormControl(''),
        }),
        locations: new FormGroup({
          warehouseLocation: new FormControl(''),
          binLocation: new FormControl(''),
        }),
        expirationDetails: new FormGroup({
          manufactureDate: new FormControl(''),
          expirationDate: new FormControl(''),
          lot: new FormControl(''),
          madeIn: new FormControl(''),
          serialNumber: new FormControl(''),
        }),

      }
    )

    console.warn(this.productForm)
  }
  // 35 form controls
}
