import { FormGroup, FormControl } from '@angular/forms';

export interface ProductForm {
    unitDetails: FormGroup<UnitDetails>

}

export interface UnitDetails {
    masterCase: FormControl<number>;
}