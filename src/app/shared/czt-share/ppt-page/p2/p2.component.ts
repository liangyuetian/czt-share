import { P3Component } from './../p3/p3.component';
import { Component, OnInit, Injector, } from '@angular/core';
import { PptPageComponent } from "../../../../routes/ppt-page/ppt-page.component";
@Component({
    selector: 'p2',
    templateUrl: './p2.component.html',
    styleUrls: ['./p2.component.css'],
})
export class P2Component implements OnInit {
    constructor(private injector: Injector, ) { }

    ngOnInit() { }
    catalog = [
        '多样的字体',
        '多重边框',
        '边框内圆角',
        '条纹背景',
        '伪随机背景',
        '自适应椭圆',
        '平行四边形',
        '菱形图片',
        '简单的饼图',
        '单测投影',
        '不规则投影',
        '染色投影',
        '毛玻璃效果',
        '折角效果',
        '文本行的斑马条纹',
        '折角效果',
        '折角效果',
    ];
    jumpPage(val) {
        this.injector.get(PptPageComponent).jumpNumber = val;
    }
}
