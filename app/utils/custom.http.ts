/**
 *  Custom HTTP class extending the default ng2 Http service and using Observables
 *
 *  credit to: http://restlet.com/blog/2016/04/18/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-3/
 **/

import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import {
    RequestOptionsArgs,
    RequestOptions,
    ConnectionBackend,
    Http,
    Request,
    Response
} from "@angular/http";
import {ErrorNotifierService} from "./error.notifier";

@Injectable()
export class CustomHttp extends Http {
    constructor(private backend: ConnectionBackend, private defaultOptions: RequestOptions, private errorService: ErrorNotifierService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        return super.request(url, options)
            .catch((err) => {
                if (err.status === 400 || err.status === 422 ) {
                    return Observable.throw(err);
                } else {
                    this.errorService.notifyError(err);
                }
            })
            .retryWhen(error => error.delay(500))
            .timeout(2000, new Error('Timeout has occurred'))
            .finally(() => {
               console.log('After the request');
            });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        return super.get(url, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    console.log('On received an error...');
                    return Observable.throw(err);
                } else {
                    this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .retryWhen(error => error.delay(500))
            .timeout(2000, new Error('delay exceeded'))
            .finally(() => {
               console.log('After the request')
            });
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        return super.post(url, body, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else {
                    this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .finally(() => {
                console.log('After the request');
            });
    }
}
