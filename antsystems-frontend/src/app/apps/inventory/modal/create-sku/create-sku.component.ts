import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-create-sku',
    template: `<p>create-sku works!</p>`,
    styleUrls: ['./create-sku.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateSkuComponent { }
