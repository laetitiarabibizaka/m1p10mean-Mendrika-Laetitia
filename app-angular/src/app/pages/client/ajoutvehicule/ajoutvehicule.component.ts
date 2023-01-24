import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ajoutvehicule():void{

  }
}
