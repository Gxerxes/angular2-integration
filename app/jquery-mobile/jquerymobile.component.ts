import {Component, AfterContentInit, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-jquery-mobile',
    templateUrl: 'jquerymobile.component.html'
})
export class JqueryMobileComponent {

    scrollTest: any = {text: 'scroll test'};

    ngAfterContentInit() {
        // contentChild is updated after the content has been checked
        console.log('AfterContentInit: ');
        // this.myApp = new Framework7({
        //     router: true,
        //     material: true
        //     // ... other parameters
        // });
        this.jqueryMobile();
    }


    jqueryMobile() {
        // $(document).on("pagecreate","#pageone",function(){
        //     $("p").on("tap",function(){
        //         $(this).hide();
        //     });
        // });

        jQuery(".ui-tap > p").on("taphold",function(){
            jQuery(this).hide();
        });

        jQuery(".ui-swipe> p").on("swipe", function(){
            jQuery("span").text("Swipe detected!");
        });

        jQuery(".ui-swipe > p").on("swipeleft", () => {
            this.scrollTest.text = 'swiped left';
            alert('swiped left');
        });

        jQuery(".ui-swipe > p").on("swiperight", function () {
            alert('swiped right');
        });

        jQuery("#myTable").on("load", function () {
            
        });

        jQuery(window).on("scrollstart", () => {
            this.scrollTest.text = "Started scrolling!";
            //alert("Started scrolling!");
        });

        jQuery(window).on("scrollstop", () => {
            this.scrollTest.text = "Stopped scrolling!";
            //alert("Stopped scrolling!");
        });

        jQuery(window).on("orientationchange",function(){
            if(window.orientation == 0) // Portrait
            {
                jQuery("p").css({"background-color":"yellow","font-size":"300%"});
            }
            else // Landscape
            {
                jQuery("p").css({"background-color":"pink","font-size":"200%"});
            }
        });
    }
}