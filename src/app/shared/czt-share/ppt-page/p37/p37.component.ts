import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p37',
    templateUrl: './p37.component.html',
    styleUrls: ['./p37.component.css']
})
export class P37Component implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    iframeInit($event) {
        console.log($event);
        let iframe = $event.path[0];
        // iframe.contentWindow.document.getElementTagName("html").style.overflowY = "hidden"
    }
}
