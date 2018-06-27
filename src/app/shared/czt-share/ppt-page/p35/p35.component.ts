import { Component, OnInit, Injector } from '@angular/core';
import { PptPageComponent } from "../../../../routes/ppt-page/ppt-page.component";
@Component({
    selector: 'p35',
    templateUrl: './p35.component.html',
    styleUrls: ['./p35.component.css']
})
export class P35Component implements OnInit {

    constructor(private injector: Injector) { }

    ngOnInit() {
    }

    pptC: PptPageComponent = this.injector.get(PptPageComponent);
}
