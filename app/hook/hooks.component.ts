import {Component, Input} from "@angular/core";

@Component({
    selector: 'my-hook',
    template: `
        <h1>hook{{contact.count}}</h1>
        <ng-content></ng-content>
    `
})
export class HookComponent {

    _contact: any = {};
    @Input()
    set contact(contact: any) {
        console.log('---setting interceptor---' + contact);
        this._contact = contact;
        //console.log(contact);
        // this._contact.name = (contact.name && contact.name.trim()) || 'no name set';
        // this._contact.telNum = contact.telNum || '000-000';
    }
    get contact() { return this._contact; }

    constructor() {
        console.log('---constructor----' + this.contact.toString());
        //called first time before the ngOnInit()
    }

    ngOnChanges() {
        //called when an input or output binding value changes
        console.log('#1---ngOnChanges');
    }

    ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges()
        console.log('#2---ngOnInit');
    }

    ngDoCheck() {
        console.log('#3---ngDoCheck');
    }

    ngAfterViewContentInit() {
        console.log('#4---ngAfterViewContentInit');
    }

    ngAfterContentChecked() {
        console.log('#5---ngAfterViewContentInit');
    }

    ngAfterViewInit() {
        console.log('#6---ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('#7---ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('#8---ngOnDestroy');
    }
}