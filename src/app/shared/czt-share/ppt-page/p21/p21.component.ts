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
        '图表套件组合展示',
        '雷达图、带有时间轴的图表',
        '标签云、柱状图、水波图',
        'count-down 倒计时',
        'ellipsis 文本自动省略号',
        'full-content 全屏工作区',
        // 'lodop Lodop打印',
        'number-to-chinese 人民币大写',
        'qr 二维码',
        'xlsx Excel 操作',
        'down-file 下载文件',
        'zip Zip 操作',
        '桌面通知',
        '警告提示',
    ];
    jumpPage(val) {
        this.injector.get(PptPageComponent).jumpNumber = val;
    }
}
