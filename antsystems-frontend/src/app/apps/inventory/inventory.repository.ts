import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { setEntities, withEntities } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  selectRequestCache,
  updateRequestCache,
  withRequestsCache,
} from '@ngneat/elf-requests';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap, tap } from 'rxjs/operators';
import { Product } from './products/product/products.models';
import { InventoryService } from './inventory.service';

const productStore = createStore(
  { name: 'product' },
  withEntities<Product>(),
  withRequestsCache<'product'>()
);

@Injectable({ providedIn: 'root' })
export class InventoryRepository {
    inventoryService = inject(InventoryService)

    skipWhileTodosCached = createRequestsCacheOperator(productStore);

    setTodos(product: Product[]) {
        productStore.update(updateRequestCache('product'), setEntities(product));
    }

    fetchTodos() {
        return this.inventoryService.getProducts().pipe(
            map((x: any) => x.map((val: any) => ({...val, id: val._id}) )),
            tap(this.setTodos), this.skipWhileTodosCached('product'))
    }

}

