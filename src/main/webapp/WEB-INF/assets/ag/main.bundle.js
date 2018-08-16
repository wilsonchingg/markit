webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".markit-setting-item:hover, .markit-setting-item.active {\r\n\tbackground-color: #f6f8fa !important;\r\n}\r\n.markit-setting-collapse:hover {\r\n\tbackground-color: #f7f7f7 !important;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n\t<div class=\"col-xs-5 col-sm-5 col-md-4 mb-3\">\r\n\t\t<ul class=\"list-group nav nav-tabs\" role=\"tablist\">\r\n\t\t\t<li class=\"list-group-item pt-2 pb-2 bg-faded text-muted\">\r\n\t\t\t\tSettings\r\n\t\t\t</li>\r\n\t\t\t<li class=\"list-group-item p-0 nav-item\">\r\n\t\t\t\t<a data-toggle=\"tab\" href=\"#general\" role=\"tab\"\r\n\t\t\t\t\tclass=\"nav-link markit-no-underscore markit-setting-item w-100 px-3 py-2\">\r\n\t\t\t\t<i class=\"material-icons markit-valign\">\r\n\t\t\t\tsettings\r\n\t\t\t\t</i>\r\n\t\t\t\t<span class=\"markit-valign\">\r\n\t\t\t\tGeneral\r\n\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"list-group-item p-0 nav-item\">\r\n\t\t\t\t<a data-toggle=\"tab\" href=\"#security\" role=\"tab\"\r\n\t\t\t\t\tclass=\"nav-link markit-no-underscore markit-setting-item w-100 px-3 py-2\">\r\n\t\t\t\t<i class=\"material-icons markit-valign\">\r\n\t\t\t\tlock\r\n\t\t\t\t</i>\r\n\t\t\t\t<span class=\"markit-valign\">\r\n\t\t\t\tSecurity\r\n\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"col-xs-7 col-sm-7 col-md-8 mb-3\">\r\n\t   <div class=\"tab-content\">\r\n\t      <div class=\"tab-pane active\" id=\"general\" role=\"tabpanel\">\r\n\t         <div role=\"tablist\" aria-multiselectable=\"true\">\r\n\t            <app-user-setting [input]=\"emailInput\"></app-user-setting>\r\n\t            <app-user-setting [input]=\"firstNameInput\"></app-user-setting>\r\n\t            <app-user-setting [input]=\"lastNameInput\"></app-user-setting>\r\n\t         </div>\r\n\t      </div>\r\n\t      <div class=\"tab-pane\" id=\"security\" role=\"tabpanel\">\r\n\t         <div role=\"tablist\" aria-multiselectable=\"true\">\r\n\t            <app-user-setting type=\"password\" [input]=\"passwordInput\"></app-user-setting>\r\n\t         </div>\r\n\t      </div>\r\n\t   </div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    /**
     * Constructor
     * @param  {serverAPI} ServerAPI             - Server requests interface
     */
    function AccountComponent(serverAPI) {
        this.serverAPI = serverAPI;
        // Information for each user setting's input field
        // to be passed down to user-setting component
        this.emailInput = {
            label: 'Email',
            originalInput: '',
            inputName: 'email',
        };
        this.lastNameInput = {
            label: 'Last Name',
            originalInput: '',
            inputName: 'lastName',
        };
        this.firstNameInput = {
            label: 'First Name',
            originalInput: '',
            inputName: 'firstName',
        };
        this.passwordInput = {
            label: 'Password',
            originalInput: '',
            inputName: 'password',
        };
    }
    /**
     * Get the current user detail from sessionStorage
     */
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverAPI.getUser().then(function (response) {
            return response.json();
        })
            .then(function (data) {
            _this.emailInput.originalInput = data.email;
            _this.passwordInput.originalInput = '********';
            _this.firstNameInput.originalInput = data.firstName;
            _this.lastNameInput.originalInput = data.lastName;
        })
            .catch(function () { });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Account setting page
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__["a" /* ServerAPI */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/user-setting/user-setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".markit-setting-input {\r\n  max-width: 70%;\r\n}\r\n.user-setting{\r\n  margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/user-setting/user-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card user-setting\">\r\n   <div class=\"card-header tab-card p-0 bg-white markit-setting-collapse\" role=\"tab\">\r\n      <div class=\"py-2 px-3 markit-cursor\" >\r\n         <small>\r\n         <span>\r\n           <b>{{input.label}} &nbsp;&nbsp;&nbsp;&nbsp; </b>\r\n           <span class=\"text-muted\">{{ input.originalInput }}</span>\r\n         </span>\r\n         </small>\r\n      </div>\r\n   </div>\r\n   <div  role=\"tabpanel\">\r\n      <div class=\"card-block px-3 pt-2 pb-3\">\r\n         <form [formGroup]=\"validator\" (ngSubmit)=\"onSubmit()\">\r\n         <div>\r\n            <div class=\"form-group\">\r\n               <small>\r\n               <label attr.for={{input.inputName}} class=\"col-form-label\">New {{input.label}}</label>\r\n               </small>\r\n               <input class=\"form-control form-control-sm markit-setting-input\" type=\"{{type}}\" id={{input.inputName}}\r\n               name={{input.inputName}} formControlName=\"inputValidate\" [(ngModel)]=\"inputValue\">\r\n               <div *ngIf=\"errorMessage\"\r\n                  class=\"alert alert-danger\">\r\n                  {{errorMessage}}\r\n               </div>\r\n            </div>\r\n            <div class=\"mt-2\">\r\n               <button [disabled]=\"submitted\" type=\"submit\" class=\"btn btn-secondary btn-sm\">\r\n                 Update\r\n               </button>\r\n            </div>\r\n         </div>\r\n         </form>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/user-setting/user-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_formValidator__ = __webpack_require__("../../../../../src/util/formValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_validateMessage__ = __webpack_require__("../../../../../src/util/validateMessage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserSettingComponent = (function () {
    /**
     * Constructor
     * @param  {serverAPI} ServerAPI             - Server requests interface
     */
    function UserSettingComponent(serverAPI) {
        this.serverAPI = serverAPI;
        // Type of input
        this.type = 'text';
        this.errorMessage = null;
        // Is the form currently being submitted,
        // This prevent people from clicking the form more than once and registering two users
        this.submitted = false;
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
     * Obtain form validator from the utility directory based on information
     * the parent component has provided
     */
    UserSettingComponent.prototype.ngOnInit = function () {
        var formControls = {};
        formControls['inputValidate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.inputValue, __WEBPACK_IMPORTED_MODULE_2__util_formValidator__[this.input.inputName + 'Validator']);
        this.validator = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](formControls);
    };
    /**
     * Submit the user detail change to the server
     */
    UserSettingComponent.prototype.onSubmit = function () {
        var _this = this;
        //  Prevent submitting if error is found
        if (this.validator.get('inputValidate').errors) {
            this.errorMessage = Object(__WEBPACK_IMPORTED_MODULE_3__util_validateMessage__["a" /* getErrorMessage */])(this.validator.get('inputValidate'), this.input.inputName);
            return;
        }
        this.errorMessage = null;
        this.submitted = true;
        // Construct JSON payload for form submission
        var jsonPayload = {};
        jsonPayload[this.input.inputName] = this.inputValue;
        this.serverAPI.updateUser(jsonPayload).then(function (response) {
            _this.submitted = false;
            // Accepted
            if (response.status === 202) {
                // Hard refresh on the page
                location.reload();
            }
            else {
                response.json().then(function (data) {
                    _this.errorMessage = data.message;
                }).catch(function () { });
            }
        }).catch(function (error) {
            _this.submitted = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserSettingComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserSettingComponent.prototype, "type", void 0);
    UserSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-setting',
            template: __webpack_require__("../../../../../src/app/account/user-setting/user-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/user-setting/user-setting.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
        * Reusable component for modifying particular user detail,
        * such as first name
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_server_api_server_api_service__["a" /* ServerAPI */]])
    ], UserSettingComponent);
    return UserSettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_user_confirm_user_component__ = __webpack_require__("../../../../../src/app/confirm-user/confirm-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__markets_markets_component__ = __webpack_require__("../../../../../src/app/markets/markets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__historic_current_historic_current_component__ = __webpack_require__("../../../../../src/app/historic-current/historic-current.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_auth_authGuard__ = __webpack_require__("../../../../../src/service/auth/authGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_auth_authService__ = __webpack_require__("../../../../../src/service/auth/authService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'historicCurrent/:marketId', component: __WEBPACK_IMPORTED_MODULE_9__historic_current_historic_current_component__["a" /* HistoricCurrentComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__service_auth_authGuard__["a" /* AuthGuard */]] },
    { path: 'user/setting', component: __WEBPACK_IMPORTED_MODULE_6__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__service_auth_authGuard__["a" /* AuthGuard */]] },
    { path: 'confirmUser', component: __WEBPACK_IMPORTED_MODULE_5__confirm_user_confirm_user_component__["a" /* ConfirmUserComponent */] },
    { path: 'markets', component: __WEBPACK_IMPORTED_MODULE_7__markets_markets_component__["a" /* MarketComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__service_auth_authGuard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_auth_authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_10__service_auth_authGuard__["a" /* AuthGuard */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#markit-context {\r\n\tmin-height: 100%;\r\n\tmargin-bottom: -50px;\r\n\tmargin-top: -73px;\r\n}\r\n\r\n#markit-context::before {\r\n\tz-index: -1 !important;\r\n\tdisplay: block;\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tcontent: \"\";\r\n\theight: 73px;\r\n}\r\n\r\n#markit-context::after {\r\n\tz-index: -1 !important;\r\n\tdisplay: block;\r\n\tcontent: \"\";\r\n\theight: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header></app-header>\r\n<div class=\"container\" id=\"markit-context\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confirm_user_confirm_user_component__ = __webpack_require__("../../../../../src/app/confirm-user/confirm-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_user_setting_user_setting_component__ = __webpack_require__("../../../../../src/app/account/user-setting/user-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__graph_graph_component__ = __webpack_require__("../../../../../src/app/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__currency_preview_currency_preview_component__ = __webpack_require__("../../../../../src/app/currency-preview/currency-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__historic_current_historic_current_component__ = __webpack_require__("../../../../../src/app/historic-current/historic-current.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__markets_markets_component__ = __webpack_require__("../../../../../src/app/markets/markets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_auth_authService__ = __webpack_require__("../../../../../src/service/auth/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_server_api_data_stream_service__ = __webpack_require__("../../../../../src/service/server-api/data-stream.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__market_datatable_market_datatable_component__ = __webpack_require__("../../../../../src/app/market-datatable/market-datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__rss_renderer_rss_renderer_component__ = __webpack_require__("../../../../../src/app/rss-renderer/rss-renderer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__confirm_user_confirm_user_component__["a" /* ConfirmUserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_13__account_user_setting_user_setting_component__["a" /* UserSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__graph_graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_16__currency_preview_currency_preview_component__["a" /* CurrencyPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__historic_current_historic_current_component__["a" /* HistoricCurrentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__markets_markets_component__["a" /* MarketComponent */],
                __WEBPACK_IMPORTED_MODULE_23__market_datatable_market_datatable_component__["a" /* MarketDatatableComponent */],
                __WEBPACK_IMPORTED_MODULE_24__rss_renderer_rss_renderer_component__["a" /* RssRendererComponent */],
                __WEBPACK_IMPORTED_MODULE_22__dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__service_auth_authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__service_server_api_server_api_service__["a" /* ServerAPI */], __WEBPACK_IMPORTED_MODULE_21__service_server_api_data_stream_service__["a" /* DataStreamService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/confirm-user/confirm-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/confirm-user/confirm-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n\t<div class=\"col-xs-10 col-md-8 mx-auto\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-block pl-1 pr-1\">\r\n\t\t\t\t<div class=\"row mt-4 mx-auto\">\r\n\t\t\t\t\t<div class=\"mx-auto\">\r\n\t\t\t\t\t\t<img src=\"../markit/assets/img/success-icon.png\" width=\"120px\" height=\"120px\"\r\n\t\t\t\t\t\t\t alt=\"You have Successfully Registered\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row mt-4\">\r\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-12\">\r\n\t\t\t\t\t\t<div class=\"d-flex justify-content-center\">\r\n\t\t\t\t\t\t\t<p class=\"h3\">You have successfully registered</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row mt-4\">\r\n\t\t\t\t\t<div class=\"col-xs-10 col-sm-10 mx-auto\">\r\n\t\t\t\t\t\t<div class=\"float-left\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/\">Home</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"float-right\t\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/login\">Sign In</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/confirm-user/confirm-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmUserComponent = (function () {
    /**
     * Constructor
     */
    function ConfirmUserComponent() {
    }
    /**
     * ngOnInit
     */
    ConfirmUserComponent.prototype.ngOnInit = function () {
    };
    ConfirmUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-user',
            template: __webpack_require__("../../../../../src/app/confirm-user/confirm-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/confirm-user/confirm-user.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Register confirmation page
         */
        ,
        __metadata("design:paramtypes", [])
    ], ConfirmUserComponent);
    return ConfirmUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/currency-preview/currency-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Currency Preview */\r\n.currency-preview-container{\r\n    background-color: white;\r\n    padding: 2px;\r\n    max-height: 180px;\r\n    max-width: 400px;\r\n    margin-bottom: 20px;\r\n}\r\n.currency-preview-info{\r\n    width: 50%;\r\n}\r\n.btn{\r\n    width: 95px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n.chart{\r\n    height: 170px;\r\n}\r\n\r\n@media(max-width:767px) {\r\n    .currency-preview-container {\r\n        max-width: 330px;\r\n    }\r\n    .chart {\r\n        max-width: 175px;\r\n    }\r\n    .currency-preview-info{\r\n        max-width: 167px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/currency-preview/currency-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" card currency-preview-container\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-sm-6 chart\">\r\n      <app-graph [widget]=\"true\" [inheritLineChartOptions]=\"lineChartOptions\"\r\n      [intrinioId]=\"intrinioId\"\r\n      [onDataAvailable]=\"onDataAvailable\"></app-graph>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-6 currency-preview-info\">\r\n      <h5 class=\"currency-preview-name\">{{label}}</h5>\r\n      <p class=\"currency-preview-percentage {{change > 0.00005 ? 'text-success': ''}} {{change < -0.00005 ? 'text-danger': ''}}\">\r\n        {{change > 0 ? '+': ''}}{{change === 0? '-':change.toFixed(4)}}\r\n      </p>\r\n      <a [routerLink]=\"infoUrl\" class=\"btn btn-primary currency-preview-btn\">Info</a>\r\n      <div class=\"mt-1\" *ngIf=\"removable !== 'false'\">\r\n        <button class=\"btn btn-secondary markit-cursor\" id=\"removeFavourite\" (click)=\"callback(favouriteID)\">Remove</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/currency-preview/currency-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_server_api_data_stream_service__ = __webpack_require__("../../../../../src/service/server-api/data-stream.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyPreviewComponent = (function () {
    /**
     * Constructor
     *  @param  {dataStream} DataStreamService - A service containing a ReplayObject
     *                                          of Tahoo current data
     */
    function CurrencyPreviewComponent(dataStream) {
        this.dataStream = dataStream;
        this.removable = 'false';
        this.intrinioId = '';
        this.label = '';
        // Navigate url of the 'Info' button
        this.infoUrl = '/';
        // If currency preview has the delete option, the remove button will use the favourite id;
        this.favouriteID = -1;
        this.change = 0;
        // The currencyPreview component has a smaller space to draw the chart, so the radius of dataset
        // point should be set as 0 and y-axis gridding should be hidden
        this.lineChartOptions = {
            responsive: true,
            elements: { point: { radius: 0 } },
            scales: { xAxes: [{ display: false }] },
        };
        this.onDataAvailable = this.onDataAvailable.bind(this);
        this.updateCurrentMarketInfo = this.updateCurrentMarketInfo.bind(this);
    }
    /**
     * Unsubscribe from the data stream listener
     */
    CurrencyPreviewComponent.prototype.ngOnDestroy = function () {
        if (this.dataStreamSubscription) {
            this.dataStreamSubscription.unsubscribe();
        }
    };
    /**
     * Subscribe to current market data stream
     */
    CurrencyPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStreamSubscription = this.dataStream.currentList.subscribe(function (value) {
            _this.updateCurrentMarketInfo(value);
        });
    };
    /**
     * From the list of current market's data (Yahoo API),
     * find the price of the market of interest
     * @param  {any} currentData - an object containing current
     *  market information (Yahoo finance API)
     */
    CurrencyPreviewComponent.prototype.updateCurrentMarketInfo = function (currentData) {
        for (var i = 0; i < currentData.count; i += 1) {
            if (this.label.includes(currentData.resources[i].symbol.replace('=X', ''))
                && currentData.resources[i].symbol !== 'USD=X') {
                this.currentPrice = currentData.resources[i].price || 0;
                if (this.currentPrice && this.closingPrice) {
                    this.change = this.currentPrice - this.closingPrice;
                }
                i = currentData.count;
            }
        }
    };
    /**
     * Callback function when historic data has been fetched from the graph component
     * @param  {string[]} data - an array of string representing each data point in the graph
     */
    CurrencyPreviewComponent.prototype.onDataAvailable = function (data) {
        this.closingPrice = Number(data[data.length - 1]) || 0;
        if (this.currentPrice && this.closingPrice) {
            this.change = this.currentPrice - this.closingPrice;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CurrencyPreviewComponent.prototype, "removable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], CurrencyPreviewComponent.prototype, "callback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CurrencyPreviewComponent.prototype, "intrinioId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CurrencyPreviewComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CurrencyPreviewComponent.prototype, "infoUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CurrencyPreviewComponent.prototype, "favouriteID", void 0);
    CurrencyPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-currency-preview',
            template: __webpack_require__("../../../../../src/app/currency-preview/currency-preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/currency-preview/currency-preview.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Card component containing historic daily market graph
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_server_api_data_stream_service__["a" /* DataStreamService */]])
    ], CurrencyPreviewComponent);
    return CurrencyPreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".currency{\r\n    padding-bottom: 10px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.currencies #row_1{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.no_favorites{\r\n    width: 60%;\r\n    height: 50px;\r\n    margin: auto;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    alignment: center;\r\n    position: relative;\r\n    color: white;\r\n    background-color: steelblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-block px-3\">\r\n  <div *ngIf=\"marketTable.userFavouritesList.length == 0\">\r\n    <div class=\"card no_favorites\">There are no Favourites added to your dashboard</div>\r\n  </div>\r\n  <div *ngIf=\"marketTable.userFavouritesList.length > 0\" id=\"currency\" class=\"row currencies\">\r\n    <div class=\"col-lg-4 col-md-6 currency\" *ngFor=\"let favourite of marketTable.userFavouritesList; let i = index\">\r\n\r\n      <app-currency-preview  [label]=\"favourite.market.name\" [callback]=\"removeFromDashboardList\"\r\n      [intrinioId]=\"'$D' + favourite.market.symbol\"\r\n      [infoUrl]=\"'/historicCurrent/' + favourite.market.symbol\"\r\n      [favouriteID]=\"favourite.id\" removable=\"true\"></app-currency-preview>\r\n    </div>\r\n  </div>\r\n  <app-market-datatable #marketTable class='markit-datatable-nofilter' [customFilter] = \"filter\"></app-market-datatable>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_datatable_market_datatable_component__ = __webpack_require__("../../../../../src/app/market-datatable/market-datatable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    /**
     * Constructor
     * @param  {serverAPI} ServerAPI             - Server requests interface
     */
    function DashboardComponent(serverAPI) {
        this.serverAPI = serverAPI;
        this.filter = this.filter.bind(this);
        this.removeFromDashboardList = this.removeFromDashboardList.bind(this);
    }
    /**
     * ngOnInit
     */
    DashboardComponent.prototype.ngOnInit = function () {
    };
    /**
     * Perform filtering based on user's favourite
     * @param  {any} market    - A market object which has an id from the database,
     *                         -  with the format of {market: {id: number, ...}...}
     * @return {Boolean}       - if true, a market record will be shown on the datatable, otherwise,
     *                         - it will not be shown
     */
    DashboardComponent.prototype.filter = function (market) {
        if (!market) {
            return false;
        }
        return this.marketTable.userFavouritesList.reduce(function (accumulator, currentValue) {
            return accumulator || market.market.id === currentValue.market.id;
        }, false);
    };
    /**
     * Remove a user favourite from the page and also from the database
     * @param  {number} id - id of the favourite
     */
    DashboardComponent.prototype.removeFromDashboardList = function (id) {
        var _this = this;
        this.serverAPI.deleteUserFavourite(id).then(function (response) {
            if (response.status === 202) {
                // Remove the favourite that had been deleted
                _this.marketTable.userFavouritesList = _this.marketTable.userFavouritesList.filter(function (v) {
                    return v.id !== Number(id);
                });
                _this.marketTable.refresh();
            }
        }).catch(function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('marketTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__market_datatable_market_datatable_component__["a" /* MarketDatatableComponent */])
    ], DashboardComponent.prototype, "marketTable", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Customized user dashboard based on currency markets a user has favourited
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__["a" /* ServerAPI */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n\tbackground-color: #21518F;\r\n\theight: 50px;\r\n}\r\nfooter * {\r\n\tcolor: rgba(255,255,255,0.5);\r\n}\r\n#market-footer {\r\n\tbackground-color: #21518F !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"market-footer\">\r\n\t<footer class=\"container page-footer\">\r\n\t\t<div class=\"pt-2 pl-3\">\r\n\t\t\t<span>Copyright <script>\r\n\t\t\t\tdocument.write(new Date().getFullYear())\r\n\t\t\t</script> MarkIt\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    /**
     * Constructor
     */
    function FooterComponent() {
    }
    /**
     * ngOnInit
     */
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Footer of the page
         */
        ,
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widget\">\r\n  <canvas baseChart height=\"110%\" width=\"100%\"\r\n            [datasets]=\"dataset\"\r\n            [labels]=\"labels\"\r\n            [options]=\"lineChartOptions\"\r\n            [colors]=\"lineChartColors\"\r\n            [legend]=\"lineChartLegend\"\r\n            chartType=\"line\"></canvas>\r\n</div>\r\n<div *ngIf=\"!widget\">\r\n  <canvas baseChart height=\"100%\"\r\n          [datasets]=\"dataset\"\r\n          [labels]=\"labels\"\r\n          [options]=\"lineChartOptions\"\r\n          [colors]=\"lineChartColors\"\r\n          [legend]=\"lineChartLegend\"\r\n          chartType=\"line\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphComponent = (function () {
    /**
     * Constructor
     * @param  {serverAPI} ServerAPI    - Server requests interface
     */
    function GraphComponent(serverAPI) {
        this.serverAPI = serverAPI;
        this.intrinioId = '';
        this.labels = [];
        this.dataset = [{ data: [], fill: false, borderWidth: 2 }];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            }
        ];
        this.lineChartLegend = false;
    }
    /**
     * Fetch the historic data (Intrinio API) and put the data in a graph
     */
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineChartOptions = Object.assign(this.lineChartOptions, this.inheritLineChartOptions);
        // For example, if the symbol of intrinio api is $EXUSEU,
        // the data returned will be from Euro to US dollar,
        // In this case, we need to do an inverse to each data point
        // to make sure it is always US dollar to other currency
        var isInverse = this.intrinioId.substr(-2) !== 'US';
        if (!this.intrinioId) {
            return;
        }
        this.serverAPI.fetchHistoricData(this.intrinioId).then(function (data) {
            var _dataList = [];
            var _labelList = [];
            for (var i = 0; i < data.page_size; i += 1) {
                if (data.data[i]['value']) {
                    _dataList.push(isInverse ? (1 / data.data[i]['value']).toPrecision(5)
                        : data.data[i]['value']);
                    _labelList.push(data.data[i]['date']);
                }
            }
            // The ng2-charts doesn't subscribe for changes on the label list, so the x axis
            // has to be updated via BaseChartDirective
            _this.chart.chart.config.data.labels = _labelList;
            _this.dataset = [{ data: _dataList }];
            // Check if parent components have registered a callback when the chart data is available
            if (_this.onDataAvailable) {
                _this.onDataAvailable(_dataList);
            }
        })
            .catch(function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng2_charts_ng2_charts__["BaseChartDirective"])
    ], GraphComponent.prototype, "chart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "intrinioId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "inheritLineChartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], GraphComponent.prototype, "onDataAvailable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "widget", void 0);
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__("../../../../../src/app/graph/graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/graph/graph.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Generic graph component
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__["a" /* ServerAPI */]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#markit-header{\r\n\tbackground-color: #21518F !important;\r\n}\r\n.markit-header {\r\n\tbackground-color: #21518F !important;\r\n\tz-index: 1 !important;\r\n}\r\n\r\n.markit-header .navbar-toggler {\r\n\theight: 56px;\r\n\tmargin-top: 8.5px;\r\n\tborder-width: 2px;\r\n}\r\n\r\n.markit-header .navbar-toggler:not(.nonMember):hover {\r\n\tbackground-color: #5F8AC1 !important;\r\n}\r\n\r\n.markit-header .nav-item:not(.nonMember):hover {\r\n\tbackground-color: #5F8AC1 !important;\r\n}\r\n\r\n.markit-logo-text {\r\n\tpadding: 5px 0;\r\n\theight: 65px;\r\n\twidth: 160px;\r\n}\r\n\r\n.markit-logo {\r\n\tpadding: 5px 0;\r\n\theight: 65px;\r\n\twidth: 65px;\r\n}\r\n\r\n.navbar-toggle {\r\n\tmargin-top: 16.5px;\r\n\tmargin-right: 16.5px;\r\n}\r\n\r\n.navbar-nav>li>a {\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n\tline-height: 65px;\r\n\tfont-size: 18px;\r\n}\r\n\r\n@media ( max-width : 767px) {\r\n\t.navbar-nav {\r\n\t\tleft: 0;\r\n\t}\r\n\t.navbar-nav>li>a {\r\n\t\tline-height: 20px;\r\n\t\tpadding-top: 10px;\r\n\t\tpadding-bottom: 10px;\r\n\t}\r\n}\r\n\r\n@media ( max-width : 767px) {\r\n\t.navbar-nav {\r\n\t\tleft: 0;\r\n\t}\r\n\t.navbar-nav>li>a {\r\n\t\tline-height: 20px;\r\n\t\tpadding-top: 10px;\r\n\t\tpadding-bottom: 10px;\r\n\t}\r\n}\r\n\r\n@media ( max-width : 400px) {\r\n\t.markit-logo-text {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n.button-wrapper{\r\n\theight: inherit;\r\n\tmargin-top: 13.4px;\r\n\r\n}\r\n\r\n#registerBtn{\r\n\twidth: 110px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"markit-header\">\r\n\t<nav class=\"container navbar navbar-toggleable-md markit-header\r\n\t navbar-inverse pt-0 pb-0\" >\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<button class=\"navbar-toggler navbar-toggler-right markit-cursor\" type=\"button\"\r\n\t\t\t\tdata-toggle=\"collapse\" data-target=\"#markit-navbar-toggle\"\r\n\t\t\t\taria-controls=\"markit-navbar-toggle\" aria-expanded=\"false\"\r\n\t\t\t\taria-label=\"Toggle navigation\">\r\n\t\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\r\n\t\t  <img\r\n\t\t\t\tsrc=\"/markit/assets/img/logo_text_white.svg\" class=\"markit-logo-text\">\r\n\t\t\t\t<img src=\"/markit/assets/img/logo.svg\" class=\"markit-logo\">\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t  <div class=\"navbar-collapse collapse\" id=\"markit-navbar-toggle\" *ngIf=\"!isLoggedIn()\">\r\n\t\t\t<ul class=\"navbar-nav ml-auto\">\r\n\t\t\t\t<li class=\"nav-item\"><a routerLink=\"/\" class=\"nav-link markit-cursor\">Home</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a routerLink=\"/markets\" class=\"nav-link markit-cursor\">Markets</a></li>\r\n\t\t\t\t<li class=\"nav-item nonMember\">\r\n\t\t\t\t\t<div class=\"button-wrapper\">\r\n\t\t\t\t\t\t<a id=\"loginBtn\" routerLink=\"/login\" class=\"btn btn-primary ml-1 mr-2 nav-link markit-cursor\">Login</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item nonMember\">\r\n\t\t\t\t\t<div class=\"button-wrapper\">\r\n\t\t\t\t\t\t<a id=\"registerBtn\" routerLink=\"/register\" class=\"btn btn-primary nav-link markit-cursor\">Register</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t  </div>\r\n\t  <div class=\"navbar-collapse collapse\" id=\"markit-navbar-toggle\" *ngIf=\"isLoggedIn()\">\r\n\t\t\t<ul class=\"navbar-nav ml-auto\">\r\n\t\t\t\t<li class=\"nav-item\"><a routerLink=\"/\" class=\"nav-link markit-cursor\">Home</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a routerLink=\"/markets\" class=\"nav-link markit-cursor\">Markets</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link markit-cursor\" routerLink=\"/dashboard\">Dashboard</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a routerLink=\"/user/setting\" class=\"nav-link markit-cursor\">User Settings</a></li>\r\n\t\t\t\t<li class=\"nav-item\"><a (click)=\"logout()\" class=\"nav-link markit-cursor\">Logout</a></li>\r\n\t\t\t</ul>\r\n\t  </div>\r\n\t</nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_authService__ = __webpack_require__("../../../../../src/service/auth/authService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    /**
     * Constructor
     * @param  {AuthService} authService   - Authentication provider
     * @param  {Router}      router        - Angular router
     */
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
   * ngOnInit
   */
    HeaderComponent.prototype.ngOnInit = function () {
        this.logout = this.logout.bind(this);
        this.isLoggedIn = this.isLoggedIn.bind(this);
    };
    /**
     * Get the login status of a user
     * @return {boolean} whether a user is logged in
     */
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn;
    };
    /**
   * Logout action when the user clicks on the logout button
   */
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Header Component
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_auth_authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/historic-current/historic-current.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#currency-summary #currency-detail *{\r\n  font-size: 17px;\r\n}\r\n/* Historic / Current page*/\r\n.historic-current-container{\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n.historic-card-header{\r\n    background-color: #21518F;\r\n    color: white;\r\n}\r\n.tab, .tab:hover{\r\n    color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/historic-current/historic-current.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"historic-current-container\">\r\n   <!--Chart container-->\r\n   <div id=\"currency-summary\">\r\n      <div class=\"row graph-header\">\r\n         <div class=\"col mx-3 my-2 card p-0\" id=\"currency-detail\">\r\n\r\n            <div class=\"card-header historic-card-header\">{{name}}</div>\r\n            <div class=\"card-block\">\r\n               <p>Exchange Market: {{exchange}}</p>\r\n               <p>Current Value: {{currentValue}}</p>\r\n            </div>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"row graph-body\">\r\n         <div class=\"card p-0 col text-center\" id=\"graph-container\">\r\n         <div class=\"card-header historic-card-header\">\r\n            <ul class=\"nav nav-tabs card-header-tabs\">\r\n               <li class=\"nav-item\">\r\n                  <a data-toggle=\"tab\" role=\"tab\" class=\"nav-link tab active\" href=\"#daily-content\">Daily</a>\r\n               </li>\r\n               <li class=\"nav-item\">\r\n                  <a data-toggle=\"tab\" role=\"tab\" class=\"nav-link tab\" href=\"#monthly-content\">Monthly</a>\r\n               </li>\r\n               <li class=\"nav-item\">\r\n                  <a data-toggle=\"tab\" role=\"tab\" class=\"nav-link tab\" href=\"#annual-content\">Annual</a>\r\n               </li>\r\n            </ul>\r\n         </div>\r\n         <div class=\"card-block\">\r\n            <div class=\"tab-content\">\r\n               <div id=\"daily-content\" class=\"tab-pane active\" role=\"tabpanel\">\r\n                  <app-graph [widget]=\"false\" [intrinioId]=\"dailyHistoric\"></app-graph>\r\n               </div>\r\n               <div id=\"monthly-content\" class=\"tab-pane\" role=\"tabpanel\">\r\n                  <app-graph [widget]=\"false\" [intrinioId]=\"monthlyHistoric\"></app-graph>\r\n               </div>\r\n               <div id=\"annual-content\" class=\"tab-pane\" role=\"tabpanel\">\r\n                  <app-graph [widget]=\"false\" [intrinioId]=\"annualHistoric\"></app-graph>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/historic-current/historic-current.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricCurrentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_server_api_data_stream_service__ = __webpack_require__("../../../../../src/service/server-api/data-stream.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricCurrentComponent = (function () {
    /**
   * Constructor
   * @param  {ActivatedRoute}  route           - Angular Router
   * @param  {serverAPI} ServerAPI             - Server requests interface
   * @param  {dataStream} DataStreamService    - A service containing a
   *                                             ReplayObject of Tahoo current data
   */
    function HistoricCurrentComponent(route, serverAPI, dataStream) {
        this.route = route;
        this.serverAPI = serverAPI;
        this.dataStream = dataStream;
        this.dailyHistoric = '';
        this.monthlyHistoric = '';
        this.annualHistoric = '';
        this.updateCurrentMarketInfo = this.updateCurrentMarketInfo.bind(this);
        this.updateMarketData = this.updateMarketData.bind(this);
    }
    /**
   * Subscribe to the router listener and get the market symbol
   * to enable fetching of historic data
   */
    HistoricCurrentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['marketId']) {
                _this.symbol = params['marketId'];
                _this.dailyHistoric = '$D' + params['marketId'];
                _this.monthlyHistoric = '$' + params['marketId'];
                _this.annualHistoric = '$A' + params['marketId'];
                _this.serverAPI.fetchMarketsData().then(function (data) {
                    _this.updateMarketData(data);
                    _this.dataStreamSubscription = _this.dataStream.currentList.subscribe(function (value) {
                        _this.updateCurrentMarketInfo(value);
                    });
                });
            }
        });
    };
    /**
   * Unsubscribe from the router listener and data stream listener
   */
    HistoricCurrentComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        if (this.dataStreamSubscription) {
            this.dataStreamSubscription.unsubscribe();
        }
    };
    /**
  * From the list of current market's data (Yahoo API),
  * find the associated information
  * @param  {any} currentData - an object containing current market information (Yahoo API)
  */
    HistoricCurrentComponent.prototype.updateCurrentMarketInfo = function (currentData) {
        for (var i = 0; i < currentData.count; i += 1) {
            if (currentData.resources[i].symbol.indexOf(this.currencyCode) >= 0) {
                this.currentValue = currentData.resources[i].price;
                i = currentData.count;
            }
        }
    };
    /**
  * From the list of market information (fetched from the database),
  * find the information associated to this component
  * @param  {any[]} marketData - list of market information
  */
    HistoricCurrentComponent.prototype.updateMarketData = function (marketData) {
        for (var i = 0; i < marketData.length; i += 1) {
            if (marketData[i].market.symbol === this.symbol && marketData[i].currency.code !== 'USD') {
                this.currencyCode = marketData[i].currency.code;
                this.name = marketData[i].currency.name;
                this.exchange = marketData[i].market.exchange.exchange;
            }
        }
    };
    HistoricCurrentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-historic-current',
            template: __webpack_require__("../../../../../src/app/historic-current/historic-current.component.html"),
            styles: [__webpack_require__("../../../../../src/app/historic-current/historic-current.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Historic page of a specific market, such as USD:GBP
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__service_server_api_server_api_service__["a" /* ServerAPI */],
            __WEBPACK_IMPORTED_MODULE_2__service_server_api_data_stream_service__["a" /* DataStreamService */]])
    ], HistoricCurrentComponent);
    return HistoricCurrentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* Home page*/\r\n\r\n.jumbotron-fluid{\r\n    background-image: url(\"/markit/assets/img/Tower-Bridge.jpg\");\r\n    background-size: cover;\r\n    background-position: center bottom;\r\n    width: 100vw;\r\n    height: 30%;\r\n    position: relative;\r\n    left: 50%;\r\n    right: 50%;\r\n    margin-left: -50vw;\r\n    margin-right: -50vw;\r\n}\r\n\r\nimg[src*=\"Tower-Bridge\"]{\r\n    max-width: 100%;\r\n    bottom: 0;\r\n    opacity: 0.8;\r\n    horiz-align: center;\r\n    position: absolute;\r\n}\r\n.carousel{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.carousel-item{\r\n    padding: 10px;\r\n    color: white;\r\n}\r\n.carousel-indicators {\r\n    position: absolute;\r\n    bottom: 5px;\r\n}\r\n.carousel-inner{\r\n    -webkit-transform: translateX(10%);\r\n            transform: translateX(10%);\r\n}\r\n\r\n.homepage-card-header{\r\n    background-color: #21518F !important;\r\n    color: white;\r\n}\r\n\r\n/* Home page currency container*/\r\n.currencies{\r\n    height: 25%;\r\n    padding: 0;\r\n    margin:0;\r\n}\r\n.currency{\r\n    background-color: white;\r\n    height: 90%;\r\n}\r\n\r\n/* Home page Graph container*/\r\n.graph-container{\r\n    height: 520px;\r\n    width: 100%;\r\n}\r\n#home-graph-card-div{\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    padding: 10px;\r\n}\r\n.graph-insert{\r\n    height : 100%;\r\n}\r\n.mainChartContainer{\r\n    margin-top: 30px;\r\n}\r\n#chart-demo {\r\n    height: 450px;\r\n    width: 100%;\r\n}\r\n\r\n#zoomedChart {\r\n    height: 315px;\r\n    margin: 0 0 15px;\r\n}\r\n\r\n#chart-demo > div:not(#zoomedChart) {\r\n    height: 120px;\r\n}\r\n\r\n/* Home page news container*/\r\n.newsContainer{\r\n    height: 700px;\r\n    margin-bottom:30px;\r\n}\r\n.newsContainer > card{\r\n    width:90%;\r\n}\r\n.widget-main{\r\n    text-align:left;\r\n    overflow-y:auto;\r\n    overflow-x:hidden;\r\n    width:100%;\r\n    height: 600px;\r\n    font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif;\r\n}\r\n.rss-widget{\r\n    height:300px;\r\n}\r\n#rss-output{\r\n    font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.latestNews{\r\n    height: 700px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n\r\n  <div id=\"jumbotron-carousel\" class=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#jumbotron-carousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#jumbotron-carousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#jumbotron-carousel\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n\r\n    <!-- The slide show -->\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <ul>\r\n          <li class=\"carousel-item-title\"><h1>Mark Your Currencies</h1></li>\r\n          <li class=\"carousel-item-text\"><p>Save frequently used currencies to you dashboard for easy access.</p></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ul>\r\n          <li class=\"carousel-item-title\"><h1>View Currencies In Detail</h1></li>\r\n          <li class=\"carousel-item-text\"><p>Inspect the historical and current data of a currency.</p></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <ul>\r\n          <li class=\"carousel-item-title\"><h1>Convert And Compare</h1></li>\r\n          <li class=\"carousel-item-text\">\r\n            <p>Select, compare and calculate exchange rates of currencies from around the globe.</p>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Left and right controls-->\r\n    <a class=\"carousel-control-prev\" href=\"#jumbotron-carousel\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#jumbotron-carousel\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"home-container\">\r\n\r\n  <!--Common Currencies-->\r\n  <div class=\"row currencies mb-3\">\r\n    <div class=\"col-lg-4 col-md-6 currency-1\">\r\n      <app-currency-preview intrinioId=\"$DEXUSEU\"\r\n      infoUrl='/historicCurrent/EXUSEU' label=\"USD/EUR\" removable=\"false\">\r\n     </app-currency-preview>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6 currency-2\">\r\n      <app-currency-preview intrinioId=\"$DEXUSUK\"\r\n      infoUrl='/historicCurrent/EXUSUK' label=\"USD/GBP\" removable=\"false\"></app-currency-preview>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-6 currency-3\">\r\n      <app-currency-preview intrinioId=\"$DEXJPUS\"\r\n      infoUrl='/historicCurrent/EXJPUS' label=\"USD/JPY\" removable=\"false\"></app-currency-preview>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row newsContainer mt-3\">\r\n    <div class=\"col-sm-7 latestNews\">\r\n        <app-rss-renderer height=\"600\"></app-rss-renderer>\r\n    </div>\r\n\r\n    <div class=\"col-sm-5 twitterContainer\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header homepage-card-header\">\r\n          <h5>Twitter</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"widget-main\">\r\n            <div class=\"rss-widget\">\r\n              <iframe src=\"http://us1.rssfeedwidget.com/getrss.php?time=1510678283221&amp;\r\n                                    x=https%3A%2F%2Ftwitrss.me%2Ftwitter_user_to_rss%2F%3Fuser%3Dft&amp;w=200&amp;\r\n                                    h=500&amp;bc=333333&amp;bw=1&amp;bgc=transparent&amp;m=20&amp;it=false&amp;\r\n                                    t=(default)&amp;tc=333333&amp;ts=15&amp;tb=transparent&amp;il=false&amp;\r\n                                    lc=0000FF&amp;ls=14&amp;lb=false&amp;id=true&amp;dc=333333&amp;ds=14&amp;\r\n                                    idt=true&amp;dtc=284F2D&amp;dts=12\" border=\"0\" hspace=\"0\" vspace=\"0\"\r\n                      frameborder=\"no\" marginwidth=\"0\" marginheight=\"0\" style=\"border:0;\r\n                                            padding:0; margin:0; width:100%; height:600px;\r\n                                            font-family: 'DejaVu Sans', Arial, Helvetica, sans-serif;\"\r\n                      id=\"rss-output twitter\">\r\n                Reading RSS Feed ...</iframe>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    /**
   * Constructor
   */
    function HomepageComponent() {
    }
    /**
   * ngOnInit
   */
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Home page
         */
        ,
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n\t<div class=\"col-xs-10 col-md-8 mx-auto\">\r\n\t\t<form (ngSubmit)=\"onSubmit()\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"d-flex justify-content-center\">\r\n\t\t\t\t\t\t\t\t<p class=\"h3\">Sign in to MarkIt</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"validationMessage\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t\t\t{{validationMessage}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"mt-1 col-xs-10 col-md-10 mx-auto\">\r\n\t\t\t\t\t\t\t\t<label for=\"markit-username\">Username</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group w-100\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"markit-username\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"username\" class=\"form-control\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mt-1\">\r\n\t\t\t\t\t\t<div class=\"mt-1 col-xs-10 col-md-10 mx-auto\">\r\n\t\t\t\t\t\t\t\t<label for=\"markit-password\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group w-100\">\r\n\t\t\t\t\t\t\t\t<input name=\"password\" type=\"password\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"password\" id=\"markit-password\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t\t<div class=\"col-xs-10 col-md-10 mx-auto\">\r\n\t\t\t\t\t\t\t<button [disabled]=\"submitted\" type=\"submit\" class=\"btn btn-primary\">Sign In</button>\r\n\t\t\t\t\t\t\t<div class=\"mt-2\">\r\n\t\t\t\t\t\t\t<div id=\"fb-root\">\r\n\t\t\t\t\t\t\t\t<div class=\"fb-login-button\" data-max-rows=\"1\"\r\n\t\t\t\t\t\t\t\t\t\tdata-size=\"large\" data-button-type=\"continue_with\"\r\n\t\t\t\t\t\t\t\t\t\tdata-show-faces=\"false\" data-auto-logout-link=\"false\"\r\n\t\t\t\t\t\t\t\t\t\tdata-use-continue-as=\"false\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mt-2\">\r\n\t\t\t\t\t\t<div class=\"col-xs-10 col-md-10 mx-auto\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<span>Don't have an account?&nbsp;&nbsp;</span><a\r\n\t\t\t\t\t\t\t\t\t\t\trouterLink=\"/register\">Register now</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_authService__ = __webpack_require__("../../../../../src/service/auth/authService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    /**
    * Constructor
    * @param  {AuthService} authService - Authentication provider
    * @param  {serverAPI}   ServerAPI   - Server requests interface
    * @param  {Router}      router      - Angular router
    */
    function LoginComponent(authService, serverAPI, router) {
        this.authService = authService;
        this.serverAPI = serverAPI;
        this.router = router;
        // Is the form currently being submitted,
        // This prevent people from clicking the form more than once and registering two users
        this.submitted = false;
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
    * ngOnInit
    */
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**
    * submit the login form
    */
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // Prevent submitting if the form is not filled in
        if (!this.username || !this.password) {
            this.validationMessage = 'Please fill in the form';
        }
        else {
            this.validationMessage = null;
            // Prevent user from spanning the submit button by temporarily disable login button until
            // response is returned
            this.submitted = true;
            this.serverAPI.login({ email: this.username, password: this.password }).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    _this.submitted = false;
                    response.json().then(function (result) {
                        _this.authService.login();
                        sessionStorage.setItem('jwt', result.message);
                        _this.router.navigateByUrl('/markets');
                    });
                }
                else {
                    _this.submitted = false;
                    _this.validationMessage = 'Incorrect username or password';
                }
            }).catch(function (error) {
                _this.submitted = false;
                _this.validationMessage = 'Unexpected error occurred, please try again later';
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
        * Login page
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_auth_authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__service_server_api_server_api_service__["a" /* ServerAPI */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/market-datatable/market-datatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".markit-datatable table{\r\n  width: 100% !important;\r\n}\r\n\r\n.markit-datatable thead{\r\n  background-color: steelblue;\r\n  color: white;\r\n}\r\n\r\n#currency-converter .card-block{\r\n  background-color: lightblue;\r\n}\r\n\r\n.markit-datatable-nofilter .dataTables_filter {\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 992px){\r\n  .hide-1{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 491px){\r\n  .hide-2{\r\n    display: none;\r\n  }\r\n}\r\n.star:hover{\r\n  background: url(\"/markit/assets/img/star_highlight.png\");\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n.dashboard_star{\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-datatable/market-datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"currency-converter\" class=\"card\">\r\n    <div class=\"card-block\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" name=\"sel1\" [(ngModel)]=\"cur1\">\r\n                            <option ngValue=\"USD\">\r\n                                US Dollar (USD)\r\n                            </option>\r\n                            <option *ngFor=\"let current of currentMarket;let i = index\" [ngValue]=\"current.symbol\">\r\n                                {{current.name}}\r\n                            </option>\r\n                        </select>\r\n                        <input type=\"number\" name=\"inputCurrency\" [(ngModel)]=\"inputCurrency\"\r\n                               class=\"form-control\" id=\"inputLabel\">\r\n                        <label for=\"inputLabel\">1 USD = {{getPrice(cur1)}} {{cur1}}</label>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"col-sm\">\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" name=\"sel2\" [(ngModel)]=\"cur2\">\r\n                            <option ngValue=\"USD\">\r\n                                US Dollar (USD)\r\n                            </option>\r\n                            <option *ngFor=\"let current of currentMarket;let i = index\" [ngValue]=\"current.symbol\">\r\n                                {{current.name}}\r\n                            </option>\r\n                        </select>\r\n                        <input type=\"number\" class=\"form-control\" disabled=\"true\" id=\"outputLabel\"\r\n                               value=\"{{(inputCurrency*getPrice(cur2)/getPrice(cur1)).toFixed(2)}}\">\r\n                        <label for=\"outputLabel\">1 USD = {{getPrice(cur2)}} {{cur2}}</label>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"markit-datatable\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr>\r\n            <th>Currency</th>\r\n            <th>Value</th>\r\n            <th class=\"hide-2\">Change</th>\r\n            <th class=\"hide-1\">Last Updated</th>\r\n            <th class=\"hide-1\">From Now</th>\r\n            <th></th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let current of currentMarket;let i = index\">\r\n            <td><a [routerLink]=\"current.url\">{{current.name}}</a></td>\r\n            <td>{{current.price_num.toFixed(2)}}</td>\r\n\r\n            <td class=\"hide-2\" [ngClass]=\"current.customClass\">\r\n               {{current.change > 0? '+': ''}}{{!current.change? '-': current.change.toFixed(4) + '%'}}\r\n            </td>\r\n\r\n            <td class=\"hide-1\">{{current.time}}</td>\r\n            <td class=\"hide-1\">{{current.fromNow}}</td>\r\n            <td class=\"star\">\r\n                <img *ngIf=\"current.imageSource == '/markit/assets/img/star.png'\" class=\"dashboard_star\" alt=\"not_favourite\"\r\n                     src=\"{{current.imageSource}}\"\r\n                     onmouseover=\"this.src='/markit/assets/img/star_highlight.png';\"\r\n                     onmouseout=\"this.src='/markit/assets/img/star.png';\"\r\n                     (click)=\"addFavourite(current.id.toString())\"/>\r\n\r\n                <img *ngIf=\"current.imageSource == '/markit/assets/img/star_highlight.png'\" class=\"dashboard_star\" alt=\"favourite\"\r\n                     src=\"{{current.imageSource}}\"\r\n                     onmouseover=\"this.src='/markit/assets/img/star.png';\"\r\n                     onmouseout=\"this.src='/markit/assets/img/star_highlight.png';\"\r\n                     (click)=\"removeFavourite(current.favouriteId.toString())\"/>\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/market-datatable/market-datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketDatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_config__ = __webpack_require__("../../../../../src/util/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_server_api_data_stream_service__ = __webpack_require__("../../../../../src/service/server-api/data-stream.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MarketDatatableComponent = (function () {
    /**
     * Constructor
     * @param  {serverAPI} ServerAPI          - Server requests interface
     * @param  {dataStream} DataStreamService - A service containing a ReplayObject
     *                                          of Tahoo current data
     */
    function MarketDatatableComponent(serverAPI, dataStream) {
        this.serverAPI = serverAPI;
        this.dataStream = dataStream;
        this.searchText = null;
        // If additional datatable filtering is needed
        this.customFilter = function () { return true; };
        // List of currencies to be fetched to the datatable
        this.currentMarket = [];
        // List of shortlisted currencies along with their details
        // (we don't want to show all 200+ currencies on the page)
        this.marketList = [];
        // Datatable settings
        this.dtOptions = {};
        // Used to trigger the datatable's initialization
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.isDatatableInitialized = false;
        // List containing all the favourites for the current user
        this.userFavouritesList = [];
        this.processDataTable = this.processDataTable.bind(this);
        this.filterDataTable = this.filterDataTable.bind(this);
        this.removeFavourite = this.removeFavourite.bind(this);
        this.addFavourite = this.addFavourite.bind(this);
        this.persistUserFavourite = this.persistUserFavourite.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    /**
     * Perform fetching and initialize datatable
     */
    MarketDatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = Object(__WEBPACK_IMPORTED_MODULE_2__util_config__["a" /* dtOptions */])({});
        Promise.all([this.serverAPI.fetchMarketsData(), this.serverAPI.getUserFavourites()])
            .then(function (data) {
            _this.marketList = data[0];
            _this.userFavouritesList = data[1];
            _this.dataStreamSubscription = _this.dataStream.currentList.subscribe(function (value) {
                _this.processDataTable(value);
            });
        });
    };
    /**
     * Re-apply datatable filtering and refresh user favourites where applicable
     */
    MarketDatatableComponent.prototype.refresh = function () {
        this.currentMarket = this.persistUserFavourite(this.filterDataTable(this.currentMarket));
    };
    /**
     * If a custom search bar is used, this method will redraw the DataTables
     * when input of the search bar is changed
     */
    MarketDatatableComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Do a manual search if these is a text changes on the custom search bar
        if (this.searchText != null && this.currentMarket.length) {
            this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.search(_this.searchText).draw();
            });
        }
    };
    /**
     * Unsubscribe from the data feed
     */
    MarketDatatableComponent.prototype.ngOnDestroy = function () {
        if (this.dataStreamSubscription) {
            this.dataStreamSubscription.unsubscribe();
        }
    };
    /**
     * Favourite a currency market
     * @param  {[type]} id - market id
     */
    MarketDatatableComponent.prototype.addFavourite = function (id) {
        var _this = this;
        this.serverAPI.newUserFavourite(id).then(function (response) {
            if (response.status === 202) {
                // Need the obtain a new list favourite
                _this.serverAPI.getUserFavourites().then(function (data) {
                    _this.userFavouritesList = data;
                    _this.refresh();
                });
            }
        }).catch(function () { });
    };
    /**
     * Remove a user favourite
     * @param  {[type]} id - favourite id
     */
    MarketDatatableComponent.prototype.removeFavourite = function (id) {
        var _this = this;
        this.serverAPI.deleteUserFavourite(id).then(function (response) {
            if (response.status === 202) {
                // Remove the favourite that had been deleted
                _this.userFavouritesList = _this.userFavouritesList.filter(function (v) {
                    return v.id !== Number(id);
                });
                _this.refresh();
            }
        }).catch(function () { });
    };
    /**
     * Get the exchange rate of a currency given the symbol of the currency
     * @param  {string} id - id of the currency
     * @return {number}    - The price of the currency, or
     *                       1 if currency is USD
     */
    MarketDatatableComponent.prototype.getPrice = function (symbol) {
        if (symbol === 'USD') {
            return 1;
        }
        for (var i = 0; i < this.currentMarket.length; i += 1) {
            if (this.currentMarket[i].symbol === symbol) {
                return this.currentMarket[i].price_num;
            }
        }
        return; // unreachable
    };
    /**
     * Given current currency data obtained from Yahoo API, convert it to more readable format
     * and filter the data based on market data obtained from the database
     * @param  {any[]} currentData   - data from the Yahoo API
     * @return {any[]}                - an array of filtered and converted currency array
     */
    MarketDatatableComponent.prototype.processDataTable = function (currentData) {
        if (!currentData.count) {
            return;
        }
        var _currentMarket = [];
        for (var i = 0; i < currentData.count; i += 1) {
            var _date = new Date(currentData.resources[i].utctime);
            var _obj = {
                id: -1,
                name: '',
                symbol: currentData.resources[i].symbol.replace('=X', ''),
                price_num: currentData.resources[i].price,
                time: __WEBPACK_IMPORTED_MODULE_4_moment__(currentData.resources[i].utctime).format('YYYY/MM/DD HH:mm:ss'),
                url: '',
                date: _date,
                fromNow: __WEBPACK_IMPORTED_MODULE_4_moment__(currentData.resources[i].utctime).fromNow(),
                change: currentData.resources[i].changePercent,
                customClass: '',
                imageSource: '/markit/assets/img/star.png',
                favouriteId: '',
            };
            if (currentData.resources[i].changePercent > 0) {
                _obj.customClass = 'text-success';
            }
            if (currentData.resources[i].changePercent < 0) {
                _obj.customClass = 'text-danger';
            }
            _currentMarket.push(_obj);
        }
        this.currentMarket = this.persistUserFavourite(this.filterDataTable(_currentMarket));
        if (!this.isDatatableInitialized) {
            this.dtTrigger.next();
            this.isDatatableInitialized = true;
        }
    };
    /**
     * Filter the list of currency markets (from Yahoo API) based
     * on information from the database, and add details to those filtered
     * markets
     * @param  {any[]} currentData - an array of currency
     * @return {any[]}              - - an array of filtered and converted currency array
     */
    MarketDatatableComponent.prototype.filterDataTable = function (currentData) {
        var returnList = [];
        for (var i = 0; i < currentData.length; i += 1) {
            for (var j = 0; j < this.marketList.length; j += 1) {
                if (this.marketList[j].currency.code === currentData[i].symbol &&
                    this.customFilter(this.marketList[j]) &&
                    this.marketList[j].currency.code !== 'USD') {
                    currentData[i].id = this.marketList[j].market.id;
                    currentData[i].name = this.marketList[j].currency.name +
                        ' (' + currentData[i].symbol + ')';
                    currentData[i].url = '/historicCurrent/' + this.marketList[j].market.symbol;
                    returnList.push(currentData[i]);
                    j = this.marketList.length;
                }
            }
        }
        return returnList.sort(function (a, b) {
            return a.name > b.name ? 1 : -1;
        });
    };
    /**
     * Set the user favouite status of a processed and filtered
     * current market list
     * @param  {any[]} currentData - a list of processed and filtered current market data
     * @return {any[]}             - a current market list that had the user favourite status set
     */
    MarketDatatableComponent.prototype.persistUserFavourite = function (currentData) {
        for (var i = 0; i < currentData.length; i += 1) {
            var isFavourite = false;
            for (var k = 0; k < this.userFavouritesList.length; k += 1) {
                if (currentData[i].id === this.userFavouritesList[k].market.id) {
                    currentData[i].favouriteId = this.userFavouritesList[k].id;
                    isFavourite = true;
                    currentData[i].imageSource = '/markit/assets/img/star_highlight.png';
                    k = this.userFavouritesList.length;
                }
            }
            if (!isFavourite) {
                currentData[i].imageSource = '/markit/assets/img/star.png';
            }
        }
        return currentData;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTableDirective */])
    ], MarketDatatableComponent.prototype, "datatableElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MarketDatatableComponent.prototype, "searchText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], MarketDatatableComponent.prototype, "customFilter", void 0);
    MarketDatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-market-datatable',
            template: __webpack_require__("../../../../../src/app/market-datatable/market-datatable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-datatable/market-datatable.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Datatables for the list of currencies
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_server_api_server_api_service__["a" /* ServerAPI */], __WEBPACK_IMPORTED_MODULE_6__service_server_api_data_stream_service__["a" /* DataStreamService */]])
    ], MarketDatatableComponent);
    return MarketDatatableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/markets/markets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/markets/markets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto\">\r\n   <header id=\"search-markets\">\r\n      <div class=\"card my-3\">\r\n         <div class=\"card-block px-3\">\r\n            <div class=\"row\">\r\n               <div class=\"col-xs-12 col-md-3\">\r\n                  <div class=\"mx-auto\" style=\"width: 200px;\">\r\n                     <h4>Markets</h4>\r\n                  </div>\r\n               </div>\r\n               <div class=\"col-xs-12 col-md-9\">\r\n                  <div class=\"input-group\">\r\n                     <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" [(ngModel)]=\"searchText\">\r\n                     <span class=\"input-group-btn\">\r\n                     <button class=\"btn mt-0 btn-secondary\" type=\"button\">Go!</button>\r\n                     </span>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </header>\r\n   <section id=\"main-markets\">\r\n      <div class=\"card my-3\">\r\n         <div class=\"card-block px-3\">\r\n            <div class=\"row\">\r\n               <div class=\"col-sm-12 col-md-8\">\r\n                 <app-market-datatable [ngClass]=\"customClass\" [searchText]=\"searchText\"></app-market-datatable>\r\n               </div>\r\n               <div id=\"rss-news-feed\" class=\"col-sm-12 col-md-4\">\r\n                  <div class=\"table-responsive-sm\">\r\n                     <app-rss-renderer></app-rss-renderer>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/markets/markets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarketComponent = (function () {
    /**
   * Constructor
   */
    function MarketComponent() {
        this.searchText = '';
        this.customClass = 'markit-datatable-nofilter';
    }
    /**
   * ngOnInit
   */
    MarketComponent.prototype.ngOnInit = function () {
    };
    MarketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-markets',
            template: __webpack_require__("../../../../../src/app/markets/markets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/markets/markets.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * A page which lists all market data, as well as financial RSS feeds
         */
        ,
        __metadata("design:paramtypes", [])
    ], MarketComponent);
    return MarketComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto mt-2\">\r\n   <form [formGroup]=\"registerFormValidator\" (ngSubmit)=\"onSubmit()\">\r\n     <div class=\"row\">\r\n        <div class=\"col-xs-10 col-md-8 mx-auto\">\r\n           <div class=\"card\">\r\n              <div class=\"card-block\">\r\n                 <h4 class=\"text-center\">Register With markIT</h4>\r\n                 <div class=\"row\">\r\n                    <div class=\"col-md-10 mx-auto\">\r\n                       <div class=\"form-group\">\r\n                          <div *ngIf=\"errorMessage\"\r\n                             class=\"alert alert-danger\">\r\n                             {{errorMessage}}\r\n                          </div>\r\n                       </div>\r\n                       <div class=\"form-group\">\r\n                          <label for=\"inputEmail\">Email</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"inputEmail\"\r\n                          name=\"email\" [(ngModel)]=\"registerForm.email\" formControlName=\"email\">\r\n                       </div>\r\n                       <div class=\"form-group\">\r\n                          <label for=\"inputPassword\">Password</label>\r\n                          <input type=\"password\" class=\"form-control\" id=\"inputPassword\"\r\n                          name=\"password\" [(ngModel)]=\"registerForm.password\" formControlName=\"password\">\r\n                       </div>\r\n                       <div class=\"form-group\">\r\n                          <label for=\"inputFirstName\">First Name</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"firstName\"\r\n                          id=\"inputFirstName\" [(ngModel)]=\"registerForm.firstName\" name=\"firstName\" required>\r\n                       </div>\r\n                       <div class=\"form-group\">\r\n                          <label for=\"inputLastName\">Last Name</label>\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\"\r\n                          id=\"inputLastName\" [(ngModel)]=\"registerForm.lastName\" name=\"lastName\" required>\r\n                       </div>\r\n                       <div class=\"form-group\">\r\n                          <button [disabled]=\"submitted\" type=\"submit\"\r\n                             class=\"btn btn-primary mr-3\">Register</button>\r\n                          <a routerLink=\"/login\">Back to login</a>\r\n                       </div>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n   </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_formValidator__ = __webpack_require__("../../../../../src/util/formValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_validateMessage__ = __webpack_require__("../../../../../src/util/validateMessage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    /**
   * Constructor
   * @param  {Router}      router      - Angular Router
   * @param  {serverAPI}   ServerAPI   - Server requests interface
   */
    function RegisterComponent(router, serverAPI) {
        this.router = router;
        this.serverAPI = serverAPI;
        // Input data from the html
        this.registerForm = { firstName: '', lastName: '', email: '', password: '' };
        // Is the form currently being submitted,
        // This prevent people from clicking the form more than once and registering two users
        this.submitted = false;
        this.errorMessage = null;
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
   * Initialize class parameters
   */
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerFormValidator = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.registerForm.firstName, __WEBPACK_IMPORTED_MODULE_3__util_formValidator__["firstNameValidator"]),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.registerForm.lastName, __WEBPACK_IMPORTED_MODULE_3__util_formValidator__["lastNameValidator"]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.registerForm.email, __WEBPACK_IMPORTED_MODULE_3__util_formValidator__["emailValidator"]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](this.registerForm.password, __WEBPACK_IMPORTED_MODULE_3__util_formValidator__["passwordValidator"]),
        });
    };
    /**
   * Validate input in the register form
   * @return {string} Error message if error is found, or null if no error is found
   */
    RegisterComponent.prototype.validate = function () {
        var _message = null;
        var keys = Object.keys(this.registerForm);
        for (var i = 0; i < keys.length; i += 1) {
            var _validator = this.registerFormValidator.get(keys[i]);
            // If_message is null and there is an error in the current validator,
            // set _message
            _message = _message || Object(__WEBPACK_IMPORTED_MODULE_4__util_validateMessage__["a" /* getErrorMessage */])(_validator, keys[i]);
        }
        return _message;
    };
    /**
   * Submit the register form to the server
   */
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // Prevent submitting if error is found
        this.errorMessage = this.validate();
        if (this.errorMessage) {
            this.submitted = false;
            return;
        }
        var status;
        this.serverAPI.register(this.registerForm).then(function (data) {
            // Prevent user from spanning the submit button by temporarily disable login button until
            // response is returned
            _this.submitted = false;
            status = data.status;
            if (status === 202) {
                _this.errorMessage = null;
                _this.router.navigateByUrl('/confirmUser');
            }
            else {
                data.json().then(function (data) {
                    _this.errorMessage = data.message;
                }).catch(function () { });
            }
        }).catch(function (error) {
            _this.submitted = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * Register Page
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__service_server_api_server_api_service__["a" /* ServerAPI */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rss-renderer/rss-renderer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rss-card-header {\r\n  background-color: #21518F !important;\r\n  color: white;\r\n}\r\n\r\n.rss-container {\r\n  overflow-y: scroll;\r\n  overflow-x:hidden;\r\n}\r\n\r\n.rss-container img{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rss-renderer/rss-renderer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header rss-card-header\">\r\n    <h5>Latest News</h5>\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <div class=\"rss-container\" [ngStyle]=\"getContainerStyle()\">\r\n      <div *ngFor=\"let rss of rssList;let i = index\" >\r\n        <small>\r\n          <div>\r\n            <div>{{rss.createdDate.toUTCString()}}</div>\r\n            <div class=\"my-1\"><a target=\"_blank\" href=\"{{rss.link}}\">{{rss.title}} <i>{{rss.creator}}</i></a></div>\r\n            <div [innerHTML]=\"rss.description\"></div>\r\n          </div>\r\n        </small>\r\n        <hr />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/rss-renderer/rss-renderer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssRendererComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RssRendererComponent = (function () {
    /**
   * Constructor
   * @param  {serverAPI}   ServerAPI   - Server requests interface
   */
    function RssRendererComponent(serverAPI) {
        this.serverAPI = serverAPI;
        // Height of the component
        this.height = 1500;
        // List of RSS feeds
        this.rssList = [];
        this.fetchRSS = this.fetchRSS.bind(this);
    }
    /**
   * Inject dynamically generated css into the component
   */
    RssRendererComponent.prototype.getContainerStyle = function () {
        return { height: this.height + 'px' };
    };
    /**
   * Fetch RSS from the endpoint
   */
    RssRendererComponent.prototype.fetchRSS = function () {
        var _this = this;
        this.serverAPI.getRSSFeed().then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(function (result) {
                    var _rssList = [];
                    for (var i = 0; i < result.length; i += 1) {
                        result[i].createdDate = new Date(result[i].createdDate);
                        _rssList.push(result[i]);
                    }
                    _this.rssList = _rssList;
                }).catch(function () { });
            }
        }).catch(function () { });
    };
    /**
   * ngOnInit
   */
    RssRendererComponent.prototype.ngOnInit = function () {
        this.fetchRSS();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RssRendererComponent.prototype, "height", void 0);
    RssRendererComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rss-renderer',
            template: __webpack_require__("../../../../../src/app/rss-renderer/rss-renderer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rss-renderer/rss-renderer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        })
        /**
         * RSS View Component
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_server_api_server_api_service__["a" /* ServerAPI */]])
    ], RssRendererComponent);
    return RssRendererComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/service/auth/authGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authService__ = __webpack_require__("../../../../../src/service/auth/authService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    /**
     * Constructor
     * @param  {AuthService} authService   - Authentication provider
     * @param  {Router}      router        - Angular router
     */
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Prevent the user from visiting pages that are protected by login function
     * @param  {ActivatedRouteSnapshot} route - router
     * @param  {RouterStateSnapshot}    state - current state of the web page
     * @return {Promise<boolean>}             - whether the user is logged in
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.validateJWT().then(function (isAuthenticated) {
                if (isAuthenticated) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['/login']);
                    resolve(false);
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/service/auth/authService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_api_server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    /**
     * When the service is initialized, check if the user is logged in
     * @param  {serverAPI} ServerAPI  - Server requests interface
     */
    function AuthService(serverAPI) {
        this.serverAPI = serverAPI;
        this.isLoggedIn = false;
        this.validateJWT = this.validateJWT.bind(this);
        Promise.resolve(this.validateJWT());
    }
    /**
     * Check if the jwt token in storage (if existed) is valid
     * @return {Promise<boolean>}  - true if the jwt is valid, otherwise false
     */
    AuthService.prototype.validateJWT = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!sessionStorage.getItem('jwt')) {
                resolve(false);
            }
            else {
                _this.serverAPI.validateJWT(sessionStorage.getItem('jwt')).then(function (response) {
                    if (response.status === 200) {
                        _this.isLoggedIn = true;
                        resolve(true);
                    }
                    else {
                        sessionStorage.removeItem('jwt');
                        _this.isLoggedIn = false;
                        resolve(false);
                    }
                });
            }
        });
    };
    /**
     * Set the isLoggedIn state to true
     */
    AuthService.prototype.login = function () {
        this.isLoggedIn = true;
    };
    /**
     * Remove jwt token
     */
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        sessionStorage.removeItem('jwt');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_api_server_api_service__["a" /* ServerAPI */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/service/server-api/data-stream.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStreamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_api_service__ = __webpack_require__("../../../../../src/service/server-api/server-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Make server requests regularly and allow other components to access the data
 * it obtained
 */
var DataStreamService = (function () {
    /**
     * Constructor
     * @param  {serverAPI} ServerAPI  - Server requests interface
     */
    function DataStreamService(serverAPI) {
        var _this = this;
        this.serverAPI = serverAPI;
        this.currentList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.fetch = this.fetch.bind(this);
        this.fetch();
        setInterval(function () {
            _this.fetch();
        }, 10000);
    }
    /**
     * Fetch the Yahoo finance API data from our server
     */
    DataStreamService.prototype.fetch = function () {
        var _this = this;
        this.serverAPI.fetchCurrentData()
            .then(function (data) {
            if (data.count) {
                _this.currentList.next(data);
            }
        });
    };
    DataStreamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_api_service__["a" /* ServerAPI */]])
    ], DataStreamService);
    return DataStreamService;
}());



