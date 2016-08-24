import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {HammerGesturesDirective} from "../directives/HammerGesturesDirective";

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
    
    ngAfterViewInit() {}

    doSwipe(direction: string) {
        alert(direction);
    }


}