import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../modal/modal.service';
import { StatusCardComponent } from '../status-card/status-card.component';
@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {
  @Input() tableData: any = '';

  constructor(public router: Router, public modal: ModalService) { }

  ngOnInit(): void {
  }

  toPoDetails(poNumber): any {
    console.warn(poNumber);
    this.router.navigate(['staff/purchase/po-details', poNumber]);
  }

  openNotes(poNumber): any {
    console.warn(poNumber);
    // this.modal.open(StatusCardComponent, {name: `PO #${poNumber}`, width: '35rem'});
    this.modal.open(StatusCardComponent, {name: 'Note', width: '35rem'});
  }


}
