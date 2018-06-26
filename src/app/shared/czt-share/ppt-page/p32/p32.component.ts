import { Component, OnInit } from '@angular/core';
import { ZipService } from '@delon/abc';
@Component({
	selector: 'p32',
	templateUrl: './p32.component.html',
	styleUrls: ['./p32.component.css']
})
export class P32Component implements OnInit {

	constructor(private zip: ZipService) { }
	ngOnInit() { }
	data: any;
	private format(data: any) {
		const files = data.files;
		this.data = Object.keys(files).map(key => {
			return {
				name: key,
				dir: files[key].dir,
				date: files[key].date
			};
		});
	}
	url() {
		this.zip.read(`./assets/office/office.zip`).then(res => this.format(res));
	}

	change(e: Event) {
		const file = (e.target as HTMLInputElement).files[0];
		this.zip.read(file).then(res => this.format(res));
	}
}
