(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n        <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n                <a class=\"navbar-brand\" href=\"#\">Latcha News</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n                  <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"/news-detail\">Link :)</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\">Link ;)</a>\n                    </li>\n                  </ul>\n                  <mat-slide-toggle>Dark Mode!</mat-slide-toggle>\n                  <form class=\"form-inline mt-2 mt-md-0\">\n                    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n                    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n                  </form>\n                </div>\n              </nav>\n</mat-toolbar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-detail/news-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-detail/news-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"news$ | async\" class=\"container\">\n    <div class=\"content-container row row-top\">\n        <div class=\"news-item col-md-4 col-sm-12\" *ngFor=\"let item of (news$ | async)\">\n            <mat-card class=\"col-md-11 col-sm-12 card\">\n                <img [src]=\"item.enclosure.url\">\n                <!-- <div class=\"newsImage\" [style.background]=\"'url(/images/' + item.enclosure.url + ')'\"></div> -->\n                <mat-card-title>{{item.title}}</mat-card-title>\n                <mat-card-content>{{item.contentSnippet}}<span class=\"text-fade\"></span></mat-card-content>\n                <button mat-raised-button>Read More</button>\n            </mat-card>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news-detail/news-detail.component */ "./src/app/news/news-detail/news-detail.component.ts");





const routes = [
    { path: '', component: _news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] },
    { path: 'news-detail', component: _news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_4__["NewsDetailComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slide-toggle {\n  margin-right: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1tLzIwMTlfTWFzdGVyL1NhbmRib3gvcHdhTkVXUy9QV0FORVdTL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zbGlkZS10b2dnbGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4iLCIubWF0LXNsaWRlLXRvZ2dsZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'News-PWA';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _news_news_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.module */ "./src/app/news/news.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
            _news_news_module__WEBPACK_IMPORTED_MODULE_8__["NewsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ],
        providers: [],
        exports: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");



let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/news/news-detail/news-detail.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/news/news-detail/news-detail.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/news/news-detail/news-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/news/news-detail/news-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsDetailComponent = class NewsDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news-detail/news-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-detail.component.scss */ "./src/app/news/news-detail/news-detail.component.scss")).default]
    })
], NewsDetailComponent);



/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".news-item img {\n  width: 100%;\n}\n\n.card {\n  margin-left: auto;\n  margin-right: auto;\n  overflow-y: auto;\n  height: 500px;\n  max-height: 100%;\n  margin-bottom: 30px;\n}\n\n.mat-card-content {\n  max-height: 100px;\n  position: relative;\n  overflow: hidden;\n}\n\n.text-fade {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  margin: 0;\n  padding: 30px 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(white));\n  background-image: linear-gradient(to bottom, transparent, white);\n}\n\n.mat-raised-button {\n  margin-top: 20px;\n}\n\n.newsImage {\n  width: 100%;\n  height: 150px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.row-top {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1tLzIwMTlfTWFzdGVyL1NhbmRib3gvcHdhTkVXUy9QV0FORVdTL3NyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNGLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLGVBQUE7RUFDVCwrRkFBQTtFQUFBLGdFQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1pdGVtIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jYXJke1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogNTAwcHg7IC8vIEZpeGVkIGhlaWdodFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tYXQtY2FyZC1jb250ZW50e1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRleHQtZmFkZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBib3R0b206IDA7IFxuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIG1hcmdpbjogMDsgcGFkZGluZzogMzBweCAwOyBcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgd2hpdGUpO1xufVxuLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubmV3c0ltYWdle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbi5yb3ctdG9we1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59IiwiLm5ld3MtaXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZXh0LWZhZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHRyYW5zcGFyZW50LCB3aGl0ZSk7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5uZXdzSW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucm93LXRvcCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.service */ "./src/app/news/news.service.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/app/news/store/index.ts");






let NewsComponent = class NewsComponent {
    constructor(router, newsService, store) {
        this.router = router;
        this.newsService = newsService;
        this.store = store;
        this.news$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_5__["getAllNews"]);
    }
    ngOnInit() {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_5__["GetNews"]());
    }
};
NewsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")).default]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.service */ "./src/app/news/news.service.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./src/app/news/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news-detail/news-detail.component */ "./src/app/news/news-detail/news-detail.component.ts");












