import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent {
  hideLoader: boolean = true;
  hide: boolean = true;
  email: string = '';
  password: string = '';
  error: string = '';
  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(): void {
    this.hideLoader = false;
    this.utilisateurService.login(this.email, this.password).subscribe(
      (data) => {
        if (data.ok) {
          sessionStorage.setItem("sessionUser", JSON.stringify(data.data));
          window.location.href = `/accueil`;
        } else {
          this.hideLoader = true;
          this.error = data.error;
          window.location.href = '/'
        }
      }, (error) => {
        this.router.navigate(['/']);
      }
    )
  }
}
