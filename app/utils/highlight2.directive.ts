import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    constructor(renderer: Renderer, element: ElementRef) {
        renderer.setElementStyle(element.nativeElement, 'background-color', 'red');
    }
}
