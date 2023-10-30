import { Pipe, PipeTransform } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { KeyValueDiffers } from '@angular/core';
const unordered = (a, b) => 0;

@Pipe({
  name: 'defaultOrderKeyvalue'
})

// This pipe uses the angular keyvalue pipe. but defaults to unordered.
export class DefaultOrderKeyvaluePipe implements PipeTransform {

  constructor(public differs: KeyValueDiffers){}

  public transform (value, compareFn = unordered): any {
    const pipe =  new KeyValuePipe(this.differs);
    return pipe.transform(value, compareFn);
  }
}