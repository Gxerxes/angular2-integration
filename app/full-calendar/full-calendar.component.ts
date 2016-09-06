import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'my-app-full-calendar',
    templateUrl: 'full-calendar.component.html',
    directives: []
})
export class FullCalendarComponent implements OnInit, AfterViewInit {

    constructor() {}

    ngOnInit() {}

    ngAfterViewInit() {
        jQuery('#calendar').fullCalendar({
            header: {
                left: 'prev, next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            defaultView: 'agendaWeek',
            contentHeight: 'auto',
            // minTime: '06:30:00',
            // maxTime: '24:00:00',
            slotDuration: '03:00:01',
            // defaultDate: '2016-09-12',
            // navLinks: true,
            selectable: true,
            selectHelper: true,
            select: function (start, end) {
                //let title = prompt("Event Title: ");
                let title = 'e';
                let eventData;
                if(title) {
                    eventData = {
                        title: title,
                        start: start,
                        end: end
                    };
                    jQuery("#calendar").fullCalendar('renderEvent', eventData, true);
                }
                jQuery("#calendar").fullCalendar('unselect');
            },
            editable: true,
            eventLimit: true,
            // eventRender: function (event, element) {
            //     jQuery(element).draggable();
            // },
            // put your options and callbacks here,
            events: [
                // {
                //     title: 'All Day Event',
                //     start: '2016-09-01'
                // }
            ]
        })

    }
}

function initFabButton() {
    jQuery(document).ready(function() {

        // jQuery reverse
        jQuery.fn.reverse = [].reverse;

        // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!
        jQuery(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {
            var $this = jQuery(this);
            openFABMenu($this);
        });
        jQuery(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle)', function(e) {
            var $this = jQuery(this);
            closeFABMenu($this);
        });

        // Toggle-on-click behaviour.
        jQuery(document).on('click.fixedActionBtn', '.fixed-action-btn.click-to-toggle > a', function(e) {
            var $this = jQuery(this);
            var $menu = $this.parent();
            if ($menu.hasClass('active')) {
                closeFABMenu($menu);
            } else {
                openFABMenu($menu);
            }
        });

    });

    jQuery.fn.extend({
        openFAB: function() {
            openFABMenu(jQuery(this));
        },
        closeFAB: function() {
            closeFABMenu(jQuery(this));
        }
    });


    var openFABMenu = function (btn) {
        var $this = btn;
        if ($this.hasClass('active') === false) {

            // Get direction option
            var horizontal = $this.hasClass('horizontal');
            var offsetY, offsetX;

            if (horizontal === true) {
                offsetX = 40;
            } else {
                offsetY = 40;
            }

            $this.addClass('active');
            $this.find('ul .btn-floating').velocity(
                { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
                { duration: 0 });

            var time = 0;
            $this.find('ul .btn-floating').reverse().each( function () {
                jQuery(this).velocity(
                    { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},
                    { duration: 80, delay: time });
                time += 40;
            });
        }
    };

    var closeFABMenu = function (btn) {
        var $this = btn;
        // Get direction option
        var horizontal = $this.hasClass('horizontal');
        var offsetY, offsetX;

        if (horizontal === true) {
            offsetX = 40;
        } else {
            offsetY = 40;
        }

        $this.removeClass('active');
        var time = 0;
        $this.find('ul .btn-floating').velocity("stop", true);
        $this.find('ul .btn-floating').velocity(
            { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
            { duration: 80 }
        );
    };

}
