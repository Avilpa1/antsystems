import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase.component';
import { VendorsComponent } from './vendors/vendors.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { PurchaseOrderListComponent } from './purchase-orders/purchase-order-list/purchase-order-list.component';
import { NewPurchaseOrderComponent } from './purchase-orders/new-purchase-order/new-purchase-order.component';
import { CarriersComponent } from './carriers/carriers.component';


const routes: Routes = [
    {
        path: '',
        component: PurchaseComponent,
        children: [
            {
                path: '',
                redirectTo: 'purchase-orders',
                pathMatch: 'full'
            },
            {
                path: 'vendors',
                component: VendorsComponent,
                children: [
                    // {
                    //     path: '',
                    //     redirectTo: 'item',
                    //     pathMatch: 'full'
                    // },
                    // {
                    //     path: 'item',
                    //     component: ItemComponent
                    // },
                    // {
                    //     path: 'item/:item',
                    //     component: ItemComponent
                    // }
                ]
            },
            {
                path: 'carriers',
                component: CarriersComponent,
                children: [
                    // {
                    //     path: '',
                    //     redirectTo: 'item',
                    //     pathMatch: 'full'
                    // },
                    // {
                    //     path: 'item',
                    //     component: ItemComponent
                    // },
                    // {
                    //     path: 'item/:item',
                    //     component: ItemComponent
                    // }
                ]
            },
            {
                path: 'purchase-orders',
                component: PurchaseOrdersComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'orders',
                        pathMatch: 'full'
                    },
                    {
                        path: 'orders',
                        component: PurchaseOrderListComponent
                    },
                    {
                        path: 'orders/:id',
                        component: NewPurchaseOrderComponent
                    },
                    {
                        path: 'new-order',
                        component: NewPurchaseOrderComponent
                    }
                ]
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
