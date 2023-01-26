import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {UtilisateurService} from '../../services/utilisateur/utilisateur.service';
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
    private utilisateurService: UtilisateurService,
    private router: Router
  ){}

  ngOnInit(): void {
  }
  signin():void{
    this.utilisateurService.signup(this.nom,this.prenom,this.contact,this.login,this.mdp).subscribe(
      (data)=>{
        if(data.data){
            sessionStorage.setItem("sessionUser", JSON.stringify(data.data));
            window.location.href = `/accueil`;
        }else{
          this.hideLoader = true;
          this.error = data.error;
          window.location.href = '/signin'
        }(error)=>{
          this.router.navigate(['/signin']);
        }
      }
    )
  }
}
