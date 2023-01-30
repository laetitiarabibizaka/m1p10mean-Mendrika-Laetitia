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
  email: string = 'admin@gmail.com';
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
    this.loginService.login(this.email, this.password,this.type).subscribe(
      (data) => {
        if (data.ok) {
          sessionStorage.removeItem("sessionUser");
          sessionStorage.setItem("sessionUser", JSON.stringify(data.data));
          if(this.type == '2'){
            window.location.href = `finance/finance-acceuil`;
          }else{
            window.location.href = `atelier/reparation`;
          }
          
        } else {
          this.hideLoader = true;
          this.error = data.error;
          window.location.href = '/atelier/login'
        }
      }, (error) => {
        this.hideLoader= true
        this.error = "Votre email ou mot de passe n'est pas valider";
        this.router.navigate(['/atelier/login']);
      }
    )
  }
}
