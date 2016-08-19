/**
 * Created by LeonL64 on 8/19/2016.
 */
import { HTTP_PROVIDERS } from '@angular/http';
import {RouteConfig, Route, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

export const APP_PROVIDERS = [
    HTTP_PROVIDERS,
    MdIconRegistry
];
