import { Component } from '@angular/core';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  source: Array<any> = [
    {
      name: 'Brad',
      job: 'programmer',
      age: '40',
      address: {
        street: 'test street'
      }
    }
  ];

  columns: Array<GuiColumn> = [
    {
      header: 'Item',
      field: 'name'
    },
    {
      header: 'SKU',
      field: 'job'
    },
    {
      header: 'Description',
      field: 'age'
    },
    {
      header: 'Master Case',
      field: 'address',
      formatter: (data: any) => data.street
    },
    {
      header: 'Inner',
      field: 'job'
    },
    {
      header: 'Pack',
      field: 'age'
    },
    {
      header: 'Pcs',
      field: 'name'
    },
    {
      header: 'On-Hand',
      field: 'job'
    },
    {
      header: 'In storage',
      field: 'age'
    },
    {
      header: 'Multi-Warehouse',
      field: 'name'
    },
    {
      header: 'Status',
      field: 'job'
    }
  ];

  sorting: GuiSorting = {
    enabled: true
};

  constructor(public productListService: ProductListService) {
    this.productListService.getProducts().subscribe((res) => {
      console.warn(res)
    })
  }
}
