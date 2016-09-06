import {provideRouter, RouterConfig} from '@angular/router';
import {TrigonometryComponent} from "./trigonometry/trigonometry.component";
import {FractalComponent} from "./fractal/fractal.component";
import {MatrixComponent} from "./matrix/matrix.component";
import {LineIntersectionComponent} from "./line-intersection/line-intersection.component";
import {TweeningComponent} from "./tweening/tweening.component";
import {EasingComponent} from "./easing/easing.component";
import {AlgorithmComponent} from "./algorithm/algorithm.component"
import {WorldMapComponent} from "./worldmap/world-map.component";
import {VerletIntegrationComponent} from "./verlet-integration/verlet-integration.component";
import {ThreePeriodicComponent} from "./three-periodic/three-periodic.component";
import {GoogleMapsComponent} from "./google-maps/google-maps.component";
import {Framework7Component} from "./framework7/framework7.component";
import {RevealjsComponent} from "./revealjs/revealjs.component";
import {HammerjsComponent} from "./hammerjs/hammerjs.component";
import {AngularMobileComponent} from "./angular-mobile/angular-mobile.component";
import {JqueryMobileComponent} from "./jquery-mobile/jquerymobile.component";
import {FullCalendarComponent} from "./full-calendar/full-calendar.component";
import {KendoUiComponent} from "./kendo-ui/kendo-ui.component";

const routes: RouterConfig = [
    {path: '', component: FractalComponent},
    {path: 'three-periodic', component: ThreePeriodicComponent},
    {path: 'framework7', component: Framework7Component},
    {path: 'trigonometry', component: TrigonometryComponent},
    {path: 'line-intersection', component: LineIntersectionComponent},
    {path: 'matrix', component: MatrixComponent},
    {path: 'tweening', component: TweeningComponent},
    {path: 'easing', component: EasingComponent},
    {path: 'algorithm', component: AlgorithmComponent},
    {path: 'worldmap', component: WorldMapComponent},
    {path: 'google-maps', component: GoogleMapsComponent},
    {path: 'verlet-integration', component: VerletIntegrationComponent},
    {path: 'revealjs', component: RevealjsComponent},
    {path: 'hammerjs', component: HammerjsComponent},
    {path: 'angular-mobile', component: AngularMobileComponent},
    {path: 'jquery-mobile', component: JqueryMobileComponent},
    {path: 'full-calendar', component: FullCalendarComponent},
    {path: 'kendo-ui', component: KendoUiComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];