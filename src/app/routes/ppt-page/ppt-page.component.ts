import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    HostBinding,
} from '@angular/core';
import { fromEvent, timer, Observable, interval } from 'rxjs';
import * as screenfull from "screenfull";
import { debounceTime } from 'rxjs/operators';
@Component({
    selector: 'ppt-page',
    templateUrl: './ppt-page.component.html',
    styleUrls: ['./ppt-page.component.css'],
    encapsulation: 2,
})
export class PptPageComponent implements OnInit {
    @HostBinding('style.background') background = 'transparent';
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.height') height = '100vh';
    @HostBinding('style.overflow') overflow = 'hidden';
    constructor() { }

    ngOnInit() {
        fromEvent(
            document.getElementsByClassName('wrapper')[0],
            'wheel',
        ).subscribe(this.scrollHandle.bind(this));

        let inputEvents = fromEvent(this.inputNumberRef.el as any, "input");
        let result = inputEvents.pipe(debounceTime(1000));
        result.subscribe((e: any) => {
            this.jumpNumber = e.target.value - 0;
        });
    }
    @ViewChild('scrollBox') scrollBox: ElementRef;
    @ViewChild("inputNumberRef") inputNumberRef: any;
    isScroll: boolean = true;
    topValue: string = '0';
    top: number = 0;
    pageList = [{}, {}, {}, {}, {}];

    jumpNumber: number = 0;
    screenfull = screenfull;
    screen() {
        console.log(screenfull);
        screenfull.toggle();
    }
    scrollHandle($event) {
        $event.stopPropagation();
        $event.preventDefault();
        if (this.isScroll) {
            this.isScroll = false;
            if ($event.wheelDelta) {
                //判断浏览器IE，谷歌滑轮事件
                if ($event.wheelDelta > 0) {
                    //当滑轮向上滚动时
                    this.paging(1);
                }
                if ($event.wheelDelta < 0) {
                    //当滑轮向下滚动时
                    this.paging(-1);
                }
            } else if ($event.detail) {
                //Firefox滑轮事件
                if ($event.detail > 0) {
                    //当滑轮向上滚动时
                    this.paging(1);
                }
                if ($event.detail < 0) {
                    //当滑轮向下滚动时
                    this.paging(-1);
                }
            }
            // if ($event.wheelDelta > 0) {
            //     // 向上滚动
            //     this.paging(1);
            // }
            // else {
            //     this.paging(-1);
            // }
            timer(500).subscribe(() => {
                this.isScroll = true;
            });
        }
    }
    paging(val: number = 1) {
        // 1 或 -1
        // if (this.top + val * 100 > 0) return
        // this.top += val * 100;
        // this.topValue = `${this.top}vh`;
        let s = this.jumpNumber + -val;
        if (s >= 0) {
            this.jumpNumber += -val;
        }
    }

    pagaChange(number) {
        console.log(number);
        console.log(this.inputNumberRef);
    }

    setJumpNumber(val) {
        this.jumpNumber = val;
    }

    goBack() {
        if (this.jumpNumber > 1 && this.jumpNumber <= 19) {
            this.jumpNumber = 1;
        }
        else if (this.jumpNumber > 21 && this.jumpNumber <= 34) {
            this.jumpNumber = 20;
        }
        else if (this.jumpNumber > 35) {
            this.jumpNumber = 35;
        }
    }
    sectionNode = [1, 20, 35]; // 章节节点
    // jumpSection(val) {
    //     if() {

    //     }
    // }
    // getBoundaryIndex() {

    // }
}