let NewsModule = class NewsModule {
};
NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"],
            _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_11__["NewsDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('news', _store__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature(_store__WEBPACK_IMPORTED_MODULE_5__["effects"]),
        ],
        providers: [_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]],
        exports: [
            _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"],
            _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_11__["NewsDetailComponent"]
        ],
    })
], NewsModule);



/***/ }),

/***/ "./src/app/news/news.service.ts":
/*!**************************************!*\
  !*** ./src/app/news/news.service.ts ***!
  \**************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
    }
    // Get all posts from the API
    getAllNews() {
        console.log('GET Templates ');
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].uri}/api/news`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json())));
    }
};
NewsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsService);



/***/ }),

/***/ "./src/app/news/store/actions/index.ts":
/*!*********************************************!*\
  !*** ./src/app/news/store/actions/index.ts ***!
  \*********************************************/
/*! exports provided: GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_ERROR, GetNews, GetNewsSuccess, GetNewsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _news_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.action */ "./src/app/news/store/actions/news.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS", function() { return _news_action__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS_SUCCESS", function() { return _news_action__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS_ERROR", function() { return _news_action__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNews", function() { return _news_action__WEBPACK_IMPORTED_MODULE_1__["GetNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewsSuccess", function() { return _news_action__WEBPACK_IMPORTED_MODULE_1__["GetNewsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewsError", function() { return _news_action__WEBPACK_IMPORTED_MODULE_1__["GetNewsError"]; });





/***/ }),

/***/ "./src/app/news/store/actions/news.action.ts":
/*!***************************************************!*\
  !*** ./src/app/news/store/actions/news.action.ts ***!
  \***************************************************/
/*! exports provided: GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_ERROR, GetNews, GetNewsSuccess, GetNewsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS", function() { return GET_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS_SUCCESS", function() { return GET_NEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS_ERROR", function() { return GET_NEWS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNews", function() { return GetNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewsSuccess", function() { return GetNewsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewsError", function() { return GetNewsError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Get News Items
const GET_NEWS = '[News Page] Get News';
const GET_NEWS_SUCCESS = '[News Page] News Loaded Success';
const GET_NEWS_ERROR = '[News Page] News Loaded Error';
//
class GetNews {
    constructor() {
        this.type = GET_NEWS;
    }
}
class GetNewsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_NEWS_SUCCESS;
    }
}
class GetNewsError {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_NEWS_ERROR;
    }
}


/***/ }),

/***/ "./src/app/news/store/effects/index.ts":
/*!*********************************************!*\
  !*** ./src/app/news/store/effects/index.ts ***!
  \*********************************************/
/*! exports provided: effects, NewsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _news_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.effects */ "./src/app/news/store/effects/news.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsEffects", function() { return _news_effects__WEBPACK_IMPORTED_MODULE_1__["NewsEffects"]; });



const effects = [_news_effects__WEBPACK_IMPORTED_MODULE_1__["NewsEffects"]];



/***/ }),

/***/ "./src/app/news/store/effects/news.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/news/store/effects/news.effects.ts ***!
  \****************************************************/
/*! exports provided: NewsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEffects", function() { return NewsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../news.service */ "./src/app/news/news.service.ts");
/* harmony import */ var _actions_news_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/news.action */ "./src/app/news/store/actions/news.action.ts");







let NewsEffects = class NewsEffects {
    constructor(actions$, newsService) {
        this.actions$ = actions$;
        this.newsService = newsService;
        this.getTemplates$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_news_action__WEBPACK_IMPORTED_MODULE_6__["GET_NEWS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.newsService.getAllNews().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(news => new _actions_news_action__WEBPACK_IMPORTED_MODULE_6__["GetNewsSuccess"](news)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_news_action__WEBPACK_IMPORTED_MODULE_6__["GetNewsError"](error))));
        }));
    }
};
NewsEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], NewsEffects.prototype, "getTemplates$", void 0);
NewsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NewsEffects);



/***/ }),

/***/ "./src/app/news/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/news/store/index.ts ***!
  \*************************************/
/*! exports provided: reducers, getNewsState, effects, GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_ERROR, GetNews, GetNewsSuccess, GetNewsError, NewsEffects, getNewsItemsState, getNewsEntities, getAllNews, getNewsLoaded, getNewsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/app/news/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getNewsState"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/news/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GET_NEWS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GET_NEWS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_NEWS_ERROR", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GET_NEWS_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNews", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetNewsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNewsError", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetNewsError"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects */ "./src/app/news/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_3__["NewsEffects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/app/news/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsItemsState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getNewsItemsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getNewsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllNews", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getAllNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getNewsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_4__["getNewsLoading"]; });








