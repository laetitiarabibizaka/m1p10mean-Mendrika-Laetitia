import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  hideLoader: boolean = true;
  hide: boolean = true;
  nom: string ='';
  prenom : string = '';
  dateNaissance : string = '';
  contact: string = '';
  sexe : string = '';
  login : string = '';
  mdp : string = '';
  typeutilisateur : string = '';
  error: string = '';
  constructor (
    private router: Router
  ){}
  ngOnInit(): void {
  }
  signin():void{

  }
}
