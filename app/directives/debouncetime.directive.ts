import {Directive, Provider, forwardRef, Input, ElementRef, Renderer} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/common";
import {Observable} from "rxjs/Rx";

const DEBOUNCE_INPUT_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => DebounceInputControlValueAccessor), multi: true}
);

@Directive({
    selector: '[debounceTime]',
    //host: {'(change)': 'doOnChange($event.target)', '(blur)': 'onTouched()'},
    providers: [DEBOUNCE_INPUT_VALUE_ACCESSOR]
})
export class DebounceInputControlValueAccessor implements ControlValueAccessor {

    onChange = (_) => {};
    onTouched = () => {};
    @Input()
    debounceTime: number;

    constructor(private _elementRef: ElementRef, private _renderer:Renderer) {

    }

    ngAfterViewInit() {
        console.log('this.debounceTime = '+this.debounceTime);
        Observable.fromEvent(this._elementRef.nativeElement, 'keyup')
            .debounceTime(this.debounceTime)
            .subscribe((event: any) => {
                console.log('event');
                this.onChange(event.target.value);
            })
    }

    writeValue(value: any): void {

    }

    registerOnChange(fn: () => any): void { this.onChange = fn; }
    registerOnTouched(fn: () => any): void { this.onTouched = fn; }
}