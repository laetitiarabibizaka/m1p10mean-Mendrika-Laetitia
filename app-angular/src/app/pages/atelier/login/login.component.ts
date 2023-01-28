import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hideLoader: boolean = true;
  hide: boolean = true;
  email: string = 'randrialita@gmail.com';
  password: string = 'mdp123';
  type: string = '1';
  error: string = '';
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(): void {
    console.log("tonggaaaa atoo ")
    window.location.href = `atelier/reparation`;
    this.loginService.login(this.email, this.password).subscribe(
      (data) => {
        if (data.ok) {
          sessionStorage.setItem("sessionUser", JSON.stringify(data.data));
          window.location.href = `atelier/atelierreparation`;
        } else {
          this.hideLoader = true;
          this.error = data.error;
          window.location.href = '/'
        }
      }, (error) => {
        this.hideLoader= true
        this.error = "Votre email ou mot de passe n'est pas valider";
        this.router.navigate(['/']);
      }
    )
  }
}
