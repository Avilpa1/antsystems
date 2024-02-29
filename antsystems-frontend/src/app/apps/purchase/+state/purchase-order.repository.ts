import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { getEntity, selectAllEntities, setEntities, upsertEntities, withEntities } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  updateRequestCache,
  withRequestsCache
} from '@ngneat/elf-requests';
import { map, tap } from 'rxjs/operators';
import { PurchaseOrder } from '../+models/purchase-order.models';
import { PurchaseOrderService } from '../+services/purchase-order.service';

const purchaseOrderStore = createStore(
  { name: 'purchaseOrder' },
  withEntities<PurchaseOrder>(),
  withRequestsCache<'purchaseOrder'>()
);

@Injectable({ providedIn: 'root' })
export class PurchaseOrdersRepository {
  purchaseOrderService = inject(PurchaseOrderService)

  skipWhileTodosCached = createRequestsCacheOperator(purchaseOrderStore);
  purchaseOrders$ = purchaseOrderStore.pipe(selectAllEntities());
  // itemsItem$ = purchaseOrderStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.item}})));
  // itemsSku$ = purchaseOrderStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.sku}})));

  setItems(item: any) {
    purchaseOrderStore.update(updateRequestCache('purchaseOrder'), setEntities(item));
  }

  add(item: PurchaseOrder) {
    return this.purchaseOrderService.add(item).pipe(
      tap(x => purchaseOrderStore.update(upsertEntities(item)))
    )
  }

  getById(id: number) {
    return purchaseOrderStore.query(getEntity(id));
  }

  fetchData() {
    return this.purchaseOrderService.get().pipe(
      map((x: any) => x.map((val: any) => ({ ...val, id: val._id }))),
      tap(this.setItems),
      this.skipWhileTodosCached('purchaseOrder'))
  }
}