import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { ReparationVoiture } from 'src/app/shared/reparationvoiture/reparation-voiture.model';

@Component({
  selector: 'app-listemesreparation',
  templateUrl: './listemesreparation.component.html',
  styleUrls: ['./listemesreparation.component.scss']
})
export class ListemesreparationComponent {
  constructor(
    private router: Router,
    public voitureService: VoitureService
  ) {
    if(this.voitureService.listeDeposition!=null){
      this.getreparation()
    }
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
        for(var l=0;l<repV.length;l++){
          for(var i = 0; i< repV[l].listeVoiture.length; i++) {
            for(var n = 0; n < repV[l].listeVoiture[i].listeDepot.length;n++){  
              repV[l].listeVoiture[i].listeDepot[n]['voiture'] = repV[l].listeVoiture[i] 
              this.voitureService.listeDeposition.push(repV[l].listeVoiture[i].listeDepot[n]);
             }
          }
        }
      } else {
        //alert("Erreur");
      }
    });
  }

  getStatus(etat: Number){
    console.log("SALUUUT");
      const status = ['Deposé','En cours de réparation','Terminé','Recuperé','Sortie','Facturé'];
      return status[Number(etat)-1];
  }
}
