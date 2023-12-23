import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ant-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() data!: any;
  @Input() groupName!: FormGroup;
  @Input() controlName: any;
  @Input() prev: string = '';
  @Input() next: string = '';
  @Input() subGroupName?: string
  @Input() current!: string
  @Input() filter: boolean = false;
  @Input() placeholder = 'Please Select'
  @Input() field: string = 'name';
  @Input() label: string | null = null;

  constructor() {}

  resetChildren() {
    const control = this.groupName.get(`${this.subGroupName}.${this.next}`)
    control?.reset()
  }

  actionBtnClicked() {
    console.log('test')
  }

}
