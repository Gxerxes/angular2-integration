import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {HookComponent} from "../hook/hooks.component";

declare var THREE: any;

@Component({
    moduleId: module.id,
    selector: 'my-app-tweening',
    styleUrls: ['tweening.component.css'],
    templateUrl: 'tweening.component.html',
    directives: [HookComponent],
    encapsulation: ViewEncapsulation.None
})
export class TweeningComponent {
    context: CanvasRenderingContext2D;
    width: any;
    height: any;
    centerY: any;
    centerX; any;
    offset: any;
    speed: any;
    angle: any;

    contact: Contact = {count: 3, name: 'leon'};


    // @ViewChild("myCanvas") myCanvas: ElementRef;
    //
    ngOnInit() {
        setTimeout(() => this.contact.count++, 5000);
    }

    // ngAfterViewInit() {
    //     let canvas = this.myCanvas.nativeElement;
    //     this.context = canvas.getContext("2d");
    //     this.width = canvas.width = window.innerWidth;
    //     this.height = canvas.height = window.innerHeight;
    //    
    //     this.render();
    //
    // }
    //
    // render() {
    //     requestAnimationFrame(() => this.render());
    //
    // }
    //
}

class Contact {
    count: number;
    name: string;
}