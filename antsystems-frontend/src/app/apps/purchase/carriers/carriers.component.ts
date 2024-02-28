import { Component } from '@angular/core';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AddCarrierComponent } from './add-carrier/add-carrier.component';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss']
})
export class CarriersComponent {

  modalRef: MdbModalRef<any> | null = null;
  modalConfig = {
    animation: true,
    backdrop: true,
    containerClass: 'right',
    data: {
      title: 'Warning!',
      prev: '',
      new: ''
    },
    modalClass: 'modal-dialog-centered modal-lg',
  }

  source: Array<any> = []

  columns: Array<GuiColumn> = [
    {
      header: 'Item',
      field: 'item'
    },
    {
      header: 'SKU',
      field: 'sku'
    },
    {
      header: 'Description',
      field: 'description'
    },
    {
      header: 'Order By',
      field: 'unitDetails',
      formatter: (data: any) => data.masterCase
    },
    {
      header: 'Qty',
      field: 'unitDetails',
      formatter: (data: any) => data.innerBox
    },
    {
      header: 'U. Price',
      field: 'unitDetails',
      formatter: (data: any) => data.pack
    },
    {
      header: 'U. Pack',
      field: 'unitDetails',
      formatter: (data: any) => data.pieces
    },
    {
      header: 'Cost By Case',
      field: 'job'
    },
    {
      header: 'Total',
      field: 'age'
    },
    // {
    //   header: 'Multi-Warehouse',
    //   field: 'name'
    // },
    // {
    //   header: 'Status',
    //   field: 'job'
    // }
  ];

  sorting: GuiSorting = {
    enabled: true
  };

  constructor(private modalService: MdbModalService) {

  }

  addCarrier() {
    this.modalRef = this.modalService.open(AddCarrierComponent, this.modalConfig);
    this.modalRef.onClose.subscribe((value: any) => {

    }); 
  }
}
