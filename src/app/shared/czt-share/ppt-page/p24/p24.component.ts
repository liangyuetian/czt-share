import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p24',
    templateUrl: './p24.component.html',
    styleUrls: ['./p24.component.css'],
})
export class P24Component implements OnInit {
    constructor() { }
    tags: any[] = [];
    salesData: any[] = [];
    ngOnInit(): void {
        for (let i = 0; i < 500; i += 1) {
            this.tags.push({
                name: `TagClout-Title-${i}`,
                value: Math.floor((Math.random() * 50)) + 20,
            });
        }
        this.tags.push({ name: `我最大`, value: 1500 });
        for (let i = 0; i < 12; i += 1) {
            this.salesData.push({
                x: `${i + 1}月`,
                y: Math.floor(Math.random() * 1000) + 200
            });
        }
    }
}
