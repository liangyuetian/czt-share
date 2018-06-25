import { Component, OnInit, Injector } from '@angular/core';
import { PptPageComponent } from "../../../../routes/ppt-page/ppt-page.component";

@Component({
    selector: 'p21',
    templateUrl: './p21.component.html',
    styleUrls: ['./p21.component.css'],
})
export class P21Component implements OnInit {
    constructor(private injector: Injector) { }
    ngOnInit() { }
    catalog = [
        'Charts 图表',
        'count-down 倒计时',
        'ellipsis 文本自动省略号',
        'full-content 全屏工作区',
        'lodop Lodop打印',
        'number-to-chinese 人民币大写',
        'qr 二维码',
        'xlsx Excel 操作',
        'zip Zip 操作',
        'down-file 下载文件',
    ];
    jumpPage(val) {
        this.injector.get(PptPageComponent).jumpNumber = val;
    }
}
