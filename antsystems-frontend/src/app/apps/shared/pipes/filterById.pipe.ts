import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByParentId',
    pure: false
})

export class FilterByParentIdPipe implements PipeTransform {
    transform(array : any, id: number | null) {
        if (id) {
            const res = array.filter((item: any) => item.parentId.includes(id))
            return res;
        }
    }
}