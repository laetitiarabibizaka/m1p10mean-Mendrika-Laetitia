import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import { DepenseModel } from 'src/app/shared/depense.model';

@Component({
  selector: 'app-liste-depense',
  templateUrl: './liste-depense.component.html',
  styleUrls: ['./liste-depense.component.scss']
})
export class ListeDepenseComponent {
  listedepense : DepenseModel[] = []
  constructor(private router: Router,private utilisateurService: UtilisateurService){
    this.listeDepense()
  }
  listeDepense(){
    this.utilisateurService.getListeDepense().subscribe((res:any)=>{
      if(res) { 
        var repV = res['data'];
        for(var i = 0; i< repV.length;i++){
          console.log(repV[i])
        
          this.listedepense.push(repV[i])
        }
      } else {
        //alert("Erreur");
      }
    });
  }
}
