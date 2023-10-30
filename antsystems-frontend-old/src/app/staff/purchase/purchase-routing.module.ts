import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoDetailsComponent } from './po-details/po-details.component';

const routes: Routes = [
  {
    path: 'po-details',
    component: PoDetailsComponent
  },
  {
    path: 'po-details/:id',
    component: PoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