/***/ }),

/***/ "../../../../../src/service/server-api/server-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerAPI = (function () {
    /**
     * Constructor
     */
    function ServerAPI() {
        this.oauthAPI = '/markit/api/oauth';
        this.currencyAPI = '/markit/api/market/data/current';
        this.historicDataAPI = '/markit/api/market/data/historic/';
        this.marketAPI = '/markit/api/market/currencies';
        this.userAPI = '/markit/api/user';
        this.userFavouriteListAPI = '/markit/api/user/favourites';
        this.userFavouriteAPI = '/markit/api/favourite';
        this.userLoginAPI = '/markit/api/user/login';
        this.rssAPI = '/markit/api/rss';
    }
    /**
     * Check if the user is authenticated
     * @param  {string} token  - jwt token
     * @return {Promise<any>}  - a server response
     */
    ServerAPI.prototype.validateJWT = function (token) {
        return fetch(this.oauthAPI, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
    };
    /**
     * Fetch the historic market data from the server
     * @return {Promise<any>}    -historic market data
     */
    ServerAPI.prototype.fetchHistoricData = function (intrinioId) {
        return fetch(this.historicDataAPI + intrinioId, {
            method: 'GET',
        })
            .then(function (response) {
            return response.json();
        });
    };
    /**
     * Fetch the current market data from the server
     * @return {Promise<any>}    -current market data
     */
    ServerAPI.prototype.fetchCurrentData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            fetch(_this.currencyAPI, {
                method: 'GET',
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                resolve(data);
            })
                .catch(function () { resolve([]); });
        });
    };
    /**
     * Fetch all currency market's information from the server
     * @return {Promise<any[]>}     - a list of currency market's information
     */
    ServerAPI.prototype.fetchMarketsData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            fetch(_this.marketAPI, {
                method: 'GET',
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                resolve(data);
            })
                .catch(function () { resolve([]); });
        });
    };
    /**
     * Update the user detail of a logged-in user
     * @return {Promise<any>}     - a 202 status response if update is
     *                            - successful, an error message otherwise
     */
    ServerAPI.prototype.updateUser = function (jsonPayload) {
        return fetch(this.userAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
            },
            body: JSON.stringify(jsonPayload),
        });
    };
    /**
     * Get the user detail of a logged-in user
     * @return {Promise<any>}     - user information, or 401 status reponse if jwt token is invalid
     */
    ServerAPI.prototype.getUser = function () {
        return fetch(this.userAPI, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
            },
        });
    };
    /**
     * Get a list of user favourites (currency markets) of a logged-in user
     * @return {Promise<any>}    - a list of user favourites, or 401
     *                           -  status reponse if jwt token is invalid
     */
    ServerAPI.prototype.getUserFavourites = function () {
        var _this = this;
        return new Promise(function (resolve) {
            fetch(_this.userFavouriteListAPI, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
                },
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                resolve(data);
            })
                .catch(function () { resolve([]); });
        });
    };
    /**
     * Remove a user favourite (currency markets) from a logged-in user
     * @param  {number} id       - favourite id
     * @return {Promise<any>}    - a 202 status response if delete is successfully,
     *                           -  a 401 status reponse otherwise
     */
    ServerAPI.prototype.deleteUserFavourite = function (id) {
        return fetch(this.userFavouriteAPI + '/' + id, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
            },
        });
    };
    /**
     * Favourite a currency market
     * @param  {number} id       - market id
     * @return {Promise<any>}    - a 202 status response if delete is successfully,
     *                           -  a 401 status reponse otherwise
     */
    ServerAPI.prototype.newUserFavourite = function (id) {
        return fetch(this.userFavouriteAPI + '/' + id, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('jwt'),
            },
        });
    };
    /**
     * Attempt to login a user
     * @param  {any} jsonPayload - login credentials
     * @return {Promise<any}     - a jwt token if user is successfully logged in, or an error message
     */
    ServerAPI.prototype.login = function (jsonPayload) {
        return fetch(this.userLoginAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonPayload),
        });
    };
    /**
     * Attempt to register a user
     * @param  {any} jsonPayload - register detail
     * @return {Promise<any}     - a 202 response if a user has
     *                           - successfully registered, or an error message otherwise
     */
    ServerAPI.prototype.register = function (jsonPayload) {
        return fetch(this.userAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonPayload),
        });
    };
    /**
     * Obtain a list of rss feeds
     * @return {Promise<any}     - a list of rss feed
     */
    ServerAPI.prototype.getRSSFeed = function () {
        return fetch(this.rssAPI, {
            method: 'GET',
        });
    };
    ServerAPI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ServerAPI);
    return ServerAPI;
}());



