"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import {ContactFormComponent} from './contact-form.component';
var http_1 = require('@angular/http');
var test_service_1 = require('./test.service');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(_testService) {
        this._testService = _testService;
        this.title = 'Test list';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._testService.getTest()
            .subscribe(function (tests) {
            _this.tests = tests;
        }),
            function (error) { return alert(error); };
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //directives: [Test],
            template: "<h1>{{title}}</h1>\n<ul class=\"list-group\">\n    <li *ngFor=\"let test of tests\" class=\"list-group-item list-group-item-info\">\n        {{test.id}} <div class=\"list-group-item list-group-item-info\">{{test.name}}</div>\n    </li>\n</ul>",
            providers: [
                http_1.HTTP_PROVIDERS,
                test_service_1.TestService
            ]
        }), 
        __metadata('design:paramtypes', [test_service_1.TestService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map