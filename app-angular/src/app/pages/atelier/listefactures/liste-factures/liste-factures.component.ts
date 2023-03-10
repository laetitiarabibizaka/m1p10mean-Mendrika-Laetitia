import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { ReparationVoiture } from 'src/app/shared/reparationvoiture/reparation-voiture.model';
import { Facture } from 'src/app/shared/facture/facture.model';

@Component({
  selector: 'app-liste-factures',
  templateUrl: './liste-factures.component.html',
  styleUrls: ['./liste-factures.component.scss']
})
export class ListeFacturesComponent {
  constructor(
    private router: Router,
    public voitureService: VoitureService
  ) {
    this.getListeFacture()
  }

  ngOnInit(){

  }

  getListeFacture(){
    var user = JSON.parse(sessionStorage.getItem("sessionUser") as any);
    this.voitureService.getListeVoitureTotal().subscribe((res:any)=>{
      if(res){
        this.voitureService.listeVoitures = [];
        this.voitureService.listeFacture = [];
        var repV = res['data'] as ReparationVoiture[];
        for(var l=0;l<repV.length;l++){
          for(var i = 0; i< repV[l].listeVoiture.length; i++) {
            for(var n = 0; n < repV[l].listeVoiture[i].listeDepot.length;n++){  
              repV[l].listeVoiture[i].listeDepot[n]['voiture'] = repV[l].listeVoiture[i] 
              this.voitureService.listeDeposition.push(repV[l].listeVoiture[i].listeDepot[n]);
              if(repV[l].listeVoiture[i].listeDepot[n].facture!=null){
                var facture: Facture = repV[l].listeVoiture[i].listeDepot[n].facture;
                facture.numero=repV[l].listeVoiture[i].numero;
                facture.dateDepot=repV[l].listeVoiture[i].listeDepot[n].date;
                this.voitureService.listeFacture.push(facture);
              }
             }
          }
        }
      }
    },(error)=>{
      console.log(error);
    });
  }
  
  getStatus(etat: Number){
    const status = ['Non payée','Payée'];
    return status[Number(etat)-1];
  }

  payerFacture(numero: string, dateDepot: Date){
    this.voitureService.payerFacture(numero,dateDepot).subscribe((res:any)=>{
      if(res){
        this.getListeFacture();
      }
    },(error)=>{
      console.log(error);
    });
  }
}
