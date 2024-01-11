import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
    selector: 'app-create-sku',
    templateUrl: './create-sku.component.html',
    styleUrls: ['./create-sku.component.css'],
})
export class CreateSkuComponent {
    @Input() skuData: string = "no data";
    
    // constructor(public modalRef: MdbModalRef<CreateSkuComponent>) {}
    
}
