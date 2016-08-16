import {Component,HostListener,Directive,HostBinding,Input} from '@angular/core';

@Directive({selector: '[myHost]'})
export class HostDirective {
    @HostBinding('attr.role') role = 'admin';
    @HostListener('click') onClick() {
        this.role=this.role=='admin'?'guest':'admin';
    }

}