import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { addMinutes } from 'date-fns';
@Component({
    selector: 'p25',
    templateUrl: './p25.component.html',
    styleUrls: ['./p25.component.css'],
})
export class P25Component implements OnInit {
    constructor(private msg: NzMessageService) { }

    ngOnInit() { }
    config: any = {
        template: `$!s-ext!秒`,
        leftTime: 30
    };
    target = addMinutes(new Date, 10);
    onEnd() {
        this.msg.success('finised');
    }
}
