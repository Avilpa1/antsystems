import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

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
  @Input() actionBtnConfig!: actionBtn[];
  @Output() actionBtnEvent = new EventEmitter();
  @Output() selectedItemEvent = new EventEmitter();
  show: BehaviorSubject<boolean> = new BehaviorSubject(false);

  optionsData = [
    {name: 'EP90BP-4'},
    {name: 'EP90BP-5'},
    {name: 'EP90BP-6'},
    {name: 'EP90BP-7'},
    {name: 'MSK-2000-BLK'},
    {name: 'MSK-2000-WHT'},
    {name: 'MSK-2000-RED'},
    {name: 'GLL-167ML-SH'},
    {name: 'GLL-167ML-LG'},
    {name: 'GLL-167ML-XL'},
  ]

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
