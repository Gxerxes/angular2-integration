import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {HammerGesturesDirective} from "../directives/HammerGesturesDirective";

declare var cssCircleMenu: any;

@Component({
    moduleId: module.id,
    selector: 'my-app-hammerjs',
    templateUrl: 'hammerjs.component.html',
    directives: [HammerGesturesDirective]
})
export class HammerjsComponent implements OnInit, AfterViewInit {
    
    constructor() {}
    
    ngOnInit() {
        
    }
    
    ngAfterViewInit() {
        let el = ".js-menu";
        let myMenu = cssCircleMenu(el);
    }

    doSwipe(direction: string) {
        alert(direction);
    }


}