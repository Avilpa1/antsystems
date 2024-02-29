import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { getEntity, selectAllEntities, setEntities, upsertEntities, withEntities } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  updateRequestCache,
  withRequestsCache
} from '@ngneat/elf-requests';
import { map, tap } from 'rxjs/operators';
import { Carrier } from '../+models/carrier.models';
import { CarrierService } from '../+services/carrier.service';

const carrierStore = createStore(
  { name: 'carrier' },
  withEntities<Carrier>(),
  withRequestsCache<'carrier'>()
);

@Injectable({ providedIn: 'root' })
export class CarrierRepository {
  carrierService = inject(CarrierService)

  skipWhileTodosCached = createRequestsCacheOperator(carrierStore);
  carriers$ = carrierStore.pipe(selectAllEntities());
  // itemsItem$ = purchaseOrderStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.item}})));
  // itemsSku$ = purchaseOrderStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.sku}})));

  setItems(item: any) {
    carrierStore.update(updateRequestCache('carrier'), setEntities(item));
  }

  add(item: Carrier) {
    return this.carrierService.add(item).pipe(
      tap(x => carrierStore.update(upsertEntities(item)))
    )
  }

  getById(id: number) {
    return carrierStore.query(getEntity(id));
  }

  fetchData() {
    return this.carrierService.get().pipe(
      map((x: any) => x.map((val: any) => ({ ...val, id: val._id }))),
      tap(this.setItems),
      this.skipWhileTodosCached('carrier'))
  }
}