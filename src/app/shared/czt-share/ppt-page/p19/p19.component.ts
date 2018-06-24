import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p19',
    templateUrl: './p19.component.html',
    styleUrls: ['./p19.component.css'],
})
export class P19Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    fontSet = [
        {
            title: "Helvetica",
            name: "",
            text: "&",
            describe: "一种被广泛使用的传奇般的西文字体"
        },
        {
            title: "STZhongsong",
            name: "华文中宋",
            text: "&",
            describe: ""
        },
        {
            title: "SimHei",
            name: "黑体",
            text: "&",
            describe: ""
        },
        {
            title: "Microsoft Yahei",
            name: "微软雅黑",
            text: "&",
            describe: ""
        },
        {
            title: "STFangsong",
            name: "华文仿宋",
            text: "&",
            describe: ""
        },
        {
            title: "KaiTi",
            name: "楷体",
            text: "&",
            describe: ""
        },
        {
            title: "PingFang SC",
            name: "苹方",
            text: "&",
            describe: "在Mac OS X EL Capitan上，苹果为中国用户打造了一款全新中文字体--苹方，去掉了为人诟病的喇叭口，整体造型看上去更加简洁，字族共六枚字体：极细体、纤细体、细体、常规体、中黑体、中粗体。"
        },
        {
            title: "STKaiti",
            name: "华文楷体",
            text: "&",
            describe: ""
        },
        {
            title: "STHupo",
            name: "华文琥珀",
            text: "&",
            describe: ""
        },
        {
            title: "STLiti",
            name: "华文隶书",
            text: "&",
            describe: ""
        },
        {
            title: "STXingkai",
            name: "华文行楷",
            text: "&",
            describe: ""
        },
        {
            title: "YouYuan",
            name: "幼圆",
            text: "&",
            describe: ""
        },
        {
            title: "STCaiyun",
            name: "华文彩云",
            text: "&",
            describe: ""
        },
        {
            title: "FZYaoti",
            name: "方正姚体",
            text: "&",
            describe: ""
        },
        {
            title: "FZShuTi",
            name: "方正舒体",
            text: "&",
            describe: ""
        },
        {
            title: "STXinwei",
            name: "华文新魏",
            text: "&",
            describe: ""
        },
        {
            title: "SimSun",
            name: "宋体",
            text: "&",
            describe: "Win下大部分游览器的默认字体，宋体在小字号下（如12px、14px）的显示效果还可以接受"
        },
        {
            title: "Arial",
            name: "",
            text: "&",
            describe: "Win平台上默认的无衬线西文字体"
        },
        {
            title: "Tahoma",
            name: "",
            text: "&",
            describe: "十分常见的无衬线字体"
        },
        {
            title: "Verdana",
            name: "",
            text: "&",
            describe: "无衬线字体，优点在于它在小字上仍结构清晰端整、阅读辨识容易。"
        },
        {
            title: "STHeiti",
            name: "",
            text: "&",
            describe: ""
        },
        {
            title: "STXihei",
            name: "",
            text: "&",
            describe: "属于同一字体家族系列，OS X 10.6 之前的简体中文系统界面默认字体，也是目前Chrome游览器下的默认字体，有 Regular 和 Bold 两个字重，显示效果可以接受"
        }
    ]
}
