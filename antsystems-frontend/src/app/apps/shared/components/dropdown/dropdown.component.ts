import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class StatusCardComponent {
  @Input() text!: string;
  @Input() items!: string;

  constructor() {

  }

}
