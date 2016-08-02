import { Component, OnInit } from '@angular/core';
//import {ContactFormComponent} from './contact-form.component';
import { HTTP_PROVIDERS} from '@angular/http';
import { Test } from './model';
import { TestService } from './test.service';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    //directives: [Test],
    template: `<h1>{{title}}</h1>
<ul class="list-group">
    <li *ngFor="let test of tests" class="list-group-item list-group-item-info">
        {{test.id}} <div class="list-group-item list-group-item-info">{{test.name}}</div>
    </li>
</ul>`,
    providers: [
        HTTP_PROVIDERS,
        TestService
    ]

})
export class AppComponent implements OnInit {
    public title = 'Test list';
    public tests: Test[];

    constructor(private _testService: TestService) { }

    ngOnInit() {
        this._testService.getTest()
            .subscribe(
            tests => {
                this.tests = tests;
            }),
        error => alert(error);
    }
}
