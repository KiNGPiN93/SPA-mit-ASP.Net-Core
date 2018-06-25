webpackJsonp([1],{

/***/ "../../../../../ClientApp async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../ClientApp async recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("../../../../../ClientApp/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dishes_dish_detail_dish_detail_component__ = __webpack_require__("../../../../../ClientApp/app/dishes/dish-detail/dish-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dishes_add_dish_add_dish_component__ = __webpack_require__("../../../../../ClientApp/app/dishes/add-dish/add-dish.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'dish/add', component: __WEBPACK_IMPORTED_MODULE_4__dishes_add_dish_add_dish_component__["a" /* AddDishComponent */] },
    { path: 'dish/:id', component: __WEBPACK_IMPORTED_MODULE_3__dishes_dish_detail_dish_detail_component__["a" /* DishDetailComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">{{title}}</md-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'El Vegetariano Furio';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../ClientApp/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dishes_dish_detail_dish_detail_component__ = __webpack_require__("../../../../../ClientApp/app/dishes/dish-detail/dish-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../ClientApp/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__delete_dialog_component__ = __webpack_require__("../../../../../ClientApp/app/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dishes_add_dish_add_dish_component__ = __webpack_require__("../../../../../ClientApp/app/dishes/add-dish/add-dish.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dishes_dish_detail_dish_detail_component__["a" /* DishDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__delete_dialog_component__["a" /* DeleteDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dishes_add_dish_add_dish_component__["a" /* AddDishComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__delete_dialog_component__["a" /* DeleteDialogComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Eintrag löschen</h2>\r\n<md-dialog-content>Möchten Sie den Eintrag wirklich löschen?</md-dialog-content>\r\n<md-dialog-actions>\r\n    <button md-button md-dialog-close>Nein</button>\r\n    <button md-button [md-dialog-close]=\"true\">Ja</button>\r\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../ClientApp/app/delete-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DeleteDialogComponent;
}());
DeleteDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'delete-dialog',
        template: __webpack_require__("../../../../../ClientApp/app/delete-dialog.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], DeleteDialogComponent);

var _a;
//# sourceMappingURL=delete-dialog.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/dishes/add-dish/add-dish.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dish-form {\r\n    width: 500px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.select-fix {\r\n    margin: 30px 0px 10px 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/dishes/add-dish/add-dish.component.html":
/***/ (function(module, exports) {

module.exports = "<md-spinner *ngIf=\"!categories\"></md-spinner>\r\n<form *ngIf=\"categories\" class=\"dish-form\">\r\n    <md-input-container class=\"full-width\">\r\n        <input mdInput placeholer=\"Name\" [(ngModel)]=\"dish.name\" maxlength=\"100\" name=\"name\" />\r\n        <md-hint align=\"end\">{{dish.name.length}} / 100</md-hint>\r\n    </md-input-container>\r\n    <md-input-container class=\"full-width\">\r\n        <textarea mdInput placeholer=\"Beschreibung\" [(ngModel)]=\"dish.description\" maxlength=\"250\" name=\"description\"></textarea>\r\n        <md-hint align=\"end\">{{dish.description.length}} / 250</md-hint>\r\n    </md-input-container>\r\n    <md-input-container class=\"full-width\">\r\n        <input type=\"number\" mdInput placeholer=\"Preis\" [(ngModel)]=\"dish.price\" name=\"price\" />\r\n        <md-hint align=\"start\"><strong>Hohe Preise ver�rgern die Kundschaft</strong></md-hint>\r\n    </md-input-container>\r\n    <md-select class=\"full-width select-fix\" placeholder=\"Kategorie\" [(ngModel)]=\"dish.categoryId\" name=\"categoryId\">\r\n        <md-option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</md-option>\r\n    </md-select>\r\n    <div>\r\n        <button md-button (click)=\"save()\">Speichern</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/dishes/add-dish/add-dish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vegi_service__ = __webpack_require__("../../../../../ClientApp/app/vegi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dish__ = __webpack_require__("../../../../../ClientApp/app/dishes/dish.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDishComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDishComponent = (function () {
    function AddDishComponent(vegiService, router) {
        this.vegiService = vegiService;
        this.router = router;
        this.dish = new __WEBPACK_IMPORTED_MODULE_3__dish__["a" /* Dish */]();
    }
    AddDishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vegiService.getCategories().then(function (categories) { return _this.categories = categories; });
    };
    AddDishComponent.prototype.save = function () {
        var _this = this;
        this.vegiService.saveDish(this.dish).then(function () { return _this.router.navigate(['/']); });
    };
    return AddDishComponent;
}());
AddDishComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-add-dish',
        template: __webpack_require__("../../../../../ClientApp/app/dishes/add-dish/add-dish.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/dishes/add-dish/add-dish.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__vegi_service__["a" /* VegiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vegi_service__["a" /* VegiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vegi_service__["a" /* VegiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddDishComponent);

var _a, _b;
//# sourceMappingURL=add-dish.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/dishes/dish-detail/dish-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dish-form {\r\n    width: 500px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.select-fix {\r\n    margin: 30px 0px 10px 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/dishes/dish-detail/dish-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<md-spinner *ngIf=\"!dish || !categories\"></md-spinner>\r\n<form *ngIf=\"dish && categories\" class=\"dish-form\">\r\n  <md-input-container class=\"full-width\">\r\n      <input mdInput placeholer=\"Name\" [(ngModel)]=\"dish.name\" maxlength=\"100\" name=\"name\"/>\r\n      <md-hint align=\"end\">{{dish.name.length}} / 100</md-hint>\r\n  </md-input-container>\r\n    <md-input-container class=\"full-width\">\r\n        <textarea mdInput placeholer=\"Beschreibung\" [(ngModel)]=\"dish.description\" maxlength=\"250\" name=\"description\"></textarea>\r\n        <md-hint align=\"end\">{{dish.description.length}} / 250</md-hint>\r\n    </md-input-container>\r\n    <md-input-container class=\"full-width\">\r\n        <input type=\"number\" mdInput placeholer=\"Preis\" [(ngModel)]=\"dish.price\"  name=\"price\" />\r\n        <md-hint align=\"start\"><strong>Hohe Preise ver�rgern die Kundschaft</strong></md-hint>\r\n    </md-input-container>\r\n    <md-select class=\"full-width select-fix\" placeholder=\"Kategorie\" [(ngModel)]=\"dish.categoryId\" name=\"categoryId\">\r\n        <md-option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</md-option>\r\n    </md-select>\r\n    <div>\r\n        <button md-button (click)=\"save()\">Speichern</button>\r\n        <button md-button (click)=\"delete()\">L�schen</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/dishes/dish-detail/dish-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vegi_service__ = __webpack_require__("../../../../../ClientApp/app/vegi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delete_dialog_component__ = __webpack_require__("../../../../../ClientApp/app/delete-dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DishDetailComponent = (function () {
    function DishDetailComponent(route, vegiService, router, dialog) {
        this.route = route;
        this.vegiService = vegiService;
        this.router = router;
        this.dialog = dialog;
    }
    DishDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vegiService.getCategories().then(function (categories) { return _this.categories = categories; });
        this.route.paramMap
            .switchMap(function (params) { return _this.vegiService.getDish(+params.get('id')); })
            .subscribe(function (dish) { return _this.dish = dish; });
    };
    DishDetailComponent.prototype.save = function () {
        var _this = this;
        this.vegiService.saveDish(this.dish).then(function () { return _this.router.navigate(['/']); });
    };
    DishDetailComponent.prototype.delete = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__delete_dialog_component__["a" /* DeleteDialogComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.vegiService.deleteDish(_this.dish.id).then(function () { return _this.router.navigate(['/']); });
            }
        });
    };
    return DishDetailComponent;
}());
DishDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-dish-detail',
        template: __webpack_require__("../../../../../ClientApp/app/dishes/dish-detail/dish-detail.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/dishes/dish-detail/dish-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__vegi_service__["a" /* VegiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__vegi_service__["a" /* VegiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__vegi_service__["a" /* VegiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _d || Object])
], DishDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dish-detail.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/dishes/dish.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dish; });
var Dish = (function () {
    function Dish() {
        this.name = "";
        this.description = "";
    }
    return Dish;
}());

//# sourceMappingURL=dish.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-button{\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientApp/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Speisekarte</h2>\r\n<md-spinner *ngIf=\"!categories\"></md-spinner>\r\n<md-list *ngIf=\"categories\">\r\n    <ng-container *ngFor=\"let category of categories\">\r\n        <h3 md-subheader>\r\n            {{category.name}} ({{category.description}})\r\n        </h3>\r\n        <md-list-item *ngFor=\"let dish of category.dishes\">\r\n            <h4 md-line (click)=\"goToDish(dish)\">{{dish.id}} - {{dish.name}}</h4>\r\n            <div md-line>\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex=\"90\">{{dish.description}}</div>\r\n                    <div fxFlex=\"10\">{{dish.price}}</div>\r\n                </div>\r\n            </div>\r\n        </md-list-item>\r\n        <md-divider></md-divider>\r\n    </ng-container>\r\n</md-list>\r\n<span class=\"add-button\">\r\n    <button md-fab (click)=\"addDish()\">\r\n        <md-icon>add</md-icon>\r\n    </button>\r\n</span>"

/***/ }),

/***/ "../../../../../ClientApp/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vegi_service__ = __webpack_require__("../../../../../ClientApp/app/vegi.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(vegiService, router) {
        this.vegiService = vegiService;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vegiService.getCategories().then(function (categories) { return _this.categories = categories; });
    };
    MenuComponent.prototype.goToDish = function (dish) {
        this.router.navigate(['/dish', dish.id]);
    };
    MenuComponent.prototype.addDish = function () {
        this.router.navigate(['/dish/add']);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'vegi-menu',
        template: __webpack_require__("../../../../../ClientApp/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../ClientApp/app/menu/menu.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__vegi_service__["a" /* VegiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__vegi_service__["a" /* VegiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__vegi_service__["a" /* VegiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../ClientApp/app/vegi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VegiService = (function () {
    function VegiService(http) {
        this.http = http;
    }
    VegiService.prototype.getCategories = function () {
        return this.http.get('api/categories')
            .toPromise()
            .then(function (r) { return r.json(); });
    };
    VegiService.prototype.getDish = function (id) {
        return this.http.get("api/dishes/" + id)
            .toPromise()
            .then(function (r) { return r.json(); });
    };
    VegiService.prototype.saveDish = function (dish) {
        if (dish.id) {
            return this.http.put("api/dishes/" + dish.id, dish)
                .toPromise()
                .then(function (r) { return r.json(); });
        }
        else {
            return this.http.post('api/dishes', dish)
                .toPromise()
                .then(function (r) { return r.json(); });
        }
    };
    VegiService.prototype.deleteDish = function (id) {
        return this.http.delete("api/dishes/" + id)
            .toPromise()
            .then(function () { return null; });
    };
    return VegiService;
}());
VegiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VegiService);

var _a;
//# sourceMappingURL=vegi.service.js.map

/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map