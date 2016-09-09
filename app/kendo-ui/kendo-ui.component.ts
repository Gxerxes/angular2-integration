import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {NgConsoleDirective} from "../directives/ngconsole.directive";

declare var jQuery: any;
declare var kendoConsole: any;
declare var kendo: any;

@Component({
    moduleId: module.id,
    selector: 'my-app-kendo-ui',
    templateUrl: 'kendo-ui.component.html',
    // styles: [`
    //     .app-content { padding: 0; }
    // `],
    styleUrls: ['./kendo-ui.component.css'],
    //directives: [NgConsoleDirective],
    encapsulation: ViewEncapsulation.None
})
export class KendoUiComponent implements OnInit, AfterViewInit {

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {

        kendoConsole.log("test");

        jQuery("#touchSurface").kendoTouch({
            enableSwipe: true,
            touchstart: function(e) { kendoConsole.log("touch start"); },
            swipe: function (e) {
                kendoConsole.log("swipe " + e.direction)
            },
            tap: function (e) {
                kendoConsole.log("tap");
            },
            doubletap: function (e) {
                kendoConsole.log("double tap");
            },
            hold: function (e) {
                kendoConsole.log("hold");
            }
        });

        jQuery("#scheduler").kendoScheduler({
            date: new Date("2013/6/26"),
            startTime: new Date("2013/6/26 07:00 AM"),
            // date: new Date(),
            //height: 'auto',
            // editable: {
            //     template: jQuery("#editor").html()
            // },
            //majorTick: 180,
            minorTickCount: 6,
            timezone: "Etc/UTC",
            //selectable: true,
            views: [
                { type: "day" },
                { type: "workWeek", selected: true},
                { type: "week", selectedDateFormat: "{0:ddd,MMM dd,yyyy} - {1:ddd,MMM dd,yyyy}", selected: true, majorTick: 180 },
                "month",
                { type: "agenda", selectedDateFormat: "{0:ddd, M/dd/yyyy} - {1:ddd, M/dd/yyyy}" },
                "timeline"
            ],
            change: function (e) {
                let start = e.start;
                let end = e.end;

                console.log(kendo.format("Selection between {0:g} and {1:g}", start, end));
                console.log(jQuery('#date-time-edit'));
            },
            mobile: "phone",
            // dataSource: {
            //     batch: true,
            //     transport: {
            //         read: {
            //             url: "//demos.telerik.com/kendo-ui/service/meetings",
            //             dataType: "jsonp"
            //         },
            //         update: {
            //             url: "//demos.telerik.com/kendo-ui/service/meetings/update",
            //             dataType: "jsonp"
            //         },
            //         create: {
            //             url: "//demos.telerik.com/kendo-ui/service/meetings/create",
            //             dataType: "jsonp"
            //         },
            //         destroy: {
            //             url: "//demos.telerik.com/kendo-ui/service/meetings/destroy",
            //             dataType: "jsonp"
            //         },
            //         parameterMap: function (options, operation) {
            //             if (operation !== "read" && options.models) {
            //                 return {models: kendo.stringify(options.models)};
            //             }
            //
            //         }
            //     },
            //     schema: {
            //         model: {
            //             id: "meetingID",
            //             fields: {
            //                 meetingID: { from: "MeetingID", type: "number" },
            //                 title: { from: "Title", defaultValue: "No title", validation: { required: true } },
            //                 start: { type: "date", from: "Start" },
            //                 end: { type: "date", from: "End" },
            //                 startTimezone: { from: "StartTimezone" },
            //                 endTimezone: { from: "EndTimezone" },
            //                 description: { from: "Description" },
            //                 recurrenceId: { from: "RecurrenceID" },
            //                 recurrenceRule: { from: "RecurrenceRule" },
            //                 recurrenceException: { from: "RecurrenceException" },
            //                 roomId: { from: "RoomID", nullable: true },
            //                 attendees: { from: "Attendees",  defaultValue: [] },
            //                 isAllDay: { type: "boolean", from: "IsAllDay" }
            //             }
            //         }
            //     }
            //     // filter: {
            //     //     logic: "or",
            //     //     filters: [
            //     //         { field: "ownerId", operator: "eq", value: 1 },
            //     //         { field: "ownerId", operator: "eq", value: 2 }
            //     //     ]
            //     // }
            // },
            // resources: [
            //     {
            //         field: "roomId",
            //         dataSource: [
            //             { text: "Meeting Room 101", value: 1, color: "#6eb3fa" },
            //             { text: "Meeting Room 201", value: 2, color: "#f58a8a" }
            //         ],
            //         title: "Room"
            //     },
            //     {
            //         field: "attendees",
            //         dataSource: [
            //             { text: "Alex", value: 1, color: "#f8a398" },
            //             { text: "Bob", value: 2, color: "#51a0ed" },
            //             { text: "Charlie", value: 3, color: "#56ca85" }
            //         ],
            //         multiple: true,
            //         title: "Attendees"
            //     }
            // ]
        });
    }
}