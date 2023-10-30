import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoDetailsComponent } from './po-details/po-details.component';
import { PurchaseRoutingModule } from './purchase-routing.module';



@NgModule({
  declarations: [
    PoDetailsComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
