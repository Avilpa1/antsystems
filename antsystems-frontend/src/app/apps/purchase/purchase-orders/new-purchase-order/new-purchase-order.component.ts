import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { VendorRepository } from '../../+state/vendor.repository';

@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.scss']
})
export class NewPurchaseOrderComponent {
  form!: FormGroup;
  statusOptions = [{name: 'New'}, {name: 'Pending'}, {name: 'Cancelled'}]
  vendors = [{name: 'Vendor 1', id: 1}, {name: 'Vendor 2', id: 2}, {name: 'Vendor 3', id: 3}]
  shipTo = [{name: 'Main Warehouse', id: 1}, {name: '2nd Warehouse', id: 2}, {name: 'Store Warehouse', id: 3}]

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

  constructor(public vendorRepo: VendorRepository) {
    this.initForm();
    this.vendorRepo.fetchData().subscribe();
    this.vendorRepo.vendors$.subscribe((res: any) => {
      this.vendors = res
    })
  }

  initForm() {
    this.form = new FormGroup(
      {
        status: new FormControl(null),
        vendor: new FormControl(null),
        netPayment: new FormControl(null),
        accountNumber: new FormControl(null),
        shipTo: new FormControl(null),
        shipVia: new FormControl(null),
        freightTerm: new FormControl(null),
        date: new FormControl(null),
        etaDate: new FormControl(null),
        refrence: new FormControl(null),
        notes: new FormControl(null),

      }
    )
  }

  setVendor(event: any) {
    console.warn(event)
    this.form.controls['netPayment'].patchValue(event.netPayment);
    this.form.controls['accountNumber'].patchValue(event.accountNumber);

  }
}
