import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../utils/utils.service";

@Component({
    moduleId: module.id,
    selector: 'my-app-find-prime',
    templateUrl: './find-prime.component.html',
    providers: [UtilsService]
})
export class FindPrimeComponent implements OnInit {
    constructor(private _utilsService: UtilsService) {

    }

    ngOnInit() { 
        console.log(this.getPrime(1000));
        console.log(this._utilsService.getRandomIntArray(10));
        console.log(this._utilsService.getRandomIntArray(10));
        console.log(this._utilsService.getRandomIntArray(10));
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