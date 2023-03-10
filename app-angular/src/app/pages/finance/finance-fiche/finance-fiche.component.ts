import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { Deposition } from 'src/app/shared/deposition/deposition.model';

@Component({
  selector: 'app-finance-fiche',
  templateUrl: './finance-fiche.component.html',
  styleUrls: ['./finance-fiche.component.scss']
})
export class FinanceFicheComponent {
  deposition : Deposition = new Deposition()
  loginClient: string = ''
  role: string = ''
  numero : string = ''
  desce : string =''
  pu : Number = 0.0
  qt : Number = 0.0
  constructor(
    private activatedRoute: ActivatedRoute,
    public voitureService : VoitureService,
    private router: Router
  ){
    this.fichevoiture()
  }
  fichevoiture(){
    this.activatedRoute.params.subscribe(params => {
      this.numero = params['numero'];
      let date = params['date'];
      let depot = params['depot'];
      var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
      this.role = user['role' as any];
      console.log("ROOOLLE ",this.role)
      console.log("indroooo ",this.numero," --- ",depot);
        this.voitureService.getVoitureAdminBynumero(this.numero).subscribe((res:any)=>{
          if(res) {
            let value = res['data']
            console.log("coucous ", value[0].listeVoiture.listeDepot)
            this.loginClient = value[0].login;
            for(var i = 0 ; i< value[0].listeVoiture.listeDepot.length;i++){
              
              if(value[0].listeVoiture.listeDepot[i].commentaire == depot && value[0].listeVoiture.listeDepot[i].date ==  date ){
                this.deposition = value[0].listeVoiture.listeDepot[i]
                console.log("coucou ", value[0].listeVoiture.listeDepot[i].commentaire) 
                this.voitureService.listeReparation = []; 
                for(var v=0;v<value[0].listeVoiture.listeDepot[i].listeRep.length;v++){
                  this.voitureService.listeReparation.push(value[0].listeVoiture.listeDepot[i].listeRep[v]);
                }         
              }
            }
          } else {
            //alert("Erreur");
          }
        });
    });
  }

  getStatusRep(etat: Number){
    const status = ['En cours','Termnin??'];
    return status[Number(etat)-1];
  }

  getStatus(etat: Number){
      const status = ['Depos??','En cours de r??paration','Termin??','Recuper??','Sortie','Factur??'];
      return status[Number(etat)-1];
  }

}
