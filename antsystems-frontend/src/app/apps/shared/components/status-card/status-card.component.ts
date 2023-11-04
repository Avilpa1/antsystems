import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() products!: number;
  @Input() categories!: number;
  @Input() color!: string;

  constructor() {

  }

}
