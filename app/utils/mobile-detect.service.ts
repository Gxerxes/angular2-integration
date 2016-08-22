import { Injectable } from '@angular/core';

declare var MobileDetect: any;

@Injectable()
export class MobileDetectService {

    private _md: any = MobileDetect;
    private _defaultMaxWidth: number = 768; //This is only used in cases where the device cannot be classified as phone or tablet.

    constructor() {
        this._md = new MobileDetect(window.navigator.userAgent, this._defaultMaxWidth);
    }

    mobileInfo() {
        return this._md;
    }

    isMobile() {
        return this._md.mobile();
    }

    os() {
        return this._md.os();
    }
}
