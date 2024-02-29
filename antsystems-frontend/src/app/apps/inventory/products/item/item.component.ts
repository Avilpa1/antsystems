import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categories, Item } from './item.models';
import { Observable, Subject, of } from 'rxjs'
import { InventoryRepository } from '../../+state/inventory.repository';
import { ModalService } from 'src/app/apps/shared/components/modal/modal.service';
import { CreateSkuComponent } from '../../modal/create-sku/create-sku.component';
import { ItemRepository } from '../../+state/item.repository';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from './item.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ItemComponent {
  productForm!: FormGroup;
  canEditItem: boolean = true;
  public categoriesData: Observable<Categories> = new Observable()
  itemData: any = null;
  modalRef: MdbModalRef<CreateSkuComponent> | null = null;

  actionBtnConfig = [{
    name: "New SKU"
  }]

  modalConfig = {
    animation: true,
    backdrop: true,
    containerClass: 'right',
    data: {
      title: 'Custom title'
    },
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-dialog-centered',
    // nonInvasive: true,
  }

  constructor(
    public inventoryRepo: InventoryRepository,
    public itemRepo: ItemRepository,  
    public modal: ModalService,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private modalService: MdbModalService) {
    this.initForm()
    if (this.itemData) {
      this.canEditItem = false
    }
    const itemFromRoute = this.route.snapshot.params['item'];  
    if (itemFromRoute) {
      this.itemRepo.items$.subscribe(() => {
        const item = this.itemRepo.getBySku(itemFromRoute)!;
        this.productForm.patchValue(item);
        this.canEditItem = false;
        this.productForm.disable();
      })
    }


  }

  initForm() {
    this.productForm = new FormGroup(
      {
        active: new FormControl(true),
        item: new FormControl(null, [Validators.required]),
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
          subCategory: new FormControl({value: null, disabled: false}, [Validators.required]),
          productType: new FormControl({value: null, disabled: false}, [Validators.required]),
          subProductType: new FormControl({value: null, disabled: false}, [Validators.required]),
        }),
        brandName: new FormGroup({
          brandName: new FormControl({value: null, disabled: false}, [Validators.required]),
          subBrand: new FormControl({value: null, disabled: false}, [Validators.required]),
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
          binLocation: new FormControl({value: null, disabled: false}, [Validators.required]),
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
    const control = this.productForm.get(controlName);
    control?.reset();
    // console.warn(this.productForm.get('categories'))
  }

  onSave() {
    console.warn(this.productForm, this.productForm.value);
    this.itemRepo.add(this.productForm.value);
  }
  
  patch() {
    // const item = this.itemRepo.getById(1)!;
    // this.productForm.patchValue(item);
    // this.itemService.getItems().subscribe()
    // this.itemService.addItem(this.productForm.value).subscribe()
    // this.itemRepo.add(this.productForm.value).subscribe();
    console.warn(this.productForm, this.productForm.value);
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
    // this.modal.open(CreateSkuComponent, {name: 'Note', width: '35rem'});
    this.modalRef = this.modalService.open(CreateSkuComponent, this.modalConfig)
  }

  selectItemFromDropdown(event: any) {
    const item = this.itemRepo.getByItem(event.name)!;
    this.productForm.patchValue(item);
    this.canEditItem = false;
    this.productForm.disable();
  }

  valueChangedAlert(event: Event) {
    this.modal.open(CreateSkuComponent, {name: 'Note', width: '35rem'});
  }
}
