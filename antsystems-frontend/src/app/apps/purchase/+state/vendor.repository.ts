import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { deleteEntities, getEntity, selectAllEntities, setEntities, updateEntities, upsertEntities, withEntities } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  updateRequestCache,
  withRequestsCache
} from '@ngneat/elf-requests';
import { map, tap } from 'rxjs/operators';
import { Vendor } from '../+models/vendor.models';
import { VendorService } from '../+services/vendor.service';

const vendorStore = createStore(
  { name: 'vendor' },
  withEntities<Vendor>(),
  withRequestsCache<'vendor'>()
);

@Injectable({ providedIn: 'root' })
export class VendorRepository {
  vendorService = inject(VendorService)

  skipWhileTodosCached = createRequestsCacheOperator(vendorStore);
  vendors$ = vendorStore.pipe(selectAllEntities());
  // itemsItem$ = purchaseOrderStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.item}})));
  // itemsSku$ = purchaseOrderStore.pipe(selectAllEntities(), map(x => x.map(z => {return {name: z.sku}})));

  setItems(item: any) {
    vendorStore.update(updateRequestCache('vendor'), setEntities(item));
  }

  add(item: Vendor) {
    return this.vendorService.add(item).pipe(
      tap(x => vendorStore.update(upsertEntities(item)))
    )
  }

  update(item: Vendor) {
    return this.vendorService.update(item).pipe(
      tap(x => vendorStore.update(updateEntities(item.id, item)))
    )
  }

  getById(id: number) {
    return vendorStore.query(getEntity(id));
  }

  fetchData() {
    console.warn('fetch data')
    return this.vendorService.get().pipe(
      map((x: any) => x.map((val: any) => ({...val, id: val._id}) )),
      tap(this.setItems), 
      this.skipWhileTodosCached('vendor'))
  }

  delete(id: number) {
    return this.vendorService.delete(id).pipe(
      tap(x => vendorStore.update(deleteEntities(id)))
    )
  }
}