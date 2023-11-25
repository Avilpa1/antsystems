import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByParentId',
    pure: false
})

export class FilterByParentIdPipe implements PipeTransform {
    transform(array : any, id: number) {
        if (array) {
            const res = array.filter((item: any) => item.parentId.includes(id))
            return res;
        }
    }
}