/***/ }),

/***/ "../../../../../src/util/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dtOptions; });
// Combine default datatable config with custom datatable config
var dtOptions = function (overrideConfig) {
    var _dtOptions = {
        pagingType: 'full_numbers',
        bPaginate: false,
        bInfo: false,
        lengthChange: false,
        columnDefs: [{ orderable: false, targets: 0 }, { orderable: false, targets: 1 },
            { orderable: false, targets: 2 }, { orderable: false, targets: 3 },
            { orderable: false, targets: 4 }, { orderable: false, targets: 5 }],
        order: [[0, 'asc']],
    };
    return Object.assign(_dtOptions, overrideConfig || {});
};



/***/ }),

/***/ "../../../../../src/util/formValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstNameValidator", function() { return firstNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastNameValidator", function() { return lastNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

// Input validations
var firstNameValidator = [
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required,
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(2),
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].maxLength(30),
];
var lastNameValidator = [
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required,
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(2),
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].maxLength(30),
];
var emailValidator = [
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required,
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].email,
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].maxLength(100),
];
var passwordValidator = [
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required,
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(8),
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].maxLength(100),
];



/***/ }),

/***/ "../../../../../src/util/validateMessage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getErrorMessage; });
var input = ['firstName', 'lastName', 'email', 'password'];
/**
 * Get the error message given the input is invalid
 * @param  {FormGroup} formValidator - form validator
 * @param  {string}    inputType     - type of the input, such as firstName
 * @return {string}                  - an error message, or undefined if the input is invalid
 */
