import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StatusCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    StatusCardComponent
  ]
})
export class SharedModule { }
