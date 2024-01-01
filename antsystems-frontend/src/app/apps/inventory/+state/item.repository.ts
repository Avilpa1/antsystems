import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, setEntities, withEntities, getEntity, getEntityByPredicate } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  updateRequestCache,
  withRequestsCache
} from '@ngneat/elf-requests';
import { tap } from 'rxjs/operators';
import { InventoryService } from '../inventory.service';

const itemsStore = createStore(
  { name: 'items' },
  withEntities<any>(),
  withRequestsCache<'items'>()
);

@Injectable({ providedIn: 'root' })
export class ItemRepository {
  inventoryService = inject(InventoryService)

  skipWhileTodosCached = createRequestsCacheOperator(itemsStore);
  items$ = itemsStore.pipe(selectAllEntities());

  setItems(item: any) {
    itemsStore.update(updateRequestCache('items'), setEntities(item));
  }

  getItemById(id: number) {
    return itemsStore.query(getEntity(id));
  }

  getItemBySku(sku: string) {
    return itemsStore.query(getEntityByPredicate((item) => item.sku == sku)
    );
  }

  fetchData() {
    return this.inventoryService.getItems().pipe(
      tap((d: any) => console.warn(d)),
      tap(this.setItems), 
      this.skipWhileTodosCached('items'))
  }


}

