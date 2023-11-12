import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FulfillmentComponent } from './fulfillment/fulfillment.component';
import { AssetTrackingComponent } from './asset-tracking/asset-tracking.component';
import { TransferComponent } from './transfer/transfer.component';
import { InventoryAdjustmentComponent } from './inventory-adjustment/inventory-adjustment.component';
import { RmaComponent } from './rma/rma.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './products/product/product.component';



@NgModule({
  declarations: [
    InventoryComponent,
    ProductsComponent,
    ProductsListComponent,
    FulfillmentComponent,
    AssetTrackingComponent,
    TransferComponent,
    InventoryAdjustmentComponent,
    RmaComponent,
    ProductReportsComponent,
    SettingsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
