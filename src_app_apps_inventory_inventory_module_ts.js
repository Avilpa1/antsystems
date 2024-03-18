"use strict";
(self["webpackChunkantsystems_frontend"] = self["webpackChunkantsystems_frontend"] || []).push([["src_app_apps_inventory_inventory_module_ts"],{

/***/ 8552:
/*!***************************************************************!*\
  !*** ./src/app/apps/inventory/+state/inventory.repository.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryRepository: () => (/* binding */ InventoryRepository)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/elf */ 565);
/* harmony import */ var _ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/elf-entities */ 5768);
/* harmony import */ var _ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/elf-requests */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8600);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inventory.service */ 9536);





// import { Product } from '../products/item/item.models';


const categoryStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'category'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const subCategoryStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'subCategory'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const productTypeStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'productType'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const subProductTypeStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'subProductType'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const brandNameStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'brandName'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const subBrandNameStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'subBrandName'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const measuringTypeStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'measuringType'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const weightTypeStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'weightType'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const warehouseLocationsStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'warehouseLocations'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
const binLocationsStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'binLocations'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
class InventoryRepository {
  constructor() {
    this.inventoryService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService);
    this.skipWhileTodosCached = (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.createRequestsCacheOperator)(categoryStore);
    this.categories$ = categoryStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.subCategories$ = subCategoryStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.productType$ = productTypeStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.subProductType$ = subProductTypeStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.brandName$ = brandNameStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.subBrandName$ = subBrandNameStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.measuringType$ = measuringTypeStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.weightType$ = weightTypeStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.warehouseLocations$ = warehouseLocationsStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.binLocations$ = binLocationsStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
  }
  setStores(product) {
    categoryStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('category'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.category));
    subCategoryStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('subCategory'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.subCategory));
    productTypeStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('productType'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.productType));
    subProductTypeStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('subProductType'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.subProductType));
    brandNameStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('brandName'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.brandName));
    subBrandNameStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('subBrandName'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.subBrandName));
    measuringTypeStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('measuringType'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.measuringType));
    weightTypeStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('weightType'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.weightType));
    warehouseLocationsStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('warehouseLocations'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.warehouseLocations));
    binLocationsStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('binLocations'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(product?.binLocations));
  }
  fetchData() {
    return this.inventoryService.getProducts().pipe(
    // map((x: any) => x.map((val: any) => ({...val, id: val._id}) )),
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(d => console.warn(d)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(this.setStores), this.skipWhileTodosCached('category'));
  }
  static #_ = this.ɵfac = function InventoryRepository_Factory(t) {
    return new (t || InventoryRepository)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: InventoryRepository,
    factory: InventoryRepository.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1615:
/*!**********************************************************!*\
  !*** ./src/app/apps/inventory/+state/item.repository.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemRepository: () => (/* binding */ ItemRepository)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/elf */ 565);
/* harmony import */ var _ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/elf-entities */ 5768);
/* harmony import */ var _ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/elf-requests */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 604);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8600);
/* harmony import */ var _products_item_item_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/item/item.service */ 272);







const itemsStore = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createStore)({
  name: 'items'
}, (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)(), (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.withRequestsCache)());
class ItemRepository {
  constructor() {
    this.itemService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_products_item_item_service__WEBPACK_IMPORTED_MODULE_0__.ItemService);
    this.skipWhileTodosCached = (0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.createRequestsCacheOperator)(itemsStore);
    this.items$ = itemsStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)());
    this.itemsItem$ = itemsStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x.map(z => {
      return {
        name: z.item
      };
    })));
    this.itemsSku$ = itemsStore.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntities)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x.map(z => {
      return {
        name: z.sku
      };
    })));
  }
  setItems(item) {
    itemsStore.update((0,_ngneat_elf_requests__WEBPACK_IMPORTED_MODULE_3__.updateRequestCache)('items'), (0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(item));
  }
  add(item) {
    return this.itemService.addItem(item).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(x => itemsStore.update((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.upsertEntities)(item))));
  }
  getById(id) {
    return itemsStore.query((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.getEntity)(id));
  }
  getBySku(sku) {
    return itemsStore.query((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.getEntityByPredicate)(res => res.sku == sku));
  }
  getByItem(item) {
    return itemsStore.query((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.getEntityByPredicate)(res => res.item == item));
  }
  fetchData() {
    return this.itemService.getItems().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x.map(val => ({
      ...val,
      id: val._id
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(this.setItems), this.skipWhileTodosCached('items'));
  }
  static #_ = this.ɵfac = function ItemRepository_Factory(t) {
    return new (t || ItemRepository)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ItemRepository,
    factory: ItemRepository.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4773:
/*!***************************************************************************!*\
  !*** ./src/app/apps/inventory/asset-tracking/asset-tracking.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetTrackingComponent: () => (/* binding */ AssetTrackingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class AssetTrackingComponent {
  static #_ = this.ɵfac = function AssetTrackingComponent_Factory(t) {
    return new (t || AssetTrackingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AssetTrackingComponent,
    selectors: [["app-asset-tracking"]],
    decls: 2,
    vars: 0,
    template: function AssetTrackingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "asset-tracking works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3644:
/*!*********************************************************************!*\
  !*** ./src/app/apps/inventory/fulfillment/fulfillment.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FulfillmentComponent: () => (/* binding */ FulfillmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class FulfillmentComponent {
  static #_ = this.ɵfac = function FulfillmentComponent_Factory(t) {
    return new (t || FulfillmentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FulfillmentComponent,
    selectors: [["app-fulfillment"]],
    decls: 2,
    vars: 0,
    template: function FulfillmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fulfillment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2384:
/*!***************************************************************************************!*\
  !*** ./src/app/apps/inventory/inventory-adjustment/inventory-adjustment.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryAdjustmentComponent: () => (/* binding */ InventoryAdjustmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class InventoryAdjustmentComponent {
  static #_ = this.ɵfac = function InventoryAdjustmentComponent_Factory(t) {
    return new (t || InventoryAdjustmentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InventoryAdjustmentComponent,
    selectors: [["app-inventory-adjustment"]],
    decls: 2,
    vars: 0,
    template: function InventoryAdjustmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inventory-adjustment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 664:
/*!************************************************************!*\
  !*** ./src/app/apps/inventory/inventory-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryRoutingModule: () => (/* binding */ InventoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.component */ 3884);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ 8652);
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list/products-list.component */ 7144);
/* harmony import */ var _fulfillment_fulfillment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fulfillment/fulfillment.component */ 3644);
/* harmony import */ var _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset-tracking/asset-tracking.component */ 4773);
/* harmony import */ var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfer/transfer.component */ 9188);
/* harmony import */ var _inventory_adjustment_inventory_adjustment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-adjustment/inventory-adjustment.component */ 2384);
/* harmony import */ var _rma_rma_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rma/rma.component */ 9692);
/* harmony import */ var _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-reports/product-reports.component */ 1439);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ 6916);
/* harmony import */ var _products_item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/item/item.component */ 226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4280);














