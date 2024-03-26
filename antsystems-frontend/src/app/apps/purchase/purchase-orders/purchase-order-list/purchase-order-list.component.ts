import { Component } from '@angular/core';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { PurchaseOrdersRepository } from '../../+state/purchase-order.repository';
import { PurchaseOrder } from '../../+models/purchase-order.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.scss']
})
export class PurchaseOrderListComponent {

  source: Array<any> = []

  columns: Array<GuiColumn> = []

  sorting: GuiSorting = {
    enabled: true
  };

  constructor(public poRepo: PurchaseOrdersRepository, private router: Router) {
    this.poRepo.fetchData().subscribe();
    this.poRepo.purchaseOrders$.subscribe((res) => {
      console.warn(res)
      this.source = res;
    })
  }

  rowSelected(po: PurchaseOrder[]) {
    console.warn(po)
    this.router.navigateByUrl(`/apps/purchase/purchase-orders/orders/${po[0].id}`)
  }
}
