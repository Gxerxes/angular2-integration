/**
 * Created by LeonL64 on 8/19/2016.
 */
import { Component,enableProdMode, provide,PLATFORM_DIRECTIVES } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import {ResponsiveState, ResponsiveConfig, ResponsiveConfigInterface,RESPONSIVE_DIRECTIVES} from 'responsive-directives-angular2';

let config: ResponsiveConfigInterface = {
    breakPoints: {
        xs: {max: 600},
        sm: {min: 601, max: 959},
        md: {min: 960, max: 1279},
        lg: {min: 1280, max: 1919},
        xl: {min: 1920}
    },
    debounceTime: 100 // allow to debounce checking timer
};

export const APP_PROVIDERS = [
    HTTP_PROVIDERS,
    MdIconRegistry,
    {
        provide: ResponsiveConfig,
        useFactory: () => new ResponsiveConfig(config)
    },
    ResponsiveState,
    provide(PLATFORM_DIRECTIVES, { useValue: [RESPONSIVE_DIRECTIVES], multi: true})
];
