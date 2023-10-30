import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCardComponent } from './components/table-card/table-card.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { DefaultOrderKeyvaluePipe } from './pipes/defaultOrderKeyvalue.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ModalFactoryComponent } from './components/modal/modal-factory/modal-factory.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';



@NgModule({
  declarations: [
    TableCardComponent,
    StatusCardComponent,
    DefaultOrderKeyvaluePipe,
    ModalComponent,
    ModalFactoryComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableCardComponent,
    ModalComponent,
    DefaultOrderKeyvaluePipe,
    ModalFactoryComponent,
    DoughnutChartComponent
  ]
})
export class SharedModule { }
