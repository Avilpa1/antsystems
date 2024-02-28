import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  styleUrls: ['./add-carrier.component.scss']
})
export class AddCarrierComponent {
  form!: FormGroup;

  constructor(public modalRef: MdbModalRef<AddCarrierComponent>) {
    this.initForm();
  }
  
  initForm() {
    this.form = new FormGroup(
      {
        carrierId: new FormControl(null, [Validators.required]),
        serviceType: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        companyName: new FormControl(null, [Validators.required]),
        contactName: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
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
