import { Component } from '@angular/core';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss']
})
export class PurchaseOrderListComponent {

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

}
