import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {

    constructor() {
    }

    comparator(a, b) {
        return a - b;
    }

    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        return array;
    }

    partition(array, left, right, compare) {
        let cmp = array[right - 1];
        let minEnd = left;
        let maxEnd;

        for (maxEnd = left; maxEnd < right - 1; maxEnd++ ) {
            if (this.comparator(array[maxEnd], cmp) < 0 ) {
                this.swap(array, maxEnd, minEnd);
                minEnd++;
            }
        }

        this.swap(array, minEnd, right - 1);
        return minEnd;
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

    quickSort(array, leftArr?, rightArr?, comparator?: (a, b) => any) {
        let cmp = comparator || this.comparator;
        let left = 0 || leftArr;
        let right = array.length || rightArr;

        if (left < right) {
            let p = this.partition(array, left, right, cmp);
            this.quickSort(array, left, p, cmp);
            this.quickSort(array, p + 1, right, cmp);
        }
        return array;
    }
}