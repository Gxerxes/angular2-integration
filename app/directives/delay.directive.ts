import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

export class DelayContext {
    constructor(private loadTime: number) {}
}

@Directive({
    selector: '[delay]'
})
export class DelayDirective {
    constructor(private tempalteRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {

    }

    @Input('delay')
    set delayTime(time: number) {
        setTimeout(
            () => {
                this.viewContainerRef.createEmbeddedView(this.tempalteRef, new DelayContext(performance.now()));
            },
            time);
    }
}
