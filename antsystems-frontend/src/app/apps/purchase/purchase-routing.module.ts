import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase.component';


const routes: Routes = [
    {
        path: '',
        component: PurchaseComponent,
        // children: [
        //     {
        //         path: '',
        //         redirectTo: 'products',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path: 'products',
        //         component: ProductsComponent,
        //         children: [
        //             {
        //                 path: '',
        //                 redirectTo: 'item',
        //                 pathMatch: 'full'
        //             },
        //             {
        //                 path: 'item',
        //                 component: ItemComponent
        //             },
        //             {
        //                 path: 'item/:item',
        //                 component: ItemComponent
        //             }
        //         ]
        //     },
        // ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
