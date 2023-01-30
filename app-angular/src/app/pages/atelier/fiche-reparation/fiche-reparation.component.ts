import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { Deposition } from 'src/app/shared/deposition/deposition.model';
import { Utilisateur } from 'src/app/shared/utilisateur/utilisateur.model';
import { Voiture } from 'src/app/shared/voiture/voiture.model';
import { ReparationVoiture } from 'src/app/shared/reparationvoiture/reparation-voiture.model';
import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-fiche-reparation',
  templateUrl: './fiche-reparation.component.html',
  styleUrls: ['./fiche-reparation.component.scss']
})
export class FicheReparationComponent {
  deposition : Deposition = new Deposition()
  loginClient: string = ''
  role: string = ''
  numero : string = ''
  desce : string =''
  pu : Number = 0.0
  qt : Number = 0.0
  montantTotal : Number = 0.0
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
                  this.montantTotal=this.montantTotal+value[0].listeVoiture.listeDepot[i].listeRep[v].montant;
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

  getStatus(etat: Number){
      const status = ['Deposé','En cours de réparation','Terminé','Recuperé','Sortie','Facturé'];
      return status[Number(etat)-1];
  }

  assignerReparation(){
    var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
    let utilisateur: Utilisateur = <Utilisateur>JSON.parse(sessionStorage.getItem("sessionUser") as any);
    console.log("Utilisateur ",utilisateur)
    this.voitureService.validerDepositionVoiture(utilisateur.login,this.numero,this.deposition.date).subscribe((res)=>{
      console.log(res)
      this.fichevoiture();
      //this.router.navigate(['/atelier/fichereparation',this.deposition.commentaire,this.deposition.date,this.numero]);
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
  terminerReparation(desce: string){
    var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
    let utilisateur: Utilisateur = <Utilisateur>JSON.parse(sessionStorage.getItem("sessionUser") as any);
    console.log("Utilisateur ",utilisateur)
    this.voitureService.terminerReparation(this.numero,this.deposition.date,desce).subscribe((res)=>{
      console.log(res)
      this.fichevoiture();
      //this.router.navigate(['/atelier/fichereparation',this.deposition.commentaire,this.deposition.date,this.numero]);
    },(error) => {
      console.log(error);
        this.router.navigate(['/']);
      });
  }

  cloturerDeposition(){
    var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
    this.voitureService.cloturerDepot(this.numero,this.deposition.date).subscribe((res)=>{
      this.fichevoiture();
      this.voitureService.envoyerEmail(this.loginClient).subscribe((res)=>{
        console.log("Email envoyé");
      },(error)=>{
        console.log(error);
      });
    },(error)=>{
      console.log(error);

    });
  }

  genererFacture(){
    var user=JSON.stringify(sessionStorage.getItem("sessionUser"));
    this.voitureService.genererFacture(this.numero,this.deposition.date,user['login'],this.montantTotal).subscribe((res)=>{
      this.router.navigate(['/atelier/listeFactures']);
    },(error)=>{
      console.log(error);
    });
  }
  
}