var getErrorMessage = function (formValidator, inputType) {
    // If the inputType does not exist in our list or there are no errors in the formvalidator
    if (input.indexOf(inputType) < 0 || !formValidator.errors) {
        return undefined;
    }
    switch (inputType) {
        case 'firstName':
            if (formValidator.errors.required) {
                return 'Please fill in your first name';
            }
            if (formValidator.errors.minlength) {
                return 'First name must be at least 2 characters long';
            }
            if (formValidator.errors.maxlength) {
                return 'Your first name should not exceed 30 characters';
            }
            break;
        case 'lastName':
            if (formValidator.errors.required) {
                return 'Please fill in your last name';
            }
            if (formValidator.errors.minlength) {
                return 'Last name must be at least 2 characters long';
            }
            if (formValidator.errors.maxlength) {
                return 'Your last name should not exceed 30 characters';
            }
            break;
        case 'email':
            if (formValidator.errors.required) {
                return 'Please fill in your email';
            }
            if (formValidator.errors.email) {
                return 'Invalid email';
            }
            if (formValidator.errors.maxlength) {
                return 'Your email should not exceed 100 characters.';
            }
            break;
        case 'password':
            if (formValidator.errors.required) {
                return 'Please fill in your password';
            }
            if (formValidator.errors.minlength ||
                formValidator.errors.maxlength) {
                return 'Your password must be at least 8 characters long '
                    + 'and must not exceed 100 characters';
            }
            break;
        default: break;
    }
    // supposedly unreachable
    return undefined;
};



/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map