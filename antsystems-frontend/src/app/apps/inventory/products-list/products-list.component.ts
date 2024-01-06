import { Component } from '@angular/core';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { ProductListService } from './product-list.service';
import { Router } from '@angular/router';
import { ItemRepository } from '../+state/item.repository';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

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
      header: 'Master Case',
      field: 'unitDetails',
      formatter: (data: any) => data.masterCase
    },
    {
      header: 'Inner',
      field: 'unitDetails',
      formatter: (data: any) => data.innerBox
    },
    {
      header: 'Pack',
      field: 'unitDetails',
      formatter: (data: any) => data.pack
    },
    {
      header: 'Pcs',
      field: 'unitDetails',
      formatter: (data: any) => data.pieces
    },
    // {
    //   header: 'On-Hand',
    //   field: 'job'
    // },
    // {
    //   header: 'In storage',
    //   field: 'age'
    // },
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
    public productListService: ProductListService, 
    private router: Router,
    public itemRepo: ItemRepository) {
    // this.productListService.getProducts().subscribe((res) => {
    //   console.warn(res)
    // })
    this.itemRepo.items$.subscribe((res) => {
      this.source = res
    })

    // this.source =   [
    //   {
    //     name: 'Brad',
    //     job: 'programmer',
    //     age: '40',
    //     address: {
    //       street: 'test street'
    //     }
    //   },
    //   {
    //     name: 'Ted',
    //     job: 'programmer',
    //     age: '41',
    //     address: {
    //       street: 'test street'
    //     }
    //   }
    // ];
  }

  navTo(item: any) {
    console.warn(item)
    this.router.navigateByUrl(`/apps/inventory/products/item/${item[0].item}`)
  }
}
