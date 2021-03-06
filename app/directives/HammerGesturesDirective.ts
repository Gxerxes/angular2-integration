import {Directive, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
@Directive({
    selector: '[hammer-gestures]'
})
export class HammerGesturesDirective implements AfterViewInit {
    @Output() onGesture = new EventEmitter();
    static hammerInitialized = false;
    constructor(private el: ElementRef) {

    }
    ngAfterViewInit() {

        if (!HammerGesturesDirective.hammerInitialized) {

            let hammertime = new Hammer(this.el.nativeElement);
            hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            // hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL});
            // hammertime.get('pinch').set({ enable: true });
            // hammertime.get('rotate').set({ enable: true });
            hammertime.on("swipeup", (ev) => {
                this.onGesture.emit("swipeup");
            });
            hammertime.on("swipedown", (ev) => {
                this.onGesture.emit("swipedown");
            });
            hammertime.on("swipeleft", (ev) => {
                this.onGesture.emit("swipeleft");
            });
            hammertime.on("swiperight", (ev) => {
                this.onGesture.emit("swiperight");
            });
            hammertime.on("tap", (ev) => {
                this.onGesture.emit("tap");
            });
            // hammertime.on("pan", (ev) => {
            //     this.onGesture.emit("pan");
            // });
            // hammertime.on("pinch", (ev) => {
            //     this.onGesture.emit("pinch");
            // });
            // hammertime.on("rotate", (ev) => {
            //     this.onGesture.emit("rotate");
            // });
            HammerGesturesDirective.hammerInitialized = true;
        }


    }
}