import { Component, OnInit, Injector } from '@angular/core';
import { PptPageComponent } from "../../../../routes/ppt-page/ppt-page.component";

@Component({
    selector: 'p36',
    templateUrl: './p36.component.html',
    styleUrls: ['./p36.component.css']
})
export class P36Component implements OnInit {

    constructor(private injector: Injector) { }
    ngOnInit() { }
    catalog = [
        '语音识别',
    ];
    jumpPage(val) {
        this.injector.get(PptPageComponent).jumpNumber = val;
    }
}
