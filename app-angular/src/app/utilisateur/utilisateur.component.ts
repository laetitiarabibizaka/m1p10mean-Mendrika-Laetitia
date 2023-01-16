import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCardActions } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';

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
  //  private loginService: RestoLoginService,
    //private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(): void {
    this.hideLoader = false;
    // this.loginService.login(this.email, this.password).subscribe(
    //   (data) => {
    //     if (data.ok) {
    //       sessionStorage.setItem("resto-token", data.token);
    //       window.location.href = `/resto/accueil`;
    //     } else {
    //       this.hideLoader = true;
    //       this.error = data.error;
    //     }
    //   }, (error) => {
    //     this.router.navigate(['/error']);
    //   }
    // )
  }
}
