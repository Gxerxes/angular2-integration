import {Component, AfterContentInit, OnInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-framework7',
    providers: [],
    templateUrl: `framework7.component.html`,
    directives: []
})
export class Framework7Component implements AfterContentInit, OnInit {
    name: any;
    // Framework7: myApp;

    items = ['Sydney',
        'Albury',
        'Armidale',
        'Bathurst',
        'Broken Hill',
        'Cessnock',
        'Coffs Harbour',
        'Dubbo',
        'Gosford',
        'Goulburn',
        'Grafton',
        'Griffith',
        'Lake Macquarie',
        'Lismore',
        'Maitland',
        'Newcastle',
        'Nowra',
        'Orange',
        'Port Macquarie',
        'Queanbeyan',
        'Tamworth',
        'Tweed Heads',
        'Wagga Wagga',
        'Wollongong',
        'Wyong'];

    constructor() {
        this.name = 'Angular2 + Framework7'
    }

    ngOnInit() {
        SystemJS.import('assets/js/my-app.js').then(comp => {
            console.log(comp);
        }).catch(function (err) {
            console.log(err)
        });
    }

    click(selected) {
        // this.myApp.alert(selected, 'Custom Title!');
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
}

