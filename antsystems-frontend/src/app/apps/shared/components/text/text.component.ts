import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class AntTextComponent {
  @Input() label!: string;
  @Input() value!: any;

}
