import { Component } from '@angular/core';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AddCarrierComponent } from './add-carrier/add-carrier.component';
import { CarrierRepository } from '../+state/carrier.repository';

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
      header: 'Carrier ID',
      field: 'carrierId'
    },
    {
      header: 'Company Name',
      field: 'companyName'
    },
    {
      header: 'Contact Name',
      field: 'contactName'
    },
    {
      header: 'Phone',
      field: 'phone'
    },
    {
      header: 'Email',
      field: 'email'
    },
    {
      header: 'Service Type',
      field: 'serviceType'
    },
    {
      header: 'Actiom',
    }
  ];

  sorting: GuiSorting = {
    enabled: true
  };

  constructor(private modalService: MdbModalService, public carrierRepo: CarrierRepository) {
    this.carrierRepo.fetchData().subscribe();
    this.carrierRepo.carriers$.subscribe((res) => {
      console.warn(res)
      this.source = res;
    })
  }

  addCarrier() {
    this.modalRef = this.modalService.open(AddCarrierComponent, this.modalConfig);
    this.modalRef.onClose.subscribe((value: any) => {

    }); 
  }
}
