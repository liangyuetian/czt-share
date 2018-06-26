import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'p31',
    templateUrl: './p31.component.html',
    styleUrls: ['./p31.component.css'],
})
export class P31Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

    data = {
        otherdata: 1,
        time: new Date()
    };
}
