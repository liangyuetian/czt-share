import { Component, OnInit } from '@angular/core';
import * as screenfull from "screenfull";
@Component({
    selector: 'p1',
    templateUrl: './p1.component.html',
    styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {

    constructor() { }
    screenfull = screenfull;
    ngOnInit() {
    }
    screen() {
        console.log(screenfull);
        screenfull.toggle();
    }
}
