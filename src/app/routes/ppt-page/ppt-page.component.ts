import { Component, OnInit, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { fromEvent, timer } from "rxjs";
@Component({
    selector: 'ppt-page',
    templateUrl: './ppt-page.component.html',
    styleUrls: ['./ppt-page.component.css'],
    encapsulation: 2
})
export class PptPageComponent implements OnInit {
    @HostBinding('style.background') background = 'transparent';
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.height') height = '100vh';
    @HostBinding('style.overflow') overflow = 'hidden';
    constructor() { }

    ngOnInit() {
        fromEvent(document.getElementsByClassName("wrapper")[0], "wheel").subscribe(this.scrollHandle.bind(this));
    }
    @ViewChild("scrollBox") scrollBox: ElementRef;
    isScroll: boolean = true;
    topValue: string = "0";
    top: number = 0;
    scrollHandle($event) {
        $event.stopPropagation();
        $event.preventDefault();
        if (this.isScroll) {
            this.isScroll = false;
            if ($event.wheelDelta > 0) {
                // 向上滚动
                this.paging(1);
            }
            else {
                this.paging(-1);
            }
            timer(500).subscribe(() => {
                this.isScroll = true;
            })
        }
    }
    paging(val: number = 1) {
        // 1 或 -1
        if (this.top + val * 100 > 0) return
        this.top += val * 100;
        this.topValue = `${this.top}vh`;
    }

}
