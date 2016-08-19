import {provideRouter, RouterConfig} from '@angular/router';
import {TrigonometryComponent} from "./trigonometry/trigonometry.component";
import {FractalComponent} from "./fractal/fractal.component";
import {MatrixComponent} from "./matrix/matrix.component";
import {LineIntersectionComponent} from "./line-intersection/line-intersection.component";
import {TweeningComponent} from "./tweening/tweening.component";
import {EasingComponent} from "./easing/easing.component";
import {FindPrimeComponent} from "./algorithm/find-prime.component"
import {WorldMapComponent} from "./worldmap/world-map.component";
import {VerletIntegrationComponent} from "./verlet-integration/verlet-integration.component";
import {ThreePeriodicComponent} from "./three-periodic/three-periodic.component";
import {GoogleMapsComponent} from "./google-maps/google-maps.component";
import {Framework7Component} from "./framework7/framework7.component";
import {RevealjsComponent} from "./revealjs/revealjs.component";

const routes: RouterConfig = [
    {path: 'fractal', component: FractalComponent},
    {path: 'three-periodic', component: ThreePeriodicComponent},
    {path: 'framework7', component: Framework7Component},
    {path: 'trigonometry', component: TrigonometryComponent},
    {path: 'line-intersection', component: LineIntersectionComponent},
    {path: 'matrix', component: MatrixComponent},
    {path: 'tweening', component: TweeningComponent},
    {path: 'easing', component: EasingComponent},
    {path: 'algorithm', component: FindPrimeComponent},
    {path: 'worldmap', component: WorldMapComponent},
    {path: 'google-maps', component: GoogleMapsComponent},
    {path: 'verlet-integration', component: VerletIntegrationComponent},
    {path: 'revealjs', component: RevealjsComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];