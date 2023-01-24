import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AjoutevehiculeService } from 'src/app/services/ajoutevehicule.service';

@Component({
  selector: 'app-ajoutvehicule',
  templateUrl: './ajoutvehicule.component.html',
  styleUrls: ['./ajoutvehicule.component.scss']
})
export class AjoutvehiculeComponent {
  id: string = '';
  numero: string = '';
  marque: string = '';
  model: string = '';
  proprietaire: string = '';
  @Input()
	isMultiple: boolean = false;

	@Output()
	urls=new EventEmitter<Array<string>>()
	files: File[] = [];
	fileURL: Array<string> = [];
  constructor(
    private router: Router,
    private ajouteservice: AjoutevehiculeService
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
      console.log("LOZZAAA ", file)
			// this.ajouteservice.upload(file).forEach((data: any) => {
			// 	if(data.body){
			// 		this.fileURL.push(data.body.url);
			// 		this.urls.emit(this.fileURL);
			// 	}
			// });
		});
	}
  ajoutevehicule():void{
      console.log("data----",this.numero,this.marque, this.files )
  }
}
