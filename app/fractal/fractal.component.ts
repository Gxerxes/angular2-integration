/**
 * Created by LeonL64 on 6/6/2016.
 */
import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostBinding, DoCheck, ViewContainerRef, TemplateRef, ChangeDetectorRef, IterableDiffers,
    ViewRef, IterableDiffer, Renderer, ApplicationRef, ComponentResolver, Injector} from '@angular/core';
import {ngBookRepeat} from "../directives/ngbookrepeat.directive";
import {OnPushChangeDetectionSampleApp} from "../change-detection/onpush";
import {ObservableChangeDetectionSampleApp} from "../change-detection/observables";

import {global, getTypeNameForDebugging} from '@angular/core/src/facade/lang';

import {DOCUMENT} from '@angular/platform-browser';
import {Route, RouterConfig} from "@angular/router";

const KeyboardEvent = (global as any).KeyboardEvent as KeyboardEvent;
const MouseEvent = (global as any).MouseEvent as MouseEvent;

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

    @HostBinding('class.btn-primary')
    public btnState: boolean = true;

    onFn: () => void;
    onChange: any = Function.prototype;
    obj: Object;
    image: HTMLImageElement;
    
    constructor(private viewContainter: ViewContainerRef, 
                private changeDetector: ChangeDetectorRef, private differs: IterableDiffers,
                private renderer: Renderer, private applicationRef: ApplicationRef,
                private componentResolver: ComponentResolver, private injector: Injector, private elRef: ElementRef) {
        this.people = [
            {name: 'Joe', age: 10},
            {name: 'Patrick', age: 21},
            {name: 'Melissa', age: 12},
            {name: 'Kate', age: 19}
        ];

        // console.log(this.route);
        // console.log(this.routes);
        console.log('This is ViewContainerRef: ');
        console.log(this.viewContainter);
        // console.log('This is TemplateRef: ');
        // console.log(this.template);
        console.log('This is ChangeDetectorRef: ');
        console.log(this.changeDetector);
        console.log('This is IterableDiffers');
        console.log(this.differs);
        console.log('This is Renderer');
        console.log(this.renderer);
        console.log('This is ApplicationRef');
        console.log(this.applicationRef);
        console.log('This is ComponentResolver');
        console.log(this.componentResolver);
        console.log('This is Injector');
        console.log(this.injector);
        console.log('This is ElementRef');
        console.log(this.elRef);
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
        this.btnState = !this.btnState;
    }

    @ViewChild("myCanvas") myCanvas: ElementRef;

    ngOnInit() {
        console.log(this.onFn);
        console.log(typeof this.onFn)
        console.log(this.onChange);
        console.log(typeof this.onChange)
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
