import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    constructor() { }

    generateRandomArray(num: number): Array<number> {

        let arr = [];
        
        for (let index = 0; index < num; index++) {
            arr.push(Math.round(Math.random() * index));
        }

        return arr;
    }

    generateRandomArrayES6(length, max): Array<number> {
        //let randomArray = [];
        let randomArray = [...new Array(length)].map((_, i) => Math.round(Math.random() * max));

        return randomArray;
    }

    getRandomArbitrary(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomIntArray(count: number, min?: number, max?: number): Array<number> {
        let arr = [];
        let minNum = min || 0;
        let maxNum = max || 100;

        for (let index = 0; index < count; index++) {
            let element = this.getRandomInt(minNum, maxNum);
            arr.push(element);
        }

        return arr;
    }

}