import {Component} from "@angular/core";

@Component({
    selector: 'my-card',
    template: `
        <ng-content select=".main"></ng-content>
        <ng-content select=".sub"></ng-content>
        `,
    styles: [`
        /*:host {*/
          /*padding: 2rem;*/
          /*font-size: 2rem;*/
          /*font-family: 'Helvetica', sans-serif;*/
          /*font-weight: 300;*/
          /*background: #e3f2fd;*/
          /*margin: 1rem;*/
          /*display: inline-block;*/
        /*} */
        :host {
          display: inline-block;
          font-family: 'Helvetica', sans-serif;
          font-weight: 300;
          margin: 1rem;
        }
        
        :host .main {
          padding: 2rem;
          background: #e3f2fd;
          font-size: 2rem;
          text-align: center;
        }
        
        :host .sub {
          padding: 0.4rem;
          background: #ef5350;
        }
    `]
})
export class CardComponent {
    ngOnInit() {
        console.log('card component loaded');
    }
}