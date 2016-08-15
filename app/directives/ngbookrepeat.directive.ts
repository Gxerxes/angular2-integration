/**
 * Created by LeonL64 on 8/11/2016.
 */


import {
    Directive, DoCheck, ViewContainerRef, TemplateRef, ChangeDetectorRef, IterableDiffers,
    ViewRef, IterableDiffer
} from "@angular/core";
@Directive({
    selector: '[ngBookRepeat]',
    inputs: ['ngBookRepeatOf']
})
export class ngBookRepeat implements DoCheck {

    private items: any;
    private differ: IterableDiffer;
    private views: Map<any, ViewRef> = new Map<any, ViewRef>();

    constructor(private viewContainter: ViewContainerRef, private template: TemplateRef<any>,
                private changeDetector: ChangeDetectorRef, private differs: IterableDiffers) {
        console.log('ng book repeat bound');
        console.log(this.viewContainter);
        console.log(this.template);
        console.log(this.changeDetector);
        console.log(this.differs);
    }

    set ngBookRepeatOf(items){
        this.items = items;
        if(this.items && !this.differ) {
            this.differ = this.differs.find(items).create(this.changeDetector)
        }
    }

    ngDoCheck(): void {
        if (this.differ) {
            let changes = this.differ.diff(this.items);
            if (changes) {
                console.log('template', this.template);
                changes.forEachAddedItem((change) => {
                    let view = this.viewContainter.createEmbeddedView(this.template, {$implicit: change.item}, change.currentIndex);
                    //view.context.$implicit = change.item;
                    this.views.set(change.item, view);
                });
                changes.forEachRemovedItem((change) => {
                    let view = this.views.get(change.item);
                    let idx = this.viewContainter.indexOf(view);
                    this.viewContainter.remove(idx);
                    this.views.delete(change.item);
                });
            }
        }
    }
}