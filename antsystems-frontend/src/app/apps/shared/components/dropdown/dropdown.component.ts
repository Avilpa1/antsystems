import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() text!: string;
  @Input() items!: string;
  @Input() actionBtnConfig!: actionBtn[];
  @Output() actionBtnEvent = new EventEmitter();
  @Output() selectedItemEvent = new EventEmitter();
  show: boolean = false;
  value: string = '';

  optionsData = [
    {name: 'EP90BP-4'},
    {name: 'MSK-2000-BLK'},
    {name: 'GLL-167ML-SH'},
  ]

  constructor() {
  }

  selectOption(value: string) {
    this.selectedItemEvent.emit(value);
    this.value = value;
    this.show = false;
  }

  hideOptions() {
    setTimeout(() => {
      this.show = false;
    }, 200); 
  }

  actionBtnClicked(name: string) {
    this.actionBtnEvent.emit(name);
    this.value = '';
    this.show = false;
  }

}
