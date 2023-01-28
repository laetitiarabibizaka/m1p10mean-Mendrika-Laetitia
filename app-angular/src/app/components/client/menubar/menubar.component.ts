import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  username: string = ''
  constructor(private router: Router){}
  ngOnInit(){
    var user = JSON.parse(sessionStorage.getItem("sessionUser") as any);
    var data=user.prenom;
    this.username = data
  } 
  deconnexion() {
    sessionStorage.clear()
    this.router.navigate(['/']);
  }
}
