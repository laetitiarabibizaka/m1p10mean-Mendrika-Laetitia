import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input()
	isMultiple: boolean = false;

	@Output()
	urls=new EventEmitter<Array<string>>()
	files: File[] = [];
	fileURL: Array<string> = [];
	constructor(
		private uploader: ImageService
	) { }

	ngOnInit(): void {
	}
	onSelect(event: any) {
		if (!this.isMultiple) {
			this.files = [];
			this.fileURL = [];
		}
		let addedFiles = event.addedFiles;
		addedFiles.forEach((file: File) => {
			this.files.push(file);
			this.uploader.upload(file).forEach((data: any) => {
				if(data.body){
					this.fileURL.push(data.body.url);
					this.urls.emit(this.fileURL);
				}
			});
		});
	}
}
