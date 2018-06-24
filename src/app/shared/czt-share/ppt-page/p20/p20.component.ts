import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p20',
    templateUrl: './p20.component.html',
    styleUrls: ['./p20.component.css'],
})
export class P20Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    text: string = "环形文字，circular reasoning works because"
}
