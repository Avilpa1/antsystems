import { Injectable, inject } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { getAllEntities, selectAllEntities, setEntities, withEntities } from '@ngneat/elf-entities';
import {
  createRequestsCacheOperator,
  selectRequestCache,
  updateRequestCache,
  withRequestsCache,
} from '@ngneat/elf-requests';
import { fromFetch } from 'rxjs/fetch';
import { map, switchMap, tap } from 'rxjs/operators';
// import { Product } from '../products/item/item.models';
import { InventoryService } from '../inventory.service';

const categoryStore = createStore(
  { name: 'category' },
  withEntities<any>(),
  withRequestsCache<'category'>()
);

const subCategoryStore = createStore(
  { name: 'subCategory' },
  withEntities<any>(),
  withRequestsCache<'subCategory'>()
);

const productTypeStore = createStore(
  { name: 'productType' },
  withEntities<any>(),
  withRequestsCache<'productType'>()
);

const subProductTypeStore = createStore(
  { name: 'subProductType' },
  withEntities<any>(),
  withRequestsCache<'subProductType'>()
);

const brandNameStore = createStore(
  { name: 'brandName' },
  withEntities<any>(),
  withRequestsCache<'brandName'>()
);

const subBrandNameStore = createStore(
  { name: 'subBrandName' },
  withEntities<any>(),
  withRequestsCache<'subBrandName'>()
);

const measuringTypeStore = createStore(
  { name: 'measuringType' },
  withEntities<any>(),
  withRequestsCache<'measuringType'>()
);

const weightTypeStore = createStore(
  { name: 'weightType' },
  withEntities<any>(),
  withRequestsCache<'weightType'>()
);

const warehouseLocationsStore = createStore(
  { name: 'warehouseLocations' },
  withEntities<any>(),
  withRequestsCache<'warehouseLocations'>()
);

const binLocationsStore = createStore(
  { name: 'binLocations' },
  withEntities<any>(),
  withRequestsCache<'binLocations'>()
);
@Injectable({ providedIn: 'root' })
export class InventoryRepository {
    inventoryService = inject(InventoryService)

    skipWhileTodosCached = createRequestsCacheOperator(categoryStore);

    categories$ = categoryStore.pipe(selectAllEntities());
    subCategories$ = subCategoryStore.pipe(selectAllEntities());
    productType$ = productTypeStore.pipe(selectAllEntities());
    subProductType$ = subProductTypeStore.pipe(selectAllEntities());
    brandName$ = brandNameStore.pipe(selectAllEntities());
    subBrandName$ = subBrandNameStore.pipe(selectAllEntities());
    measuringType$ = measuringTypeStore.pipe(selectAllEntities());
    weightType$ = weightTypeStore.pipe(selectAllEntities());
    warehouseLocations$ = warehouseLocationsStore.pipe(selectAllEntities());
    binLocations$ = binLocationsStore.pipe(selectAllEntities());

    setStores(product: any) {
      categoryStore.update(updateRequestCache('category'), setEntities(product?.category));
      subCategoryStore.update(updateRequestCache('subCategory'), setEntities(product?.subCategory));
      productTypeStore.update(updateRequestCache('productType'), setEntities(product?.productType));
      subProductTypeStore.update(updateRequestCache('subProductType'), setEntities(product?.subProductType));
      brandNameStore.update(updateRequestCache('brandName'), setEntities(product?.brandName));
      subBrandNameStore.update(updateRequestCache('subBrandName'), setEntities(product?.subBrandName));
      measuringTypeStore.update(updateRequestCache('measuringType'), setEntities(product?.measuringType));
      weightTypeStore.update(updateRequestCache('weightType'), setEntities(product?.weightType));
      warehouseLocationsStore.update(updateRequestCache('warehouseLocations'), setEntities(product?.warehouseLocations));
      binLocationsStore.update(updateRequestCache('binLocations'), setEntities(product?.binLocations));
    }

    fetchData() {
        return this.inventoryService.getProducts().pipe(
            // map((x: any) => x.map((val: any) => ({...val, id: val._id}) )),
            tap((d: any) => console.warn(d)),
            tap(this.setStores), this.skipWhileTodosCached('category'))
    }


}

