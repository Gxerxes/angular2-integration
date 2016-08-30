import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {

    constructor() {
    }

    comparator(a, b) {
        return a - b;
    }

    bubbleSort(array, cmp?: (a, b) => any) {
        let comparator = cmp || this.comparator;
        let temp;

        for (let i = 0; i < array.length; i++) {
            for (let j = i; j > 0; j--) {
                if(comparator(array[j], array[j - 1]) < 0) {
                    temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp
                }
            }
        }

        return array;
    }
}