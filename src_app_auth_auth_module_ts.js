"use strict";
(self["webpackChunkantsystems_frontend"] = self["webpackChunkantsystems_frontend"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 52:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4040);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4280);




const routes = [{
  path: '',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class AuthRoutingModule {
  static #_ = this.ɵfac = function AuthRoutingModule_Factory(t) {
    return new (t || AuthRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AuthRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5228:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2676);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 52);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4280);




class AuthModule {
  static #_ = this.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
})();

/***/ }),

/***/ 8936:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4040);


class LoginComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 23,
    vars: 1,
    consts: [[1, "bg-img", "h-screen", "w-screen", "flex", "justify-center", "items-center"], [1, "login-wrapper"], [1, "login-form", "w-1/2"], ["src", "assets/logoAntSystems_vertical 3.png", "alt", "", 1, "my-2", "ml-4", "h-8"], [1, "text-black"], [1, "p-10", "flex", "flex-col", "justify-center"], [1, "font-bold", "mb-4"], [1, "text-xs", "mb-4"], [1, "relative", "z-0", "w-full", "mb-6", "group"], ["type", "email", "name", "floating_email", "id", "floating_email", "placeholder", " ", "required", "", 1, "block", "py-2.5", "px-0", "w-full", "text-sm", "text-gray-900", "bg-transparent", "border-0", "border-b-2", "border-gray-300", "appearance-none", "dark:text-white", "dark:border-gray-600", "dark:focus:border-blue-500", "focus:outline-none", "focus:ring-0", "focus:border-blue-600", "peer"], ["for", "floating_email", 1, "peer-focus:font-medium", "absolute", "text-sm", "text-gray-500", "dark:text-gray-400", "duration-300", "transform", "-translate-y-6", "scale-75", "top-3", "-z-10", "origin-[0]", "peer-focus:left-0", "peer-focus:text-blue-600", "peer-focus:dark:text-blue-500", "peer-placeholder-shown:scale-100", "peer-placeholder-shown:translate-y-0", "peer-focus:scale-75", "peer-focus:-translate-y-6"], ["type", "password", "name", "floating_password", "id", "floating_password", "placeholder", " ", "required", "", 1, "block", "py-2.5", "px-0", "w-full", "text-sm", "text-gray-900", "bg-transparent", "border-0", "border-b-2", "border-gray-300", "appearance-none", "dark:text-white", "dark:border-gray-600", "dark:focus:border-blue-500", "focus:outline-none", "focus:ring-0", "focus:border-blue-600", "peer"], ["for", "floating_password", 1, "peer-focus:font-medium", "absolute", "text-sm", "text-gray-500", "dark:text-gray-400", "duration-300", "transform", "-translate-y-6", "scale-75", "top-3", "-z-10", "origin-[0]", "peer-focus:left-0", "peer-focus:text-blue-600", "peer-focus:dark:text-blue-500", "peer-placeholder-shown:scale-100", "peer-placeholder-shown:translate-y-0", "peer-focus:scale-75", "peer-focus:-translate-y-6"], [1, "mt-4"], ["type", "button", 1, "text-white", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "mr-2", "mb-2", "dark:bg-blue-600", "dark:hover:bg-blue-700", "focus:outline-none", "dark:focus:ring-blue-800", "w-full", 3, "routerLink"], [1, "w-1/2"], ["src", "assets/login_frame.png", "alt", "", 1, "h-full", "w-full"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3)(4, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome to AntSystem, please enter your login credentials below to start using the system. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "apps/menu");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".login-btn[_ngcontent-%COMP%] {\n  background-color: #80C4E1;\n}\n\n.login-btn[_ngcontent-%COMP%]:hover {\n  background-color: #74b3cc;\n}\n\n.srm-text-blue[_ngcontent-%COMP%] {\n  color: #74b3cc;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: url('login-star-bg-large.png') no-repeat center center fixed;\n  background-size: cover;\n}\n\n.login-wrapper[_ngcontent-%COMP%] {\n  width: 54rem;\n  height: 31rem;\n  display: flex;\n  border-radius: 15px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  background-color: #F9F9FB;\n}\n\nhr[_ngcontent-%COMP%] {\n  border-color: #EBEBEB;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksd0VBQUE7RUFJQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBDNEUxO1xyXG59XHJcblxyXG4ubG9naW4tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NGIzY2M7XHJcbn1cclxuXHJcbi5zcm0tdGV4dC1ibHVlIHtcclxuICAgIGNvbG9yOiAjNzRiM2NjO1xyXG59XHJcblxyXG4uYmctaW1nIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvbG9naW4tc3Rhci1iZy1sYXJnZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubG9naW4td3JhcHBlciB7XHJcbiAgICB3aWR0aDogNTRyZW07XHJcbiAgICBoZWlnaHQ6IDMxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5RkI7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0VCRUJFQjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map