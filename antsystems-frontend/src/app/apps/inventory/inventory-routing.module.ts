import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FulfillmentComponent } from './fulfillment/fulfillment.component';
import { AssetTrackingComponent } from './asset-tracking/asset-tracking.component';
import { TransferComponent } from './transfer/transfer.component';
import { InventoryAdjustmentComponent } from './inventory-adjustment/inventory-adjustment.component';
import { RmaComponent } from './rma/rma.component';
import { ProductReportsComponent } from './product-reports/product-reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ItemComponent } from './products/item/item.component';

const routes: Routes = [
    {
        path: '',
        component: InventoryComponent,
        children: [
            {
                path: '',
                redirectTo: 'products',
                pathMatch: 'full'
            },
            {
                path: 'products',
                component: ProductsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'item',
                        pathMatch: 'full'
                    },
                    {
                        path: 'item',
                        component: ItemComponent
                    },
                    {
                        path: 'item/:item',
                        component: ItemComponent
                    }
                ]
            },
            {
                path: 'products-list',
                component: ProductsListComponent
            },
            {
                path: 'fullfilment',
                component: FulfillmentComponent
            },
            {
                path: 'asset-tracking',
                component: AssetTrackingComponent
            },
            {
                path: 'transfer',
                component: TransferComponent
            },
            {
                path: 'inventory-adjustment',
                component: InventoryAdjustmentComponent
            },
            {
                path: 'rma',
                component: RmaComponent
            },
            {
                path: 'reports',
                component: ProductReportsComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
