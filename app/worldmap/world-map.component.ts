import { Component, OnInit } from '@angular/core';

declare var Datamap: any;
@Component({
    moduleId: module.id,
    selector: 'my-app-world-map',
    templateUrl: 'world-map.component.html'
})
export class WorldMapComponent implements OnInit {
    constructor() { }
    
    width: any;
    height: any;

    ngOnInit() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        let map = new Datamap({element: document.getElementById('container')});
    }

}

