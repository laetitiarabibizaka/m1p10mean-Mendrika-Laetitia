import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { Deposition } from 'src/app/shared/deposition/deposition.model';
import { Utilisateur } from 'src/app/shared/utilisateur/utilisateur.model';
import { Voiture } from 'src/app/shared/voiture/voiture.model';

@Component({
  selector: 'app-fiche-reparation',
  templateUrl: './fiche-reparation.component.html',
  styleUrls: ['./fiche-reparation.component.scss']
})
export class FicheReparationComponent {
  deposition : Deposition = new Deposition()
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
      console.log("indroooo ",this.numero," --- ",depot);
        this.voitureService.getVoitureAdminBynumero(this.numero).subscribe((res:any)=>{
          if(res) {
            let value = res['data']
            console.log("coucous ", value[0].listeVoiture.listeDepot)
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
    const status = ['En cours','Termniné'];
    return status[Number(etat)-1];
  }

  assignerReparation(){
    var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
    let utilisateur: Utilisateur = <Utilisateur>JSON.parse(sessionStorage.getItem("sessionUser") as any);
    console.log("Utilisateur ",utilisateur)
    this.voitureService.validerDepositionVoiture(utilisateur.login,this.numero,this.deposition.date).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/atelier/fichereparation',this.deposition.commentaire,this.deposition.date,this.numero]);
    },(error) => {
      console.log(error);
        this.router.navigate(['/']);
      });
  }

  ajouterReparation(){
    var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
    let utilisateur: Utilisateur = <Utilisateur>JSON.parse(sessionStorage.getItem("sessionUser") as any);
    console.log("Utilisateur ",utilisateur)
    this.voitureService.ajouterReparation(this.numero,this.deposition.date,this.desce,this.pu,this.qt).subscribe((res)=>{
      console.log(res)
      this.fichevoiture();
      //this.router.navigate(['/atelier/fichereparation',this.deposition.commentaire,this.deposition.date,this.numero]);
    },(error) => {
      console.log(error);
        this.router.navigate(['/']);
      });
  }
  terminerReparation(){
    var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
    let utilisateur: Utilisateur = <Utilisateur>JSON.parse(sessionStorage.getItem("sessionUser") as any);
    console.log("Utilisateur ",utilisateur)
    this.voitureService.terminerReparation(this.numero,this.deposition.date,this.desce).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/atelier/fichereparation',this.deposition.commentaire,this.deposition.date,this.numero]);
    },(error) => {
      console.log(error);
        this.router.navigate(['/']);
      });
  }
  
}
