import { Injectable } from '@angular/core';
import { window } from '@angular/platform-browser/src/facade/browser';

declare var swal: any;

@Injectable()
export class SweetAlertService {
    private _swal: any = swal || window.swal;

    constructor() {}

    prompt(options) {
        const baseOptions = {
            showCancelButton: true,
            confirmButtonText: 'Submit',
            input: 'text'
        };

        return this._swal(Object.assign(baseOptions, options));
    }

    alert(options) {
        const baseOptions = {
            confirmButtonText: 'OK',
            type: 'info'
        };
        return this._swal(Object.assign(baseOptions, options));
    }

    error(message: string) {
        return this.alert(Object.assign({type: 'error'}, {text: message}))
    }
}
