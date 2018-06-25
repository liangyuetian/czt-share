import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p29',
    templateUrl: './p29.component.html',
    styleUrls: ['./p29.component.css'],
})
export class P29Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    currentHero = {
        name: 'https://ng-alain.com/'
    }
    qrInputValues = 'https://ng-alain.com/';
    values = 'https://ng-alain.com/';
    background = 'white';
    backgroundAlpha = 1.0;
    foreground = 'black';
    foregroundAlpha = 1.0;
    level = 'L';
    mime = 'image/png';
    padding = 10;
    size = 220;

    change(dataURL: string) {
        console.log(dataURL);
    }
}
