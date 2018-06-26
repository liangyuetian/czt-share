import { Component, OnInit } from '@angular/core';
import { SimpleTableColumn, XlsxService } from '@delon/abc';
@Component({
    selector: 'p30',
    templateUrl: './p30.component.html',
    styleUrls: ['./p30.component.css'],
})
export class P30Component implements OnInit {
    constructor(private xlsx: XlsxService) { }

    ngOnInit() { }
    data: any;
    url() {
        this.xlsx.import(`./assets/xlsx/js 字符串方法.xlsx`).then(res => this.data = res);
    }

    change(e: Event) {
        const node = e.target as HTMLInputElement;
        this.xlsx.import(node.files[0]).then(res => this.data = res);
        node.value = '';
    }
    users: any[] = Array(100)
        .fill({})
        .map((item: any, idx: number) => {
            return {
                id: idx + 1,
                name: `name ${idx + 1}`,
                age: Math.ceil(Math.random() * 10) + 20,
            };
        });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id', type: 'checkbox' },
        { title: '姓名', index: 'name' },
        { title: '年龄', index: 'age' },
    ];

    download() {
        const data = [this.columns.map(i => i.title)];
        this.users.forEach(i =>
            data.push(this.columns.map(c => i[c.index as string])),
        );
        this.xlsx.export({
            sheets: [
                {
                    data: data,
                    name: 'sheet name',
                },
            ],
        });
    }
}
