import {
    Input,
    Component,
    Directive,
    ViewContainerRef,
    ComponentRef,
    TemplateRef,
    ContentChild,
    AfterViewInit,
    ElementRef,
    OnInit,
    OnChanges,
    ComponentResolver} from "@angular/core";
import {PositionService} from "../../services/position.service";

let $: any = window["$"];
let _: any = window["_"];

interface TooltipOptions {
    position: string;
    popupClass: string;
    margin: number;
    trigger: {
        on: string;
        off?: string;
    };
    dismissable: boolean;
    active: boolean;
}

let defaultTooltipOptions: TooltipOptions = {
    position: "top",
    popupClass: "",
    margin: 11,
    trigger: {
        on: "mouseover",
        off: "mouseout"
    },
    dismissable: true,
    active: true
};

@Directive({
    selector: "[tooltip]"
})
export class TooltipDirective implements OnInit, OnChanges {
    @Input("tooltip") private tooltipOptions: any;
    @ContentChild("tooltipTemplate") private tooltipTemplate: TemplateRef<Object>;

    private tooltip: ComponentRef<Tooltip>;
    private tooltipId: string;

    private get options (): TooltipOptions {
        return _.defaults({}, this.tooltipOptions || {}, defaultTooltipOptions);
    }

    constructor(
        private viewContainer: ViewContainerRef,
        public elementRef: ElementRef,
        private componentResolver: ComponentResolver,
        private position: PositionService) {
            this.tooltipId = _.uniqueId("tooltip");
    }

    ngOnInit() {
        let element = $(this.elementRef.nativeElement);

        if (!this.options.trigger.off) {
            element.on(this.options.trigger.on, () => {
                if (this.tooltip) {
                    this.hideTooltip();
                } else if (this.options.active === true) {
                    this.showTooltip();
                }
            });
        }
        else {
            element.on(this.options.trigger.on, () => {
                if (!this.tooltip && this.options.active === true) {
                    this.showTooltip();
                }
            });

            element.on(this.options.trigger.off, () => {
                if (this.tooltip) {
                    this.hideTooltip();
                }
            });
        }
    }

    ngOnChanges() {
        if (this.options.active === false && this.tooltip) {
            this.hideTooltip();
        }
    }

    private showTooltip () {
        if (this.tooltipTemplate) {
            this.componentResolver.resolveComponent(Tooltip)
                .then(factory => {
                    this.tooltip = this.viewContainer.createComponent(factory);
                    this.tooltip.instance["content"] = this.tooltipTemplate;
                    this.tooltip.instance["parentEl"] = this.elementRef;
                    this.tooltip.instance["tooltipOptions"] = this.options;

                    if (this.options.dismissable) {
                        $("html").on("click." + this.tooltipId, (event:any) => {
                            let $target = $(event.target);
                            if (!$target.closest(this.tooltip.instance.elementRef.nativeElement).length &&
                                !$target.closest(this.elementRef.nativeElement).length) {
                                this.hideTooltip();
                            }
                        });
                    }
                });
        }
    }

    private hideTooltip () {
        this.tooltip.destroy();
        $("html").off("click." + this.tooltipId);
        this.tooltip = undefined;
    }

}
@Component({
    moduleId: module.id,
    selector: "tooltip",
    styleUrls: ['my-tooltip.css'],
    template:
    `
    <div>
        <template [ngTemplateOutlet]="content"></template>
    </div>
    <div class="arrow"></div>
    `
})
class Tooltip implements AfterViewInit {
    @Input() private content: TemplateRef<Object>;
    @Input() private parentEl: ElementRef;
    @Input() private tooltipOptions: TooltipOptions;

    constructor(private positionService: PositionService, public elementRef: ElementRef) {}
    
    private position() {
        $(this.elementRef.nativeElement).addClass([
            this.tooltipOptions.position,
            this.tooltipOptions.popupClass
        ].join(" "));
        
        let position = this.positionService.positionElements(
            this.parentEl.nativeElement,
            this.elementRef.nativeElement,
            this.tooltipOptions.position,
            this.tooltipOptions.margin,
            false);
        
        // $(this.elementRef.nativeElement).css(
        //     {
        //         top: position.top + "px",
        //         left: position.left + "px",
        //         display: "block"
        //     }
        // );
    }
    
    ngAfterViewInit(): void {
        this.position();
    }
}