import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    HostBinding,
} from '@angular/core';
import { fromEvent, timer } from 'rxjs';
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
    }
    @ViewChild('scrollBox') scrollBox: ElementRef;
    isScroll: boolean = true;
    topValue: string = '0';
    top: number = 0;
    pageList = [{}, {}, {}, {}, {}];

    jumpNumber: number = 0;

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
        console.log(this.jumpNumber);
    }

    setJumpNumber(val) {
        this.jumpNumber = val;
    }

}
