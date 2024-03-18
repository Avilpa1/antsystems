"use strict";
(self["webpackChunkantsystems_frontend"] = self["webpackChunkantsystems_frontend"] || []).push([["src_app_apps_apps_module_ts"],{

/***/ 1852:
/*!*********************************************!*\
  !*** ./src/app/apps/apps-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsRoutingModule: () => (/* binding */ AppsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _shell_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.service */ 4724);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 8472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);





const routes = [_shell_shell_service__WEBPACK_IMPORTED_MODULE_0__.Shell.childRoutes([{
  path: 'menu',
  component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent
}, {
  path: 'inventory',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_apps_shared_services_api_service_ts-node_modules_ngneat_elf-entities_index_es-6c9458"), __webpack_require__.e("src_app_apps_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inventory/inventory.module */ 2936)).then(m => m.InventoryModule)
}, {
  path: 'purchase',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_apps_shared_services_api_service_ts-node_modules_ngneat_elf-entities_index_es-6c9458"), __webpack_require__.e("src_app_apps_purchase_purchase_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase/purchase.module */ 1928)).then(m => m.PurchaseModule)
}])];
class AppsRoutingModule {
  static #_ = this.ɵfac = function AppsRoutingModule_Factory(t) {
    return new (t || AppsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 8980:
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppsModule: () => (/* binding */ AppsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps-routing.module */ 1852);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 8472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);





class AppsModule {
  static #_ = this.ɵfac = function AppsModule_Factory(t) {
    return new (t || AppsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppsModule, {
    declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 8472:
/*!*********************************************!*\
  !*** ./src/app/apps/menu/menu.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


const _c0 = () => ["/apps/inventory"];
class MenuComponent {
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 9,
    vars: 2,
    consts: [[1, "menu-container"], ["src", "assets/menu/Icon_Main_Menu_Inventory.png", "alt", "", 3, "routerLink"], ["src", "assets/menu/Icon_Main_Menu_SO.png", "alt", ""], ["src", "assets/menu/Icon_Main_Menu_wo.png", "alt", ""], ["src", "assets/menu/Icon_Main_Menu_Asset.png", "alt", ""], ["src", "assets/menu/Icon_Main_Menu_Purchase.png", "alt", ""], ["src", "assets/menu/Icon_Main_Menu_recv.png", "alt", ""], ["src", "assets/menu/Icon_Main_Menu_loc.png", "alt", ""], ["src", "assets/menu/Icon_Main_Menu_Trans.png", "alt", ""]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2)(3, "img", 3)(4, "img", 4)(5, "img", 5)(6, "img", 6)(7, "img", 7)(8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".menu-container[_ngcontent-%COMP%] {\n  margin: 6rem 12rem;\n  display: grid;\n  grid-row-gap: 4rem;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  align-content: center;\n  justify-items: center;\n}\n.menu-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwcy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUiIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDZyZW0gMTJyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiA0cmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4724:
/*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shell: () => (/* binding */ Shell)
/* harmony export */ });
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell.component */ 3028);

/**
 * Provides helper methods to create routes.
 */
class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes, resolvers = {}) {
    return {
      path: '',
      component: _shell_component__WEBPACK_IMPORTED_MODULE_0__.ShellComponent,
      children: routes,
      //   canActivate: [AuthenticationGuard, ProductEditionGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: {
        reuse: true
      },
      resolve: resolvers
    };
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_apps_apps_module_ts.js.map