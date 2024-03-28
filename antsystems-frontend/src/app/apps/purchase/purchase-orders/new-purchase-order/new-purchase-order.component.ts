import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { VendorRepository } from '../../+state/vendor.repository';
import { CarrierRepository } from '../../+state/carrier.repository';
import { ActivatedRoute } from '@angular/router';
import { PurchaseOrdersRepository } from '../../+state/purchase-order.repository';
import { PurchaseOrder } from '../../+models/purchase-order.models';

@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.scss']
})
export class NewPurchaseOrderComponent {
  form!: FormGroup;
  statusOptions = [{name: 'New'}, {name: 'Pending'}, {name: 'Cancelled'}];
  vendors = [];
  shipTo = [];
  purchaseOrder!: PurchaseOrder
  source: Array<any> = []

  columns: Array<GuiColumn> = [
    {
      header: 'Item',
      field: 'item'
    },
    {
      header: 'SKU',
      field: 'sku'
    },
    {
      header: 'Description',
      field: 'description'
    },
    {
      header: 'Order By',
      field: 'unitDetails',
      formatter: (data: any) => data.masterCase
    },
    {
      header: 'Qty',
      field: 'unitDetails',
      formatter: (data: any) => data.innerBox
    },
    {
      header: 'U. Price',
      field: 'unitDetails',
      formatter: (data: any) => data.pack
    },
    {
      header: 'U. Pack',
      field: 'unitDetails',
      formatter: (data: any) => data.pieces
    },
    {
      header: 'Cost By Case',
      field: 'job'
    },
    {
      header: 'Total',
      field: 'age'
    },
    // {
    //   header: 'Multi-Warehouse',
    //   field: 'name'
    // },
    // {
    //   header: 'Status',
    //   field: 'job'
    // }
  ];

  sorting: GuiSorting = {
    enabled: true
  };

  constructor(
    public vendorRepo: VendorRepository, 
    public carrierRepo: CarrierRepository,
    public poRepo: PurchaseOrdersRepository,
    private route: ActivatedRoute,
    ) {
    this.initForm();
    this.vendorRepo.fetchData().subscribe();
    this.carrierRepo.fetchData().subscribe();
    this.poRepo.fetchData().subscribe();

    this.vendorRepo.vendors$.subscribe((res: any) => {
      this.vendors = res
    })
    this.carrierRepo.carriers$.subscribe((res: any) => {
      this.shipTo = res
    })

    const idFromRoute = this.route.snapshot.params['id'];  
    if (idFromRoute) {
      this.poRepo.purchaseOrders$.subscribe(() => {
        this.purchaseOrder = this.poRepo.getById(idFromRoute)!;
        this.form.patchValue(this.purchaseOrder);
        // this.canEditItem = false;
        // this.productForm.disable();
      })
    }
  }

  initForm() {
    this.form = new FormGroup(
      {
        status: new FormControl(null),
        // Vendor
        vendor: new FormGroup({
          vendorId: new FormControl({value: null, disabled: true}),
          vendorName: new FormControl(null),
          netPayment: new FormControl({value: null, disabled: true}),
          accountNumber: new FormControl({value: null, disabled: true}),
        }),
        // Carrier
        carrier: new FormGroup({
          carrierId: new FormControl({value: null, disabled: true}),
          carrierName: new FormControl(null),
          serviceType: new FormControl({value: null, disabled: true}),
          freightTerm: new FormControl({value: null, disabled: true}),
        }),
        date: new FormControl(null),
        etaDate: new FormControl(null),
        refrence: new FormControl(null),
        note: new FormControl(null),
      }
    )
  }

  setVendor(event: any) {
    console.warn(event)
    this.form.controls['vendor'].get('netPayment')?.patchValue(event.netPayment);
    this.form.controls['vendor'].get('accountNumber')?.patchValue(event.accountNumber);
    this.form.controls['vendor'].get('vendorId')?.patchValue(event.vendorId);
  }

  setCarrier(event: any) {
    console.warn(event)
    this.form.controls['carrier'].get('serviceType')?.patchValue(event.serviceType);
    this.form.controls['carrier'].get('freightTerm')?.patchValue(event.accountNumber);
    this.form.controls['carrier'].get('carrierId')?.patchValue(event.carrierId);
  }

  save() {
    console.warn(this.form.getRawValue())
  }
}
