import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../utils/utils.service";
import {SortingService} from "../services/sorting.service";
import {TooltipDirective} from "../components/my-tooltip/tooltip.component";
import {CardComponent} from "../components/my-card/card.component";
import {DelayDirective} from "../directives/delay.directive";
import {HookComponent} from "../hook/hooks.component";

let $: any = window["$"];
let _: any = window["_"];

@Component({
    moduleId: module.id,
    selector: 'my-app-find-prime',
    // templateUrl: './algorithm.component.html',
    providers: [UtilsService, SortingService],
    directives: [TooltipDirective, CardComponent, DelayDirective, HookComponent],
    styles: [
        `
        span {
            color: blue;
        }`
    ],
    template: `
        <div *ngFor="let item of [1,2,3,4,5,6]" (click)="clickTest()">
          <my-card *delay="500 * item; let loaded = loadTime;">
                <div class="main">{{item}}</div>
                <div class="sub">{{loaded | number:'1.4-4'}}</div>
          </my-card>
        </div>
    `
})
export class AlgorithmComponent implements OnInit {

    arr: any = [7, 2, 5, 1, 6, 0, 9, 4, 10, 3, 8];

    constructor(public _utilsService: UtilsService, public sortingService: SortingService) {

    }

    ngOnInit() { 
        console.log(this.getPrime(1000));
        console.log(this._utilsService.getRandomIntArray(10));
        console.log(this._utilsService.getRandomIntArray(10));
        console.log(this._utilsService.getRandomIntArray(10));

        console.log(_.clone(this.arr));

        console.log('------Bubble Sorting Start------');
        console.log(this.sortingService.bubbleSort(_.clone(this.arr)));

        console.log('-------Quick Sorting Start------');
        console.log(this.sortingService.quickSort(_.clone(this.arr)));

        console.log('-------Selection Sorting Start-------');
        console.log(this.sortingService.selectionSort(_.clone(this.arr)));
        console.log(selectionSort(_.clone(this.arr), compare));


    }

    isPrime(num: number): boolean {
        if(num < 2) return false;

        for (let i = 2; i < num; i++) {
            if ( num%i === 0) {
                return false;
            }
        }

        return true;
    }

    getPrime(maxNum: number): Object {
        let arrPrime = [];
        let count = 0;
        for (let i = 0 ; i < maxNum; i++) {
            if(this.isPrime(i)) {
                arrPrime.push(i);
                count++;
            }
        }

        return { Prime: arrPrime, Count: count };
    }

    clickTest() {
        console.log('Embedded view work')
    }
}

function compare(a, b) {
    return a - b;
}

var selectionSort = function (array, cmp) {
    cmp = cmp || compare;
    var min;
    var idx;
    var temp;
    for (var i = 0; i < array.length; i += 1) {
        idx = i;
        min = array[i];
        for (var j = i + 1; j < array.length; j += 1) {
            if (cmp(min, array[j]) > 0) {
                min = array[j];
                idx = j;
            }
        }
        temp = array[i];
        array[i] = min;
        array[idx] = temp;
    }
    return array;
};