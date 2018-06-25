import { Component, OnInit } from '@angular/core';
import * as format from 'date-fns/format';
@Component({
    selector: 'p22',
    templateUrl: './p22.component.html',
    styleUrls: ['./p22.component.css'],
})
export class P22Component implements OnInit {
    constructor() { }
    visitData: any[] = [];
    ngOnInit(): void {
        const beginDay = new Date().getTime();
        for (let i = 0; i < 20; i += 1) {
            this.visitData.push({
                x: format(new Date(beginDay + (1000 * 60 * 60 * 24 * i)), 'YYYY-MM-DD'),
                y: Math.floor(Math.random() * 100) + 10,
            });
        }
    }
}
