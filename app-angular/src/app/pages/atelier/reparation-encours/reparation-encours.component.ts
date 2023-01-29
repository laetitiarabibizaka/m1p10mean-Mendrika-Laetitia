import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { ReparationVoiture } from 'src/app/shared/reparationvoiture/reparation-voiture.model';

@Component({
  selector: 'app-reparation-encours',
  templateUrl: './reparation-encours.component.html',
  styleUrls: ['./reparation-encours.component.scss']
})
export class ReparationEncoursComponent {
  constructor(
    private router: Router,
    public voitureService: VoitureService
  ) {
    this.getreparation()
  }

  ngOnInit(){

  }
  getreparation(){
    var user = JSON.parse(sessionStorage.getItem("sessionUser") as any);
    var data=user.login;
    this.voitureService.getListeVoiture(data).subscribe((res:any)=>{
      if(res) { 
        this.voitureService.listeVoitures = [];
        var repV = res['data'] as ReparationVoiture[];
        console.log("COUCOU ", repV)
        for(var i = 0; i< repV[0].listeVoiture.length; i++) {
          for(var n = 0; n < repV[0].listeVoiture[i].listeDepot.length;n++){  
            repV[0].listeVoiture[i].listeDepot[n]['voiture'] = repV[0].listeVoiture[i] 
            this.voitureService.listeDeposition.push(repV[0].listeVoiture[i].listeDepot[n]);
           }
        }
      } else {
        //alert("Erreur");
      }
    });
  }
}
