import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router-deprecated';

declare var THREE: any;

@Component({
    moduleId: module.id,
    selector: 'my-app-three-periodic',
    styleUrls: ['three-periodic.component.css'],
    templateUrl: 'three-periodic.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ThreePeriodicComponent implements OnInit, AfterViewInit {
    context: CanvasRenderingContext2D;
    width: any;
    height: any;
    centerY: any;
    centerX; any;
    offset: any;
    speed: any;
    angle: any;

    // @ViewChild("myCanvas") myCanvas: ElementRef;

    constructor(public router: Router) {
        //this.router.
        console.log(this.router);
    }

    ngOnInit() {
        SystemJS.import('assets/js/css3d_periodictable.js').then(comp => {
            console.log(comp);
            comp.init();
        }).catch(function (err) {
            console.log(err)
        });

    }

    ngAfterViewInit() {
        // let canvas = this.myCanvas.nativeElement;
        // this.context = canvas.getContext("2d");
        // this.width = canvas.width = window.innerWidth;
        // this.height = canvas.height = window.innerHeight;
        //
        // this.render();

    }

    ngOnChange() {
    }

    render() {

        requestAnimationFrame(() => this.render());

    }

}