/***/ }),

/***/ "./src/app/news/store/reducers/index.ts":
/*!**********************************************!*\
  !*** ./src/app/news/store/reducers/index.ts ***!
  \**********************************************/
/*! exports provided: reducers, getNewsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsState", function() { return getNewsState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _news_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.reducer */ "./src/app/news/store/reducers/news.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



const reducers = {
    news: _news_reducer__WEBPACK_IMPORTED_MODULE_1__["newsReducer"]
};
const getNewsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('news');


/***/ }),

/***/ "./src/app/news/store/reducers/news.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/news/store/reducers/news.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialState, newsReducer, getNewsLoading, getNewsLoaded, getNewsEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsReducer", function() { return newsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsLoading", function() { return getNewsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsLoaded", function() { return getNewsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsEntities", function() { return getNewsEntities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_news_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/news.action */ "./src/app/news/store/actions/news.action.ts");


const initialState = {
    entities: {},
    loading: false,
    loaded: false,
};
function newsReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_news_action__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS"]: {
            return Object.assign({}, state, { loading: true });
        }
        case _actions_news_action__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS_SUCCESS"]: {
            const news = action.payload;
            const entities = news.reduce((entities, item) => {
                return Object.assign({}, entities, { [item.guid]: item });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { loading: false, loaded: true, entities });
        }
        case _actions_news_action__WEBPACK_IMPORTED_MODULE_1__["GET_NEWS_ERROR"]: {
            return Object.assign({}, state, { loading: false, loaded: false });
        }
        default:
            return state;
    }
}
const getNewsLoading = (state) => state.loading;
const getNewsLoaded = (state) => state.loaded;
const getNewsEntities = (state) => state.entities;


/***/ }),

/***/ "./src/app/news/store/selectors/index.ts":
/*!***********************************************!*\
  !*** ./src/app/news/store/selectors/index.ts ***!
  \***********************************************/
/*! exports provided: getNewsItemsState, getNewsEntities, getAllNews, getNewsLoaded, getNewsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _news_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.selectors */ "./src/app/news/store/selectors/news.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsItemsState", function() { return _news_selectors__WEBPACK_IMPORTED_MODULE_1__["getNewsItemsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsEntities", function() { return _news_selectors__WEBPACK_IMPORTED_MODULE_1__["getNewsEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllNews", function() { return _news_selectors__WEBPACK_IMPORTED_MODULE_1__["getAllNews"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsLoaded", function() { return _news_selectors__WEBPACK_IMPORTED_MODULE_1__["getNewsLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewsLoading", function() { return _news_selectors__WEBPACK_IMPORTED_MODULE_1__["getNewsLoading"]; });





/***/ }),

/***/ "./src/app/news/store/selectors/news.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/news/store/selectors/news.selectors.ts ***!
  \********************************************************/
/*! exports provided: getNewsItemsState, getNewsEntities, getAllNews, getNewsLoaded, getNewsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsItemsState", function() { return getNewsItemsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsEntities", function() { return getNewsEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllNews", function() { return getAllNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsLoaded", function() { return getNewsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewsLoading", function() { return getNewsLoading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/app/news/store/reducers/index.ts");
/* harmony import */ var _reducers_news_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/news.reducer */ "./src/app/news/store/reducers/news.reducer.ts");




const getNewsItemsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getNewsState"], (state) => state.news);
const getNewsEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getNewsItemsState, _reducers_news_reducer__WEBPACK_IMPORTED_MODULE_3__["getNewsEntities"]);
const getAllNews = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getNewsEntities, (entities) => {
    // tslint:disable-next-line:variable-name
    console.log("GET NEWS", entities);
    return Object.keys(entities).map(guid => entities[guid]);
});
const getNewsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getNewsItemsState, _reducers_news_reducer__WEBPACK_IMPORTED_MODULE_3__["getNewsLoaded"]);
const getNewsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getNewsItemsState, _reducers_news_reducer__WEBPACK_IMPORTED_MODULE_3__["getNewsLoading"]);


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
        ],
        exports: [
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    uri: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samm/2019_Master/Sandbox/pwaNEWS/PWANEWS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map