const routes = [{
  path: '',
  component: _inventory_component__WEBPACK_IMPORTED_MODULE_0__.InventoryComponent,
  children: [{
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }, {
    path: 'products',
    component: _products_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent,
    children: [{
      path: '',
      redirectTo: 'item',
      pathMatch: 'full'
    }, {
      path: 'item',
      component: _products_item_item_component__WEBPACK_IMPORTED_MODULE_10__.ItemComponent
    }, {
      path: 'item/:item',
      component: _products_item_item_component__WEBPACK_IMPORTED_MODULE_10__.ItemComponent
    }]
  }, {
    path: 'products-list',
    component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductsListComponent
  }, {
    path: 'fullfilment',
    component: _fulfillment_fulfillment_component__WEBPACK_IMPORTED_MODULE_3__.FulfillmentComponent
  }, {
    path: 'asset-tracking',
    component: _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_4__.AssetTrackingComponent
  }, {
    path: 'transfer',
    component: _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_5__.TransferComponent
  }, {
    path: 'inventory-adjustment',
    component: _inventory_adjustment_inventory_adjustment_component__WEBPACK_IMPORTED_MODULE_6__.InventoryAdjustmentComponent
  }, {
    path: 'rma',
    component: _rma_rma_component__WEBPACK_IMPORTED_MODULE_7__.RmaComponent
  }, {
    path: 'reports',
    component: _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_8__.ProductReportsComponent
  }, {
    path: 'settings',
    component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__.SettingsComponent
  }]
}];
class InventoryRoutingModule {
  static #_ = this.ɵfac = function InventoryRoutingModule_Factory(t) {
    return new (t || InventoryRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: InventoryRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](InventoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 3884:
/*!*******************************************************!*\
  !*** ./src/app/apps/inventory/inventory.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryComponent: () => (/* binding */ InventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _state_inventory_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./+state/inventory.repository */ 8552);
/* harmony import */ var _state_item_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+state/item.repository */ 1615);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);




const _c0 = () => ["products"];
const _c1 = () => ["products-list"];
const _c2 = () => ["fullfilment"];
const _c3 = () => ["asset-tracking"];
const _c4 = () => ["transfer"];
const _c5 = () => ["inventory-adjustment"];
const _c6 = () => ["rma"];
const _c7 = () => ["reports"];
const _c8 = () => ["settings"];
class InventoryComponent {
  constructor(inventoryRepo, itemRepo) {
    this.inventoryRepo = inventoryRepo;
    this.itemRepo = itemRepo;
    this.inventoryRepo.fetchData().subscribe();
    this.itemRepo.fetchData().subscribe();
  }
  static #_ = this.ɵfac = function InventoryComponent_Factory(t) {
    return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_inventory_repository__WEBPACK_IMPORTED_MODULE_0__.InventoryRepository), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_item_repository__WEBPACK_IMPORTED_MODULE_1__.ItemRepository));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InventoryComponent,
    selectors: [["app-inventory"]],
    decls: 20,
    vars: 18,
    consts: [[1, "flex", "justify-center", "h-10", "my-2"], ["routerLinkActive", "nav-item-active", 1, "px-2", "mx-2", "nav-item", 3, "routerLink"]],
    template: function InventoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Products List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Fullfilment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Asset Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Inventory Adjustement");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "RMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c8));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: [".nav-item-active[_ngcontent-%COMP%] {\n  color: #536A84;\n  border-bottom: #536A84 solid 4px;\n  font-weight: 700;\n  background-color: transparent !important;\n  border-radius: 8px 8px 0 0 !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  color: rgba(106, 137, 176, 0.7490196078);\n  border-radius: 8px;\n  transition: background-color 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n\n[_ngcontent-%COMP%]:hover.nav-item {\n  background-color: rgba(165, 165, 165, 0.1019607843);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwcy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7QUFDSjs7QUFFQTtFQUNJLG1EQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWl0ZW0tYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNTM2QTg0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogIzUzNkE4NCBzb2xpZCA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgICBjb2xvcjogIzZhODliMGJmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjI4KTtcclxufVxyXG5cclxuOmhvdmVyLm5hdi1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNWE1YTUxYTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2936:
/*!****************************************************!*\
  !*** ./src/app/apps/inventory/inventory.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryModule: () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.component */ 3884);
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-routing.module */ 664);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ 8652);
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list/products-list.component */ 7144);
/* harmony import */ var _fulfillment_fulfillment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fulfillment/fulfillment.component */ 3644);
/* harmony import */ var _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset-tracking/asset-tracking.component */ 4773);
/* harmony import */ var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer/transfer.component */ 9188);
/* harmony import */ var _inventory_adjustment_inventory_adjustment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory-adjustment/inventory-adjustment.component */ 2384);
/* harmony import */ var _rma_rma_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rma/rma.component */ 9692);
/* harmony import */ var _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-reports/product-reports.component */ 1439);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ 6916);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ 520);
/* harmony import */ var _products_item_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/item/item.component */ 226);
/* harmony import */ var _modal_create_sku_create_sku_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/create-sku/create-sku.component */ 8432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 4280);
















