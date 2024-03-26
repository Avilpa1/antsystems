import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CarrierRepository } from '../../+state/carrier.repository';

@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  styleUrls: ['./add-carrier.component.scss']
})
export class AddCarrierComponent {
  props: any | null = null;
  form!: FormGroup;
  showStreet2: boolean = false;
  
  constructor(public modalRef: MdbModalRef<AddCarrierComponent>, private carrierRepo : CarrierRepository) {
    this.initForm();
    setTimeout(() => {
        this.form.patchValue(this.props)
    }, 250);
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
        address: new FormGroup({
          street: new FormControl(null, [Validators.required]),
          street2: new FormControl(null),
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          zip: new FormControl(null, [Validators.required]),
        }),
      }
    )
  }

  save() {
    console.warn(this.form.value);
    if (!this.props.id) {
      this.carrierRepo.add(this.form.value).subscribe();
    } else {
      const data = {
        id: this.props.id,
        ...this.form.value
      }
      this.carrierRepo.update(data).subscribe();
    }
    this.close(true);
  }

  close(value: any): void {
    this.modalRef.close(value);
  }

}
