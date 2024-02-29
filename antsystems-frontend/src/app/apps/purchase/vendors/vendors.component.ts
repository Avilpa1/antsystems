import { Component } from '@angular/core';
import { GuiColumn, GuiSorting } from '@generic-ui/ngx-grid';
import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { VendorRepository } from '../+state/vendor.repository';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent {
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
      header: 'Vendor ID',
      field: 'vendorId'
    },
    {
      header: 'Company Name',
      field: 'companyName'
    },
    {
      header: 'Address',
      field: 'address'
    },
    {
      header: 'City',
      field: 'address',
      // formatter: (data: any) => data.masterCase
    },
    {
      header: 'State',
      field: 'address',
      // formatter: (data: any) => data.innerBox
    },
    {
      header: 'Zip Code',
      field: 'address',
      // formatter: (data: any) => data.pack
    },
    {
      header: 'Contact',
      field: 'contactName',
      // formatter: (data: any) => data.pieces
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
      header: 'Action',
      // field: 'name'
    },
  ];

  sorting: GuiSorting = {
    enabled: true
  };

  constructor(private modalService: MdbModalService, public vendorRepo: VendorRepository) {
    this.vendorRepo.fetchData().subscribe();
    this.vendorRepo.vendors$.subscribe((res) => {
      console.warn(res)
      this.source = res;
    })
  }

  addVendor() {
    this.modalRef = this.modalService.open(AddVendorComponent, this.modalConfig);
    this.modalRef.onClose.subscribe((value: any) => {

    }); 
  }
}
