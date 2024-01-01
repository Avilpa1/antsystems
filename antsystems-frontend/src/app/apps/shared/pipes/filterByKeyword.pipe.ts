import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(items: any[], keyword: string  | null, properties: string[]): any[] {
    if (!items) { return []; }
    if (!keyword) { return items; }
    return items.filter(item => {
      let itemFound: boolean = false;
      for (const [i, v] of properties.entries()) {
        if (item[properties[i]].toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
          itemFound = true;
          break;
        }
      }
      return itemFound;
    });

  }
}