class InventoryModule {
  static #_ = this.ɵfac = function InventoryModule_Factory(t) {
    return new (t || InventoryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: InventoryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_1__.InventoryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](InventoryModule, {
    declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_0__.InventoryComponent, _products_products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent, _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__.ProductsListComponent, _fulfillment_fulfillment_component__WEBPACK_IMPORTED_MODULE_4__.FulfillmentComponent, _asset_tracking_asset_tracking_component__WEBPACK_IMPORTED_MODULE_5__.AssetTrackingComponent, _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_6__.TransferComponent, _inventory_adjustment_inventory_adjustment_component__WEBPACK_IMPORTED_MODULE_7__.InventoryAdjustmentComponent, _rma_rma_component__WEBPACK_IMPORTED_MODULE_8__.RmaComponent, _product_reports_product_reports_component__WEBPACK_IMPORTED_MODULE_9__.ProductReportsComponent, _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__.SettingsComponent, _products_item_item_component__WEBPACK_IMPORTED_MODULE_12__.ItemComponent, _modal_create_sku_create_sku_component__WEBPACK_IMPORTED_MODULE_13__.CreateSkuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_1__.InventoryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule]
  });
})();

/***/ }),

/***/ 9536:
/*!*****************************************************!*\
  !*** ./src/app/apps/inventory/inventory.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryService: () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1332);


class InventoryService {
  constructor(http) {
    this.http = http;
  }
  getProducts() {
    return this.http.get('../../../../../assets/mock/categoryData.json');
  }
  getItems() {
    return this.http.get('../../../../../assets/mock/itemData.json');
  }
  static #_ = this.ɵfac = function InventoryService_Factory(t) {
    return new (t || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InventoryService,
    factory: InventoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8432:
/*!*************************************************************************!*\
  !*** ./src/app/apps/inventory/modal/create-sku/create-sku.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateSkuComponent: () => (/* binding */ CreateSkuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class CreateSkuComponent {
  constructor() {
    this.skuData = "no data";
  }
  static #_ = this.ɵfac = function CreateSkuComponent_Factory(t) {
    return new (t || CreateSkuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CreateSkuComponent,
    selectors: [["app-create-sku"]],
    inputs: {
      skuData: "skuData"
    },
    decls: 8,
    vars: 0,
    consts: [[1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary"]],
    template: function CreateSkuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwcy9pbnZlbnRvcnkvbW9kYWwvY3JlYXRlLXNrdS9jcmVhdGUtc2t1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1439:
/*!*****************************************************************************!*\
  !*** ./src/app/apps/inventory/product-reports/product-reports.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductReportsComponent: () => (/* binding */ ProductReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class ProductReportsComponent {
  static #_ = this.ɵfac = function ProductReportsComponent_Factory(t) {
    return new (t || ProductReportsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductReportsComponent,
    selectors: [["app-product-reports"]],
    decls: 2,
    vars: 0,
    template: function ProductReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "report works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6596:
/*!**********************************************************************!*\
  !*** ./src/app/apps/inventory/products-list/product-list.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListService: () => (/* binding */ ProductListService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1332);


class ProductListService {
  constructor(http) {
    this.http = http;
  }
  getProducts() {
    return this.http.get('../../../../../assets/mock/itemData.json');
  }
  static #_ = this.ɵfac = function ProductListService_Factory(t) {
    return new (t || ProductListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProductListService,
    factory: ProductListService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7144:
/*!*************************************************************************!*\
  !*** ./src/app/apps/inventory/products-list/products-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsListComponent: () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _product_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.service */ 6596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _state_item_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../+state/item.repository */ 1615);
/* harmony import */ var _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @generic-ui/ngx-grid */ 3928);





class ProductsListComponent {
  constructor(productListService, router, itemRepo) {
    this.productListService = productListService;
    this.router = router;
    this.itemRepo = itemRepo;
    this.source = [];
    this.columns = [{
      header: 'Item',
      field: 'item'
    }, {
      header: 'SKU',
      field: 'sku'
    }, {
      header: 'Description',
      field: 'description'
    }, {
      header: 'Master Case',
      field: 'unitDetails',
      formatter: data => data.masterCase
    }, {
      header: 'Inner',
      field: 'unitDetails',
      formatter: data => data.innerBox
    }, {
      header: 'Pack',
      field: 'unitDetails',
      formatter: data => data.pack
    }, {
      header: 'Pcs',
      field: 'unitDetails',
      formatter: data => data.pieces
    }
    // {
    //   header: 'On-Hand',
    //   field: 'job'
    // },
    // {
    //   header: 'In storage',
    //   field: 'age'
    // },
    // {
    //   header: 'Multi-Warehouse',
    //   field: 'name'
    // },
    // {
    //   header: 'Status',
    //   field: 'job'
    // }
    ];
    this.sorting = {
      enabled: true
    };
    // this.productListService.getProducts().subscribe((res) => {
    //   console.warn(res)
    // })
    this.itemRepo.items$.subscribe(res => {
      this.source = res;
    });
  }
  navTo(item) {
    console.warn(item);
    this.router.navigateByUrl(`/apps/inventory/products/item/${item[0].item}`);
  }
  static #_ = this.ɵfac = function ProductsListComponent_Factory(t) {
    return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_list_service__WEBPACK_IMPORTED_MODULE_0__.ProductListService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_state_item_repository__WEBPACK_IMPORTED_MODULE_1__.ItemRepository));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProductsListComponent,
    selectors: [["app-products-list"]],
    decls: 5,
    vars: 5,
    consts: [[1, "product-container"], [1, "header", "flex", "justify-center", "items-center", "text-white", "font-semibold"], [1, "content"], [3, "source", "columns", "sorting", "verticalGrid", "horizontalGrid", "itemsSelected"]],
    template: function ProductsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Item List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "gui-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("itemsSelected", function ProductsListComponent_Template_gui_grid_itemsSelected_4_listener($event) {
          return ctx.navTo($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx.source)("columns", ctx.columns)("sorting", ctx.sorting)("verticalGrid", false)("horizontalGrid", true);
      }
    },
    dependencies: [_generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_4__.GuiGridComponent],
    styles: [".product-container[_ngcontent-%COMP%] {\n  margin-block: 1.25rem;\n  margin-inline: 20px;\n  border-radius: 10px;\n  background: #FFF;\n}\n.product-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  height: 37px;\n  background: #75889D;\n}\n.product-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem 1.5rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwcy9pbnZlbnRvcnkvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUVJO0VBQ0ksb0NBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDEuMjVyZW07XHJcbiAgICBtYXJnaW4taW5saW5lOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzc1ODg5RDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDEuNXJlbSAxLjVyZW0gMS41cmVtO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 226:
/*!****************************************************************!*\
  !*** ./src/app/apps/inventory/products/item/item.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemComponent: () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1296);
/* harmony import */ var _modal_create_sku_create_sku_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal/create-sku/create-sku.component */ 8432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _state_inventory_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+state/inventory.repository */ 8552);
/* harmony import */ var _state_item_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+state/item.repository */ 1615);
/* harmony import */ var src_app_apps_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/apps/shared/components/modal/modal.service */ 3260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item.service */ 272);
/* harmony import */ var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mdb-angular-ui-kit/modal */ 204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/select/select.component */ 9756);
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown.component */ 9976);














