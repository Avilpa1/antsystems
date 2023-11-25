import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categories, Product } from './products.models';
import { Observable, Subject, of } from 'rxjs'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productForm!: FormGroup;

  public categoriesData: Observable<Categories> = new Observable()
  data:any = {
    "categoryMain": [
        {
            "name": "Electronics",
            "id": 1
        },
        {
            "name": "Clothing",
            "id": 2
        }
    ],
    "subCategory": [
        {
            "name": "Batteries",
            "id": 1,
            "parentId": [1]
        },
        {
            "name": "Televisions",
            "id": 2,
            "parentId": [1]
        },
        {
          "name": "Mens",
          "id": 3,
          "parentId": [2]
      },
      {
          "name": "Womens",
          "id": 4,
          "parentId": [2]
      }
    ],
    "productType": [
        {
            "name": "Lithium",
            "id": 1,
            "parentId": [1]

        },
        {
            "name": "Alkaline",
            "id": 2,
            "parentId": [1]

        },
        {
            "name": "Flatscreen",
            "id": 3,
            "parentId": [2]

        },
        {
            "name": "Plasma",
            "id": 4,
            "parentId": [2]

        },
        {
            "name": "Curved",
            "id": 5,
            "parentId": [2]

        },
        {
          "name": "Shirt",
          "id": 6,
          "parentId": [3, 4]

        },
    ],
    "subProductType": [
        {
            "name": "AA",
            "id": 1,
            "parentId": [1]
        },
        {
            "name": "AA",
            "id": 2,
            "parentId": [2]
        },
        {
            "name": "AAA",
            "id": 3,
            "parentId": [1]
        },
        {
            "name": "AAA",
            "id": 4,
            "parentId": [2]
        },
        {
          "name": "9v",
          "id": 5,
          "parentId": [2]
        },
        {
          "name": "65in",
          "id": 6,
          "parentId": [3, 4, 5]
        },
        {
          "name": "75in",
          "id": 7,
          "parentId": [3, 4, 5]
        },
        {
          "name": "S",
          "id": 8,
          "parentId": [6]
        },
        {
          "name": "M",
          "id": 9,
          "parentId": [6]
        },        {
          "name": "L",
          "id": 10,
          "parentId": [6]
        },
    ]

  }
  constructor() {
    this.initForm()
    this.categoriesData.subscribe(res => {
      console.log(res)
    })
    this.categoriesData = of(this.data)
  }

  initForm() {
    this.productForm = new FormGroup(
      {
        unitDetails: new FormGroup({
            masterCase: new FormControl('', [Validators.required]),
            innerBox: new FormControl('', [Validators.required]),
            pack: new FormControl('', [Validators.required]),
            pieces: new FormControl('', [Validators.required]),
            caseByPallet: new FormControl('', [Validators.required]),
            rowAndCase: new FormControl('', [Validators.required])
        }),
        marketplace: new FormGroup({
          iSku: new FormControl('', [Validators.required]),
        }),
        priceDetails: new FormGroup({
          retailPrice: new FormControl('', [Validators.required]),
          wholesalePrice: new FormControl('', [Validators.required]),
          distributor: new FormControl('', [Validators.required]),
          onlinePrice: new FormControl('', [Validators.required]),
        }),
        categories: new FormGroup({
          category: new FormControl(null, [Validators.required]),
          subCategory: new FormControl({value: null, disabled: true}, [Validators.required]),
          productType: new FormControl({value: null, disabled: true}, [Validators.required]),
          subProductType: new FormControl({value: null, disabled: true}, [Validators.required]),
        }),
        brandName: new FormGroup({
          brandName: new FormControl('', [Validators.required]),
          subBrand: new FormControl('', [Validators.required]),
        }),
        measuringDetails: new FormGroup({
          lengthWidthHeight: new FormControl('', [Validators.required]),
          volume: new FormControl('', [Validators.required]),
          measType: new FormControl('', [Validators.required]),
          weight: new FormControl('', [Validators.required]),
          weightType: new FormControl('', [Validators.required]),
          totalPoundPallet: new FormControl('', [Validators.required]),
        }),
        barcode: new FormGroup({
          case: new FormControl('', [Validators.required]),
          inner: new FormControl('', [Validators.required]),
          pack: new FormControl('', [Validators.required]),
          piece: new FormControl('', [Validators.required]),
        }),
        locations: new FormGroup({
          warehouseLocation: new FormControl('', [Validators.required]),
          binLocation: new FormControl('', [Validators.required]),
        }),
        expirationDetails: new FormGroup({
          manufactureDate: new FormControl('', [Validators.required]),
          expirationDate: new FormControl('', [Validators.required]),
          lot: new FormControl('', [Validators.required]),
          madeIn: new FormControl('', [Validators.required]),
          serialNumber: new FormControl('', [Validators.required]),
        }),

      }
    )
    console.warn(this.productForm)
  }

  resetChildren(controlName: string) {
    const control = this.productForm.get(controlName)
    control?.reset()
    console.warn(this.productForm.get('categories'))
    // const controls = controlName.split('.')
    // console.warn(this.data.categories.controls[1].array.filter((item: any) => item.parentId.includes(control?.value)))
    // if (control?.value == null) {
    //   control?.enable()
    // } else {
    //   control?.disable()
    // }
  }


  onSave() {
    console.warn(this.productForm)
  }


}
