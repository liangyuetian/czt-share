import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p24',
    templateUrl: './p24.component.html',
    styleUrls: ['./p24.component.css'],
})
export class P24Component implements OnInit {
    constructor() { }
    percent = 87;
    tags: any[] = [];
    ngOnInit(): void {
        setInterval(() => this.percent = parseInt((Math.random() * 100).toString(), 10), 1000);
        for (let i = 0; i < 500; i += 1) {
            this.tags.push({
                name: `TagClout-Title-${i}`,
                value: Math.floor((Math.random() * 50)) + 20,
            });
        }
        this.tags.push({ name: `我最大`, value: 1500 });
    }
}
