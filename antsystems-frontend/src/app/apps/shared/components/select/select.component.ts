import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() selectChangedEvent = new EventEmitter();
  
  constructor() {}

  selectChanged(event: Event) {
    this.selectChangedEvent.next(event);
    this.resetChildren();
  }

  resetChildren() {
    const control = this.groupName.get(`${this.subGroupName}.${this.next}`)
    control?.reset()
  }

  compareFn(c1: any, c2: any): boolean { 
    return c1 && c2 &&( c1.id === c2.id || c2 === c1.id);
 }

}
