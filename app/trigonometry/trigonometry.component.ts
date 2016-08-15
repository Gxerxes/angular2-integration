/**
 * Created by LEON on 2016/5/23.
 */
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app-trigonometry',
    templateUrl: 'app/trigonometry/trigonometry.component.html'
})
export class TrigonometryComponent implements OnInit, AfterViewInit {
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
        this.height = canvas.height = window.innerHeight;

        this.centerY = this.height * .5;
        this.centerX = this.width * .5;
        this.offset = this.height * .4;
        this.speed = 0.1;
        this.angle = 0;

        this.render();

    }

    render() {
        let y = this.centerY + Math.sin(this.angle) * this.offset;

        this.context.clearRect(0, 0, this.width, this.height);
        this.context.beginPath();
        this.context.arc(this.centerX, y, 50, 0, Math.PI * 2, false);

        this.context.fill();

        this.angle += this.speed;

        requestAnimationFrame(() => this.render());

    }
}
