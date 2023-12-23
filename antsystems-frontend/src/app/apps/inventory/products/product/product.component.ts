import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categories, Product } from './products.models';
import { Observable, Subject, of } from 'rxjs'
import { InventoryRepository } from '../../inventory.repository';
import { ModalService } from 'src/app/apps/shared/components/modal/modal.service';
import { CreateSkuComponent } from '../../modal/create-sku/create-sku.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductComponent {
  productForm!: FormGroup;
  canEditItem: boolean = true;
  public categoriesData: Observable<Categories> = new Observable()
  itemData: any = null;

  actionBtnConfig = [{
    name: "New SKU"
  }]

  constructor(public inventoryRepo: InventoryRepository, public modal: ModalService) {
    this.initForm()
    // this.categoriesData.subscribe(res => {
    //   console.log(res)
    // })
    // this.categoriesData = of(this.data)
    if (this.itemData) {
      this.canEditItem = false
    }
  }

  initForm() {
    this.productForm = new FormGroup(
      {
        active: new FormControl(true),
        sku: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
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
          brandName: new FormControl({value: null, disabled: true}, [Validators.required]),
          subBrand: new FormControl({value: null, disabled: true}, [Validators.required]),
        }),
        measuringDetails: new FormGroup({
          lengthWidthHeight: new FormControl('', [Validators.required]),
          volume: new FormControl('', [Validators.required]),
          measuringType: new FormControl(null, [Validators.required]),
          weight: new FormControl('', [Validators.required]),
          weightType: new FormControl(null, [Validators.required]),
          totalPoundPallet: new FormControl('', [Validators.required]),
        }),
        barcode: new FormGroup({
          case: new FormControl('', [Validators.required]),
          inner: new FormControl('', [Validators.required]),
          pack: new FormControl('', [Validators.required]),
          piece: new FormControl('', [Validators.required]),
        }),
        locations: new FormGroup({
          warehouseLocation: new FormControl(null, [Validators.required]),
          binLocation: new FormControl({value: null, disabled: true}, [Validators.required]),
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
    // this.productForm.disable();
    // console.warn(this.productForm)
  }

  resetChildren(controlName: string) {
    const control = this.productForm.get(controlName)
    control?.reset()
    // console.warn(this.productForm.get('categories'))
  }


  onSave() {
    console.warn(this.productForm)
  }

  toggleLock() {
    if (this.canEditItem) {
      this.canEditItem = false;
      this.productForm.disable()
    } else {
      this.canEditItem = true;
      this.productForm.enable();
    }
  }

  openModalCreateNewSku() {
    console.warn('fired')
    this.modal.open(CreateSkuComponent, {name: 'Note', width: '35rem'});
  }

}
