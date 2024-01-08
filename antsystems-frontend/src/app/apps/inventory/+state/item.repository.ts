import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, setEntities, withEntities, getEntity, getEntityByPredicate, upsertEntities } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  updateRequestCache,
  withRequestsCache
} from '@ngneat/elf-requests';
import { map, tap } from 'rxjs/operators';
import { InventoryService } from '../inventory.service';
import { Item } from '../products/item/item.models';
import { ItemService } from '../products/item/item.service';

const itemsStore = createStore(
  { name: 'items' },
  withEntities<Item>(),
  withRequestsCache<'items'>()
);

@Injectable({ providedIn: 'root' })
export class ItemRepository {
  itemService = inject(ItemService)

  skipWhileTodosCached = createRequestsCacheOperator(itemsStore);
  items$ = itemsStore.pipe(selectAllEntities());
  itemsItem$ = itemsStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.item}})));
  itemsSku$ = itemsStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.sku}})));

  setItems(item: any) {
    itemsStore.update(updateRequestCache('items'), setEntities(item));
  }

  add(item: Item) {
    return this.itemService.addItem(item).pipe(
      tap(x => itemsStore.update(upsertEntities(item)))
    )
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
    return this.itemService.getItems().pipe(
      tap((d: any) => console.warn(d)),
      map((x: any) => x.map((val: any) => ({...val, id: val._id}) )),
      tap(this.setItems), 
      this.skipWhileTodosCached('items'))
  }

  
}