const _c0 = a0 => ({
  "btn-disabled": a0
});
class ItemComponent {
  constructor(inventoryRepo, itemRepo, modal, route, itemService, modalService) {
    this.inventoryRepo = inventoryRepo;
    this.itemRepo = itemRepo;
    this.modal = modal;
    this.route = route;
    this.itemService = itemService;
    this.modalService = modalService;
    this.canEditItem = true;
    this.categoriesData = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable();
    this.itemData = null;
    this.modalRef = null;
    this.actionBtnConfig = [{
      name: "New SKU"
    }];
    this.modalConfig = {
      animation: true,
      backdrop: true,
      containerClass: 'right',
      data: {
        title: 'Custom title'
      },
      ignoreBackdropClick: false,
      keyboard: true,
      modalClass: 'modal-dialog-centered'
      // nonInvasive: true,
    };
    this.initForm();
    if (this.itemData) {
      this.canEditItem = false;
    }
    const itemFromRoute = this.route.snapshot.params['item'];
    if (itemFromRoute) {
      this.itemRepo.items$.subscribe(() => {
        const item = this.itemRepo.getBySku(itemFromRoute);
        this.productForm.patchValue(item);
        this.canEditItem = false;
        this.productForm.disable();
      });
    }
  }
  initForm() {
    this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      active: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(true),
      item: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      sku: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      unitDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        masterCase: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        innerBox: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        pack: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        pieces: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        caseByPallet: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        rowAndCase: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      marketplace: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        iSku: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      priceDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        retailPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        wholesalePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        distributor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        onlinePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        category: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        subCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        productType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        subProductType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      brandName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        brandName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        subBrand: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      measuringDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        lengthWidthHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        volume: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        measuringType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        weightType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        totalPoundPallet: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        case: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        inner: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        pack: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        piece: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      locations: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        warehouseLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        binLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl({
          value: null,
          disabled: false
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      }),
      expirationDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
        manufactureDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        expirationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        lot: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        madeIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
        serialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
      })
    });
    // this.productForm.disable();
    // console.warn(this.productForm)
  }
  resetChildren(controlName) {
    const control = this.productForm.get(controlName);
    control?.reset();
    // console.warn(this.productForm.get('categories'))
  }
  onSave() {
    console.warn(this.productForm, this.productForm.value);
    this.itemRepo.add(this.productForm.value);
  }
  patch() {
    // const item = this.itemRepo.getById(1)!;
    // this.productForm.patchValue(item);
    // this.itemService.getItems().subscribe()
    // this.itemService.addItem(this.productForm.value).subscribe()
    // this.itemRepo.add(this.productForm.value).subscribe();
    console.warn(this.productForm, this.productForm.value);
  }
  toggleLock() {
    if (this.canEditItem) {
      this.canEditItem = false;
      this.productForm.disable();
    } else {
      this.canEditItem = true;
      this.productForm.enable();
    }
  }
  openModalCreateNewSku() {
    // this.modal.open(CreateSkuComponent, {name: 'Note', width: '35rem'});
    this.modalRef = this.modalService.open(_modal_create_sku_create_sku_component__WEBPACK_IMPORTED_MODULE_0__.CreateSkuComponent, this.modalConfig);
  }
  selectItemFromDropdown(event) {
    const item = this.itemRepo.getByItem(event.name);
    this.productForm.patchValue(item);
    this.canEditItem = false;
    this.productForm.disable();
  }
  valueChangedAlert(event) {
    this.modal.open(_modal_create_sku_create_sku_component__WEBPACK_IMPORTED_MODULE_0__.CreateSkuComponent, {
      name: 'Note',
      width: '35rem'
    });
  }
  static #_ = this.ɵfac = function ItemComponent_Factory(t) {
    return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_state_inventory_repository__WEBPACK_IMPORTED_MODULE_1__.InventoryRepository), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_state_item_repository__WEBPACK_IMPORTED_MODULE_2__.ItemRepository), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_apps_shared_components_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_item_service__WEBPACK_IMPORTED_MODULE_4__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_11__.MdbModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ItemComponent,
    selectors: [["app-item"]],
    decls: 240,
    vars: 77,
    consts: [[1, "flex", "justify-between", "my-8", "flex-wrap", "gap-y-4", "gap-x-4"], [1, "text-green-500", "font-bold"], [1, "text-blue-500", "font-bold"], [1, "text-yellow-500", "font-bold"], [1, "text-purple-500", "font-bold"], [3, "formGroup"], [1, "flex", "items-center", "mb-4"], ["id", "default-checkbox", "type", "checkbox", "formControlName", "active", 1, "w-4", "h-4", "text-blue-600", "bg-gray-100", "border-gray-300", "rounded", "focus:ring-blue-500", "dark:focus:ring-blue-600", "dark:ring-offset-gray-800", "focus:ring-2", "dark:bg-gray-700", "dark:border-gray-600"], ["for", "default-checkbox", 1, "ms-2", "text-sm", "font-medium", "text-gray-900", "dark:text-gray-300"], [1, "flex"], [1, "w-4/5"], [1, "flex", "justify-between"], [1, "flex", "gap-4", "w-full"], [1, "w-1/4", "relative"], ["for", "first_name", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["placeHolder", "Item", 3, "control", "options", "selectedItemEvent", "actionBtnEvent"], ["placeHolder", "SKU", 3, "control", "options", "actionBtnConfig", "actionBtnEvent"], [1, "w-1/2"], ["type", "text", "id", "first_name", "formControlName", "description", "placeholder", "Description", 1, "ant-input"], [1, "material-symbols-outlined", "text-4xl", "w-1/6", "flex", "justify-end", "items-center", "cursor-pointer", 3, "click"], [1, "mt-6"], ["for", "first_name", 1, "block", "mb-1", "text-base", "font-medium", "text-gray-900", "dark:text-white"], [1, "border-2", "border-black", "border-solid"], ["formGroupName", "unitDetails", 1, "flex", "gap-4", "form-section", "p-4"], [1, "w-1/6"], ["for", "master_case", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "masterCase", "type", "text", "id", "master_case", "placeholder", "Master Case", 1, "ant-input"], ["for", "inner_box", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "innerBox", "type", "text", "id", "inner_box", "placeholder", "Inner Box", 1, "ant-input"], ["for", "pack", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "pack", "type", "text", "id", "pack", "placeholder", "Pack", 1, "ant-input"], ["for", "pieces", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "pieces", "type", "text", "id", "pieces", "placeholder", "Pieces", 1, "ant-input"], ["for", "case_by_pallet", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "caseByPallet", "type", "text", "id", "case_by_pallet", "placeholder", "Case by Pallet", 1, "ant-input"], ["for", "row_and_case", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "rowAndCase", "type", "text", "id", "row_and_case", "placeholder", "Row & Case", 1, "ant-input"], ["formGroupName", "marketplace", 1, "flex", "gap-4", "form-section", "p-4"], ["for", "iSku", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "iSku", "type", "text", "id", "iSku", "placeholder", "i-SKU", 1, "ant-input"], ["formGroupName", "priceDetails", 1, "flex", "gap-4", "form-section", "form-section-blue", "p-4", "justify-between"], ["for", "retail_price", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "retailPrice", "type", "text", "id", "retail_price", "placeholder", "Retail Price", 1, "ant-input"], ["for", "wholesale_price", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "wholesalePrice", "type", "text", "id", "wholesale_price", "placeholder", "Wholesale Price", 1, "ant-input"], ["for", "distributor", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "distributor", "type", "text", "id", "distributor", "placeholder", "Distributor", 1, "ant-input"], ["for", "online_price", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "onlinePrice", "type", "text", "id", "online_price", "placeholder", "Online Price", 1, "ant-input"], ["formGroupName", "categories", 1, "flex", "gap-4", "form-section", "p-4", "justify-between"], ["label", "Category", "subGroupName", "categories", "next", "subCategory", "placeholder", "Category", 3, "data", "groupName", "controlName", "valueChangedAlert"], ["label", "Sub Category", "subGroupName", "categories", "prev", "category", "next", "productType", "placeholder", "Sub Category", 3, "data", "groupName", "controlName", "filter", "valueChangedAlert"], ["label", "Product Type", "subGroupName", "categories", "prev", "subCategory", "next", "subProductType", "placeholder", "Product Type", 3, "data", "groupName", "controlName", "filter", "valueChangedAlert"], ["label", "Sub Product Type", "subGroupName", "categories", "prev", "productType", "placeholder", "Sub Product Type", 3, "data", "groupName", "controlName", "filter"], ["formGroupName", "brandName", 1, "flex", "gap-4", "form-section", "p-4"], ["label", "Brand Name", "subGroupName", "brandName", "next", "subBrand", "placeholder", "Brand Name", 3, "data", "groupName", "controlName", "valueChangedAlert"], ["label", "Sub Brand", "subGroupName", "brandName", "prev", "brandName", "placeholder", "Sub Brand Name", 3, "data", "groupName", "controlName", "filter"], ["formGroupName", "measuringDetails", 1, "flex", "gap-4", "form-section", "p-4"], ["for", "l_w_h", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "lengthWidthHeight", "type", "text", "id", "l_w_h", "placeholder", "Measuring L x W x H", 1, "ant-input"], ["for", "volume", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "volume", "type", "text", "id", "volume", "placeholder", "Volume CBM / CBF", 1, "ant-input"], ["label", "Meas Type", "subGroupName", "measuringDetails", "placeholder", "Meas Type", 3, "data", "groupName", "controlName"], ["for", "weight", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "weight", "type", "text", "id", "weight", "placeholder", "Weight", 1, "ant-input"], ["label", "Weight Type", "subGroupName", "measuringDetails", "placeholder", "Weight Type", 3, "data", "groupName", "controlName"], ["for", "total_pound_pallet", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "totalPoundPallet", "type", "text", "id", "total_pound_pallet", "placeholder", "Total Pound Pallet", 1, "ant-input"], ["formGroupName", "barcode", 1, "flex", "gap-4", "form-section", "p-4", "justify-between"], ["for", "case", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "case", "type", "text", "id", "case", "placeholder", "Case", 1, "ant-input"], ["for", "inner", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "inner", "type", "text", "id", "inner", "placeholder", "Inner", 1, "ant-input"], ["for", "piece", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "piece", "type", "text", "id", "piece", "placeholder", "Piece", 1, "ant-input"], ["formGroupName", "locations", 1, "flex", "gap-4", "form-section", "p-4"], ["label", "Warehouse Location", "subGroupName", "locations", "next", "binLocation", "placeholder", "Warehouse Location", 3, "data", "groupName", "controlName", "valueChangedAlert"], ["label", "Bin Location", "subGroupName", "locations", "placeholder", "Bin Location", "prev", "warehouseLocation", 3, "data", "groupName", "controlName", "filter"], ["formGroupName", "expirationDetails", 1, "flex", "gap-4", "form-section", "p-4"], ["for", "manufacture_date", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "manufactureDate", "type", "text", "id", "manufacture_date", "placeholder", "Manufacture Date", 1, "ant-input"], ["for", "expiration_date", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "expirationDate", "type", "text", "id", "expiration_date", "placeholder", "Expiration Date", 1, "ant-input"], [1, "w-1/6", "flex", "justify-center", "items-end", "mb-2", "text-xs", "font-semibold"], [1, ""], ["for", "lot", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "lot", "type", "text", "id", "lot", "placeholder", "Lot", 1, "ant-input"], ["for", "made_in", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "madeIn", "type", "text", "id", "made_in", "placeholder", "Made In", 1, "ant-input"], ["for", "serial_number", 1, "block", "mb-1", "text-xs", "font-medium", "text-gray-900", "dark:text-white"], ["formControlName", "serialNumber", "type", "text", "id", "serial_number", "placeholder", "Serial #", 1, "ant-input"], [1, "mt-6", "flex", "gap-6", "justify-center"], ["type", "button", 1, "w-28", "focus:outline-none", "text-white", "bg-red-700", "hover:bg-red-800", "focus:ring-4", "focus:ring-red-300", "font-medium", "rounded-lg", "text-sm", "py-2.5", "mb-2", "dark:bg-red-600", "dark:hover:bg-red-700", "dark:focus:ring-red-900"], ["type", "button", 1, "w-28", "text-white", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "py-2.5", "mb-2", "dark:bg-blue-600", "dark:hover:bg-blue-700", "focus:outline-none", "dark:focus:ring-blue-800", 3, "disabled", "ngClass", "click"], [3, "click"], [1, "w-1/5", "h-full", "flex", "justify-center", "flex-col", "items-center", "pl-6"], [1, "text-xs", "mb-2"], [1, "w-full", "border-solid", "border-black", "border-2", "h-48", "mt-20", "rounded-md"]],
    template: function ItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div")(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "On Hand: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "13,500 pcs / 5,000 cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div")(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "On Storage: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "59,000 pcs / 1,211 cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div")(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "On Order: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "2,500 pcs / 50 cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div")(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "On MultiWarehouse: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "265,000 pcs / 35,000 cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "form", 5)(23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 9)(28, "div", 10)(29, "form", 5)(30, "div", 11)(31, "div", 12)(32, "div", 13)(33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "ant-dropdown", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedItemEvent", function ItemComponent_Template_ant_dropdown_selectedItemEvent_35_listener($event) {
          return ctx.selectItemFromDropdown($event);
        })("actionBtnEvent", function ItemComponent_Template_ant_dropdown_actionBtnEvent_35_listener() {
          return ctx.openModalCreateNewSku();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 13)(38, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "SKU");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "ant-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("actionBtnEvent", function ItemComponent_Template_ant_dropdown_actionBtnEvent_40_listener() {
          return ctx.openModalCreateNewSku();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 17)(43, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ItemComponent_Template_span_click_46_listener() {
          return ctx.toggleLock();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 20)(49, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Unit Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 23)(53, "div", 24)(54, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Master Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 24)(58, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Inner Box");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 24)(62, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 24)(66, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Pieces");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 24)(70, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Case by Pallets");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](72, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 24)(74, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Row & Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](76, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 20)(78, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, "Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](80, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 37)(82, "div", 24)(83, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "i-SKU");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](85, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "div", 20)(87, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "Price Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](89, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "div", 40)(91, "div", 24)(92, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "Retail Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](94, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 24)(96, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "Wholesale Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](98, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 24)(100, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "Distributor");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div", 24)(104, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, "Online Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](106, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 20)(108, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](110, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 49)(112, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](113, "ant-select", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](114, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](116, "ant-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](117, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](119, "ant-select", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](120, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](122, "ant-select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](123, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "div", 20)(125, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "Brand Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](127, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "div", 54)(129, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](130, "ant-select", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](131, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](133, "ant-select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](134, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 20)(136, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "Measuring Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](138, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "div", 57)(140, "div", 24)(141, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](142, "Measuring L x W x H");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](143, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 24)(145, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "Volume CBM / CBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](147, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](148, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](149, "ant-select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](150, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "div", 24)(152, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](154, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](156, "ant-select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](157, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "div", 24)(159, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](160, "Total Pound Pallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](161, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "div", 20)(163, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](164, "Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](165, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "div", 68)(167, "div", 24)(168, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169, "Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](170, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "div", 24)(172, "label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](173, "Inner");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](174, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "div", 24)(176, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177, "Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](178, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 24)(180, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181, "Piece");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](182, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "div", 20)(184, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](185, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](186, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "div", 75)(188, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](189, "ant-select", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](190, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](192, "ant-select", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](193, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "div", 20)(195, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](196, "Expiration Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](197, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "div", 78)(199, "div", 24)(200, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](201, "Manufacture Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](202, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "div", 24)(204, "label", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](205, "Expiration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](206, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "div", 83)(208, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](209, "Exp in:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](211, "3 years / 7 Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "div", 24)(213, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](215, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](216, "div", 24)(217, "label", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](218, "Made In");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](219, "input", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "div", 24)(221, "label", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222, "Serial #");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](223, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "div", 91)(225, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](226, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_227_listener() {
          return ctx.onSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](228, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](229, "button", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_229_listener() {
          return ctx.patch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](230, "patch");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](231, "button", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_231_listener() {
          return ctx.onSave();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "div", 95)(234, "div", 96)(235, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](236, "Vendor Item: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](238, "NK-23300-SRT");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](239, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ((tmp_1_0 = ctx.productForm.get("active")) == null ? null : tmp_1_0.value) ? "Active" : "Inactive", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.productForm.get("item"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 51, ctx.itemRepo.itemsItem$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.productForm.get("sku"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 53, ctx.itemRepo.itemsSku$))("actionBtnConfig", ctx.actionBtnConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.canEditItem ? "lock_open" : "lock", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](114, 55, ctx.inventoryRepo.categories$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("categories.category"))("valueChangedAlert", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](117, 57, ctx.inventoryRepo.subCategories$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("categories.subCategory"))("filter", true)("valueChangedAlert", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](120, 59, ctx.inventoryRepo.productType$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("categories.productType"))("filter", true)("valueChangedAlert", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](123, 61, ctx.inventoryRepo.subProductType$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("categories.subProductType"))("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](131, 63, ctx.inventoryRepo.brandName$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("brandName.brandName"))("valueChangedAlert", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](134, 65, ctx.inventoryRepo.subBrandName$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("brandName.subBrand"))("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](150, 67, ctx.inventoryRepo.measuringType$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("measuringDetails.measuringType"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](157, 69, ctx.inventoryRepo.weightType$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("measuringDetails.weightType"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](190, 71, ctx.inventoryRepo.warehouseLocations$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("locations.warehouseLocation"))("valueChangedAlert", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](193, 73, ctx.inventoryRepo.binLocations$))("groupName", ctx.productForm)("controlName", ctx.productForm.get("locations.binLocation"))("filter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.productForm.valid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](75, _c0, !ctx.productForm.valid));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__.SelectComponent, _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__.DropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: [".product-status-container[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #000;\n  background: #F1F1F1;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);\n  margin-inline: 20px;\n  height: 14rem;\n  display: grid;\n  grid-gap: 19px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  align-content: center;\n  justify-items: center;\n}\n\n.product-container[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-inline: 20px;\n  border-radius: 10px;\n  background: #FFF;\n}\n.product-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  height: 37px;\n  background: #75889D;\n}\n.product-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem;\n}\n\n.nav-item-active[_ngcontent-%COMP%] {\n  border-bottom: #536A84 solid 4px;\n  font-weight: 700;\n  background-color: transparent !important;\n  border-radius: 8px 8px 0 0 !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  transition: background-color 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n\n[_ngcontent-%COMP%]:hover.nav-item {\n  background-color: rgba(165, 165, 165, 0.1019607843);\n}\n\n.form-section[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 5px 5px;\n  background: rgba(199, 204, 207, 0.25);\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n\n.form-section-blue[_ngcontent-%COMP%] {\n  background-color: #ECF7FF;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c4c2c2;\n  cursor: default;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwcy9pbnZlbnRvcnkvcHJvZHVjdHMvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFHQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZSO0FBS0k7RUFDSSxzQkFBQTtBQUhSOztBQU9BO0VBRUksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7QUFMSjs7QUFRQTtFQUVJLGtCQUFBO0VBQ0Esc0VBQUE7QUFOSjs7QUFTQTtFQUNJLG1EQUFBO0FBTko7O0FBU0E7RUFDSSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7QUFOSjs7QUFTQTtFQUNJLHlCQUFBO0FBTko7O0FBU0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFOSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXN0YXR1cy1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE0cmVtO1xyXG5cclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDE5cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNzU4ODlEO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYtaXRlbS1hY3RpdmUge1xyXG4gICAgLy8gY29sb3I6ICM1MzZBODQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAjNTM2QTg0IHNvbGlkIDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIC8vIGNvbG9yOiAjNmE4OWIwYmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xyXG59XHJcblxyXG46aG92ZXIubmF2LWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTFhO1xyXG59XHJcblxyXG4uZm9ybS1zZWN0aW9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk5LCAyMDQsIDIwNywgMC4yNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuLmZvcm0tc2VjdGlvbi1ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0Y3RkY7XHJcbn1cclxuXHJcbi5idG4tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzJjMjtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 272:
/*!**************************************************************!*\
  !*** ./src/app/apps/inventory/products/item/item.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemService: () => (/* binding */ ItemService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1332);
