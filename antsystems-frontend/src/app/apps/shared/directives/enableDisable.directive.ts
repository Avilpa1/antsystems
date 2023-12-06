import { NgControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[enableDisable]'
})
export class EnableDisableDirective {
  @Input() set enableDisable(condition: boolean | null) {
    const action = condition ? 'disable' : 'enable';
    if(this.ngControl?.control){
       this.ngControl.control[action]();
    }
  }
  constructor(private ngControl: NgControl) {
  }
} 