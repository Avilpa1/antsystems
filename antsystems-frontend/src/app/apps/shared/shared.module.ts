import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByParentIdPipe } from './pipes/filterById.pipe';
import { EnableDisableDirective } from './directives/enableDisable.directive';
import { SelectComponent } from './components/select/select.component';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { ModalComponent } from './components/modal/modal.component';
import { ModalFactoryComponent } from './components/modal/modal-factory/modal-factory.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    StatusCardComponent,
    FilterByParentIdPipe,
    EnableDisableDirective,
    SelectComponent,
    ModalComponent,
    ModalFactoryComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GuiGridModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    StatusCardComponent,
    FilterByParentIdPipe,
    EnableDisableDirective,
    SelectComponent,
    GuiGridModule,
    ModalComponent,
    ModalFactoryComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
