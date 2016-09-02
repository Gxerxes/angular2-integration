import {Component, AfterContentInit, OnInit, ViewEncapsulation} from '@angular/core';

let $: any = window["$"];

@Component({
    moduleId: module.id,
    selector: 'my-angular-mobile',
    providers: [],
    templateUrl: `angular-mobile.component.html`,
    styles: [`
        .app-content { padding: 0; }
    `],
    directives: [],
    encapsulation: ViewEncapsulation.None
})
export class AngularMobileComponent implements AfterContentInit, OnInit {
    ngOnInit() {
        // SystemJS.import('assets/js/my-app.js').then(comp => {
        //     console.log(comp);
        // }).catch(function (err) {
        //     console.log(err)
        // });
    }

    openAngularMobile() {
        console.log('open window');
        let windowObjectReference;
        let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        windowObjectReference = window.open("http://localhost:3000/demo/index.html","Angular Mobile", strWindowFeatures);
    }

    ngAfterContentInit() {
        // contentChild is updated after the content has been checked
        console.log('AfterContentInit: ');
        // this.myApp = new Framework7({
        //     router: true,
        //     material: true
        //     // ... other parameters
        // });
    }

    appLoad() {
        SystemJS.import('demo/demo.js').then(comp => {
            console.log(comp);
        }).catch(function (err) {
            console.log(err)
        });
    }


}
