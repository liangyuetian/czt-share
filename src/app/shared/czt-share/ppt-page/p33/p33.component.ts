import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from "ng-zorro-antd";
@Component({
    selector: 'p33',
    templateUrl: './p33.component.html',
    styleUrls: ['./p33.component.css']
})
export class P33Component implements OnInit {

    constructor(private notificationService: NzNotificationService) { }

    ngOnInit() {
    }
    text: string = "";
    noctice() {
        if ((<any>window).Notification as any) {
            this.popNotice();
        } else {
            alert('浏览器不支持Notification');
        }
    }
    popNotice() {
        let _this = this;
        if ((<any>window).Notification.permission == "granted") {
            var notification = new Notification("Hi，帅哥：", {
                body: '可以加你为好友吗？',
                icon: '//image.zhangxinxu.com/image/study/s/s128/mm1.jpg'
            });

            notification.onclick = function () {
                _this.text = '张小姐已于' + new Date().toTimeString().split(' ')[0] + '加你为好友！';
                notification.close();
            };
        }
        else if ((<any>window).Notification.permission === "denied") {
            // Notification.requestPermission((permission) => {
            //     _this.popNotice();
            // });
            _this.notificationService.create("error", "桌面通知权限被拒绝", "可能原因有：1.您的网页协议为非https,2.您禁止了通知权限")

        }
    };
}
