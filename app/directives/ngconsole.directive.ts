import {Component,
    ComponentRef, Directive, HostListener, Input, ReflectiveInjector, TemplateRef, ViewContainerRef, ComponentResolver
} from '@angular/core';

declare var jQuery: any;
declare var kendoConsole: any;
declare var kendo: any;

@Directive({
    selector: '[ngconsole]'
})
export class NgConsoleDirective {
    //public viewContainerRef: ViewContainerRef;

    private ngConsoleCmp: ComponentRef<NgConsoleComponent>;
    
    constructor(
        // private templateRef: TemplateRef<NgConsoleComponent>,
        private viewContainerRef: ViewContainerRef, private componentResolver: ComponentResolver
    ){
        this.componentResolver.resolveComponent(NgConsoleComponent).then(factory => {
            this.ngConsoleCmp = this.viewContainerRef.createComponent(factory);
        })
    }
}

@Component({
    selector: 'ng-console',
    styles: [`
        #touchSurface {
            background: black;
            color: white;
            padding: 100px 20px;
            text-align: center;
            font-style: italic;
            font-size: 12px;
        }
    `],
    template: `
        <div class="console" style="min-width: 200px"></div>
    `
})
export class NgConsoleComponent {

}
