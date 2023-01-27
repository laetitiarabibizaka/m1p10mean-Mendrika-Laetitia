import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  username: string = ''
  ngOnInit(){
    var user = JSON.parse(sessionStorage.getItem("sessionUser") as any);
    var data=user.prenom;
    this.username = data
  } 
}
