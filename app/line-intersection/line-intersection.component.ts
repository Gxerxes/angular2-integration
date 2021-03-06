import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app-line-intersection',
    templateUrl: 'app/line-intersection/line-intersection.component.html',
    directives: []
})
export class LineIntersectionComponent implements OnInit, AfterViewInit {
    context: CanvasRenderingContext2D;
    width: any;
    height: any;
    centerY: any;
    centerX; any;
    offset: any;
    speed: any;
    angle: any;

    @ViewChild("myCanvas") myCanvas: ElementRef;

    ngOnInit() {

    }

    ngAfterViewInit() {
        let canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext("2d");
        this.width = canvas.width = window.innerWidth;
        this.height = canvas.height = window.innerHeight - 84;

        this.render();

    }

    render() {

        requestAnimationFrame(() => this.render());

    }
}