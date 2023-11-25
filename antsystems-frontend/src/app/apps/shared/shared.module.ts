import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByParentIdPipe } from './pipes/filterById.pipe';
import { EnableDisableDirective } from './directives/enableDisable.directive';



@NgModule({
  declarations: [
    StatusCardComponent,
    FilterByParentIdPipe,
    EnableDisableDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    StatusCardComponent,
    FilterByParentIdPipe,
    EnableDisableDirective
  ]
})
export class SharedModule { }
