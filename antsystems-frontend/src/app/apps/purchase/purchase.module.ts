import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase.component';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { VendorsComponent } from './vendors/vendors.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { NewPurchaseOrderComponent } from './purchase-orders/new-purchase-order/new-purchase-order.component';
import { PurchaseOrderListComponent } from './purchase-orders/purchase-order-list/purchase-order-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PurchaseComponent,
    VendorsComponent,
    PurchaseOrdersComponent,
    NewPurchaseOrderComponent,
    PurchaseOrderListComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    SharedModule
  ]
})
export class PurchaseModule { }
