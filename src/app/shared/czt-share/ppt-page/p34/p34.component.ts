import { NzNotificationService } from 'ng-zorro-antd';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'p34',
    templateUrl: './p34.component.html',
    styleUrls: ['./p34.component.css']
})
export class P34Component implements OnInit {


    ngOnInit() {
    }
    constructor(private notification: NzNotificationService) {
    }

    createBasicNotification(template: TemplateRef<{}>): void {
        this.notification.template(template);
    }
}
