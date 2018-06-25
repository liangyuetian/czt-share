import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p23',
    templateUrl: './p23.component.html',
    styleUrls: ['./p23.component.css'],
})
export class P23Component implements OnInit {
    constructor() { }
    chartData: any[] = [];
    radarData: any[] = [];
    ngOnInit(): void {
        const radarOriginData = [
            {
                name: '个人',
                ref: 10,
                koubei: 8,
                output: 4,
                contribute: 5,
                hot: 7,
            },
            {
                name: '团队',
                ref: 3,
                koubei: 9,
                output: 6,
                contribute: 3,
                hot: 1,
            },
            {
                name: '部门',
                ref: 4,
                koubei: 1,
                output: 6,
                contribute: 5,
                hot: 7,
            },
        ];
        const radarTitleMap = {
            ref: '引用',
            koubei: '口碑',
            output: '产量',
            contribute: '贡献',
            hot: '热度',
        };
        radarOriginData.forEach((item) => {
            Object.keys(item).forEach((key) => {
                if (key !== 'name') {
                    this.radarData.push({
                        name: item.name,
                        label: radarTitleMap[key],
                        value: item[key],
                    });
                }
            });
        });
        for (let i = 0; i < 20; i += 1) {
            this.chartData.push({
                x: (new Date().getTime()) + (1000 * 60 * 30 * i),
                y1: Math.floor(Math.random() * 100) + 1000,
                y2: Math.floor(Math.random() * 100) + 10,
            });
        }
    }
}
