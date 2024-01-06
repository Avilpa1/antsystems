import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, setEntities, withEntities, getEntity, getEntityByPredicate, upsertEntities } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  updateRequestCache,
  withRequestsCache
} from '@ngneat/elf-requests';
import { tap } from 'rxjs/operators';
import { InventoryService } from '../inventory.service';
import { Item } from '../products/item/item.models';

const itemsStore = createStore(
  { name: 'items' },
  withEntities<Item>(),
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

  add(item: Item) {
    itemsStore.update(upsertEntities(item))
  }

  getById(id: number) {
    return itemsStore.query(getEntity(id));
  }

  getBySku(sku: string) {
    return itemsStore.query(getEntityByPredicate((res) => res.sku == sku)
    );
  }

  getByItem(item: string) {
    return itemsStore.query(getEntityByPredicate((res) => res.item == item)
    );
  }

  fetchData() {
    return this.inventoryService.getItems().pipe(
      tap((d: any) => console.warn(d)),
      tap(this.setItems), 
      this.skipWhileTodosCached('items'))
  }


}

