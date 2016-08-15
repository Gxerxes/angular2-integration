/**
 * Created by LeonL64 on 6/6/2016.
 */
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import {Http} from '@angular/http';
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {DROPDOWN_DIRECTIVES} from "ng2-dropdown/index";
import {BusyService, BusyDirective} from "angular2-busy/index";
import {Subscription} from 'rxjs';
import {TreeComponent} from "../components/my-tree/tree.component";
import {TreeModel, NodeEvent} from "../components/my-tree/tree.types";
// import {TreeComponent, TreeModel, NodeEvent} from "ng2-tree";
// import MaskedInput from "angular2TextMask";

@Component({
    selector: 'my-app-matrix',
    templateUrl: 'app/matrix/matrix.component.html',
    directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, DROPDOWN_DIRECTIVES, BusyDirective, TreeComponent],
    providers: [BusyService]
})
export class MatrixComponent implements OnInit, AfterViewInit {
    context: CanvasRenderingContext2D;
    width: any;
    height: any;
    centerY: any;
    centerX; any;
    offset: any;
    speed: any;
    angle: any;
    
    textModel = '';

    private tree: TreeModel = {
        value: 'Programming languages by programming paradigm',
        children: [
            {
                value: 'Object-oriented programming',
                children: [
                    {value: 'Java'},
                    {value: 'C++'},
                    {value: 'C#'},
                ]
            },
            {
                value: 'Prototype-based programming',
                children: [
                    {value: 'JavaScript'},
                    {value: 'CoffeeScript'},
                    {value: 'Lua'},
                ]
            }
        ]
    };

    @ViewChild("myCanvas") myCanvas: ElementRef;

    @Input() busy: Promise<any>;

    constructor(private http: Http) {}

    ngOnInit() {
        //this.busy = this.http.get('...').toPromise();
        // this.busy = new Promise(function (resove, reject) {
        //
        // });
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

    private logEvent(e: NodeEvent): void {
        console.log(e);
    }
}