import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';

interface actionBtn {
  name: string,
  diabled?: boolean
}

@Component({
  selector: 'ant-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() control!: any;  
  @Input() text!: string;
  @Input() items!: string;
  @Input() options!: any;
  @Input() placeHolder!: any;
  @Input() actionBtnConfig!: actionBtn[];
  @Output() actionBtnEvent = new EventEmitter();
  @Output() selectedItemEvent = new EventEmitter();
  show: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  selectOption(value: string) {
    this.control?.patchValue(value)
    this.show.next(false);
    this.selectedItemEvent.emit(value);
  }

  hideOptions() {
    setTimeout(() => {
      this.show.next(false);
    }, 150); 
  }

  actionBtnClicked(name: string) {
    this.control?.patchValue(null)
    this.show.next(false);
    this.actionBtnEvent.emit(name);
  }

  onInputChange(event: any) {
    this.control?.patchValue(event.target.value)
  }

}
