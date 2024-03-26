import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { VendorService } from '../../+services/vendor.service';
import { VendorRepository } from '../../+state/vendor.repository';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent {
  props: any | null = null;
  form!: FormGroup;
  showStreet2: boolean = false;

  constructor(public modalRef: MdbModalRef<AddVendorComponent>, private vendorRepo: VendorRepository) {
    this.initForm();
    setTimeout(() => {
      this.form.patchValue(this.props)
  }, 250);
  }
  
  initForm() {
    this.form = new FormGroup(
      {
        vendorId: new FormControl(null, [Validators.required]),
        accountNumber: new FormControl(null, [Validators.required]),
        netPayment: new FormControl(null, [Validators.required]),
        companyName: new FormControl(null, [Validators.required]),
        contactName: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
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
      this.vendorRepo.add(this.form.value).subscribe();
    } else {
      const data = {
        id: this.props.id,
        ...this.form.value
      }
      this.vendorRepo.update(data).subscribe();
    }
    this.close(true);
  }

  close(value: any): void {
    this.modalRef.close(value);
  }

}