/* harmony import */ var src_app_apps_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/apps/shared/services/api.service */ 7024);



class ItemService {
  constructor(http, api) {
    this.http = http;
    this.api = api;
  }
  getItems() {
    // return this.http.get('api/items')
    return this.api.get('api/items');
  }
  addItem(item) {
    return this.http.post('api/items', item);
  }
  static #_ = this.ɵfac = function ItemService_Factory(t) {
    return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_apps_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ItemService,
    factory: ItemService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8652:
/*!***************************************************************!*\
  !*** ./src/app/apps/inventory/products/products.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


const _c0 = () => ["product"];
const _c1 = () => ["products-list"];
const _c2 = () => ["fullfilment"];
const _c3 = () => ["inventory-adjustment"];
const _c4 = () => ["asset-tracking"];
const _c5 = () => ["transfer"];
class ProductsComponent {
  constructor() {
    this.data = [{
      title: 'Product Lower',
      icon: 'system_update_alt',
      products: 24,
      categories: 3,
      color: 'emergency'
    }, {
      title: 'Product Expired Soon',
      icon: 'update',
      products: 4,
      categories: 3,
      color: 'emergency'
    }, {
      title: 'Product Most Seller',
      icon: 'sell',
      products: 8,
      categories: 3,
      color: 'success'
    }, {
      title: 'Product Back Order',
      icon: 'low_priority',
      products: 4,
      categories: 3,
      color: 'base'
    }, {
      title: 'Product Stocked for 3mo',
      icon: 'orders',
      products: 4,
      categories: 3,
      color: 'warning'
    }, {
      title: 'Product Overstock',
      icon: 'shelves',
      products: 4,
      categories: 3,
      color: 'warning'
    }, {
      title: 'Product Damages',
      icon: 'warning',
      products: 4,
      categories: 3,
      color: 'warning'
    }, {
      title: 'Product Over cost',
      icon: 'monetization_on',
      products: 4,
      categories: 3,
      color: 'emergency'
    }];
  }
  static #_ = this.ɵfac = function ProductsComponent_Factory(t) {
    return new (t || ProductsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductsComponent,
    selectors: [["app-products"]],
    decls: 18,
    vars: 12,
    consts: [[1, "product-container"], [1, "header", "flex", "justify-center", "items-center", "text-white", "font-semibold"], [1, "content"], [1, "flex"], ["routerLinkActive", "nav-item-active", 1, "px-2", "mx-2", "nav-item", 3, "routerLink"]],
    template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Item Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Receiving");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Asset Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "S/W Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: [".product-status-container[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #000;\n  background: #F1F1F1;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);\n  margin-inline: 20px;\n  display: grid;\n  grid-gap: 19px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-columns: 1fr;\n  align-content: center;\n  justify-items: center;\n  padding: 1rem;\n}\n\n.product-container[_ngcontent-%COMP%] {\n  margin-block: 1.25rem;\n  margin-inline: 20px;\n  border-radius: 10px;\n  background: #FFF;\n}\n.product-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n  height: 37px;\n  background: #75889D;\n}\n.product-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem 1.5rem 1.5rem;\n}\n\n.nav-item-active[_ngcontent-%COMP%] {\n  border-bottom: #536A84 solid 4px;\n  font-weight: 700;\n  background-color: transparent !important;\n  border-radius: 8px 8px 0 0 !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  transition: background-color 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n}\n\n[_ngcontent-%COMP%]:hover.nav-item {\n  background-color: rgba(165, 165, 165, 0.1019607843);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwcy9pbnZlbnRvcnkvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBSUEsYUFBQTtFQUNBLGNBQUE7RUFFQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFPQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7QUFNSTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSlI7QUFPSTtFQUNJLG9DQUFBO0FBTFI7O0FBU0E7RUFFSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQ0FBQTtBQVBKOztBQVVBO0VBRUksa0JBQUE7RUFDQSxzRUFBQTtBQVJKOztBQVdBO0VBQ0ksbURBQUE7QUFSSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXN0YXR1cy1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDE0cmVtO1xyXG5cclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDE5cHg7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ibG9jazogMS4yNXJlbTtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNzU4ODlEO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtIDEuNXJlbSAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYtaXRlbS1hY3RpdmUge1xyXG4gICAgLy8gY29sb3I6ICM1MzZBODQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAjNTM2QTg0IHNvbGlkIDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICAgIC8vIGNvbG9yOiAjNmE4OWIwYmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMjgpO1xyXG59XHJcblxyXG46aG92ZXIubmF2LWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTFhO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9692:
/*!*****************************************************!*\
  !*** ./src/app/apps/inventory/rma/rma.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RmaComponent: () => (/* binding */ RmaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class RmaComponent {
  static #_ = this.ɵfac = function RmaComponent_Factory(t) {
    return new (t || RmaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RmaComponent,
    selectors: [["app-rma"]],
    decls: 2,
    vars: 0,
    template: function RmaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rma works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6916:
/*!***************************************************************!*\
  !*** ./src/app/apps/inventory/settings/settings.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class SettingsComponent {
  static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    decls: 2,
    vars: 0,
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9188:
/*!***************************************************************!*\
  !*** ./src/app/apps/inventory/transfer/transfer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferComponent: () => (/* binding */ TransferComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);

class TransferComponent {
  static #_ = this.ɵfac = function TransferComponent_Factory(t) {
    return new (t || TransferComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TransferComponent,
    selectors: [["app-transfer"]],
    decls: 2,
    vars: 0,
    template: function TransferComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "transfer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_apps_inventory_inventory_module_ts.js.map