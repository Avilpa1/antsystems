import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent {
  form!: FormGroup;

  constructor(public modalRef: MdbModalRef<AddVendorComponent>) {
    this.initForm();
  }
  
  initForm() {
    this.form = new FormGroup(
      {
        vendorId: new FormControl(null, [Validators.required]),
        accountNumber: new FormControl(null, [Validators.required]),
        netPayment: new FormControl(null, [Validators.required]),
        address: new FormControl(null, [Validators.required]),
        companyName: new FormControl(null, [Validators.required]),
        contactName: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
      }
    )
  }

  save() {
    console.warn(this.form.value)
  }

  close(value: any): void {
    this.modalRef.close(value)
  }

}