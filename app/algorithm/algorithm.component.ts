import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../utils/utils.service";
import {SortingService} from "../services/sorting.service";

@Component({
    moduleId: module.id,
    selector: 'my-app-find-prime',
    templateUrl: './algorithm.component.html',
    providers: [UtilsService, SortingService]
})
export class AlgorithmComponent implements OnInit {

    arr: any = [2, 5, 1, 0, 4];

    constructor(public _utilsService: UtilsService, public sortingService: SortingService) {

    }

    ngOnInit() { 
        console.log(this.getPrime(1000));
        console.log(this._utilsService.getRandomIntArray(10));
        console.log(this._utilsService.getRandomIntArray(10));
        console.log(this._utilsService.getRandomIntArray(10));

        console.log('------Bubble Sorting Start------');
        console.log(this.sortingService.bubbleSort(this.arr));
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



}