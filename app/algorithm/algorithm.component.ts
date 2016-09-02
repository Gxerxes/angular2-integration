import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../utils/utils.service";
import {SortingService} from "../services/sorting.service";
import {TooltipDirective} from "../components/my-tooltip/tooltip.component";
import {CardComponent} from "../components/my-card/card.component";
import {DelayDirective} from "../directives/delay.directive";

let $: any = window["$"];

@Component({
    moduleId: module.id,
    selector: 'my-app-find-prime',
    // templateUrl: './algorithm.component.html',
    providers: [UtilsService, SortingService],
    directives: [TooltipDirective, CardComponent, DelayDirective],
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

        console.log('------Bubble Sorting Start------');
        console.log(this.sortingService.bubbleSort(this.arr));

        console.log('-------Quick Sorting Start------');
        console.log(this.sortingService.quickSort(this.arr));
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