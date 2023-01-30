import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar-atelier',
  templateUrl: './menubar-atelier.component.html',
  styleUrls: ['./menubar-atelier.component.scss']
})
export class MenubarAtelierComponent {
  username: string = ''
  constructor(private router: Router){}
  ngOnInit(){
    var user = JSON.parse(sessionStorage.getItem("sessionUser") as any);
    var data=user.login;
    this.username = data
  } 
  deconnexion() {
    sessionStorage.clear()
    this.router.navigate(['/']);
  }
}
