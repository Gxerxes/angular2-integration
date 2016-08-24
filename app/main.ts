import { bootstrap }    from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppComponent } from './app.component';

import { HTTP_PROVIDERS } from '@angular/http';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {RESPONSIVE_PROVIDERS, CUSTOM_PROVIDERS} from "./app.providers";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    RESPONSIVE_PROVIDERS,
    CUSTOM_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
