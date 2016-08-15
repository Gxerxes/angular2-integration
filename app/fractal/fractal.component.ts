/**
 * Created by LeonL64 on 6/6/2016.
 */
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {ngBookRepeat} from "../directives/ngbookrepeat.directive";
import {OnPushChangeDetectionSampleApp} from "../change-detection/onpush";
import {ObservableChangeDetectionSampleApp} from "../change-detection/observables";

@Component({
    selector: 'my-app-fractal',
    templateUrl: 'app/fractal/fractal.component.html',
    directives: [ngBookRepeat, ObservableChangeDetectionSampleApp]
})
export class FractalComponent implements OnInit, AfterViewInit {
    context: CanvasRenderingContext2D;
    width: any;
    height: any;
    centerY: any;
    centerX; any;
    offset: any;
    speed: any;
    angle: any;

    people: any[];

    constructor() {
        this.people = [
            {name: 'Joe', age: 10},
            {name: 'Patrick', age: 21},
            {name: 'Melissa', age: 12},
            {name: 'Kate', age: 19}
        ];
    }

    remove(p) {
        let idx: number = this.people.indexOf(p);
        this.people.splice(idx, 1);
        return false;
    }

    add(name, age) {
        this.people.push({name: name.value, age: age.value});
        name.value = '';
        age.value = '';
    }

    @ViewChild("myCanvas") myCanvas: ElementRef;

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        let canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext("2d");
        this.width = canvas.width = window.innerWidth;
        this.height = canvas.height = window.innerHeight;

        this.render();
    }

    render() {

        requestAnimationFrame(() => this.render());

    }
}
