import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ReparationVoiture } from 'src/app/shared/reparationvoiture/reparation-voiture.model';
import { Voiture } from 'src/app/shared/voiture/voiture.model';
import { Deposition } from 'src/app/shared/deposition/deposition.model';
import { ReparationModel } from 'src/app/shared/reparation/reparation.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  selectedReparationVoiture: ReparationVoiture = new ReparationVoiture;
  reparationVoitures: ReparationVoiture[] = [];
  public listeVoitures: Voiture[] = [];
  public listeDeposition : Deposition[] = [];
  public listeReparation : ReparationModel[] = [];

  constructor(
		private http: HttpClient
  ) { }
  
  getListeVoiture(data:any) {
    return this.http.get(`${environment.baseUrl}client/voitures/${data}`,data);
  }

  getListeVoitureTotal(){
    var data =  {};
    return this.http.get(`${environment.baseUrl}admin/voitures/`,data);
  }

  getVoitureBynumero(numero:string) {
    console.log("tonga ato ny ", numero)
    return this.http.get(`${environment.baseUrl}client/fichevoiture/${numero}`,numero as any);
  }
  getVoitureAdminBynumero(numero:string) {
    console.log("tonga ato ny ", numero)
    return this.http.get(`${environment.baseUrl}admin/voiture/${numero}`,numero as any);
  }
  deposerVoiture(data:any){
    return this.http.put(`${environment.baseUrl}client/deposerReparation/`,data)
  }

  getListeVoitureCritere(user:string,matricule:string){
    return this.http.get(`${environment.baseUrl}client/recherchevoiture/${user}/${matricule}`,{});
  }

  validerDepositionVoiture(login: string,numero: string,dateDepot: Date){
    var data : any = {
      login: login,
      numero: numero,
      dateDepot: dateDepot
    }
    console.log("dataaa ",data)
    return this.http.put(`${environment.baseUrl}admin/receptionDepot`,data);
  }

  ajouterReparation(numero: string,dateDepot: Date,desce: string,pu: Number,qte: Number){
    var data: any = {
      numero: numero,
      dateDepot: dateDepot,
      desce: desce,
      pu: pu,
      qte: qte
    }
    console.log("DATA="+JSON.stringify(data));
    return this.http.put(`${environment.baseUrl}admin/ajoutReparation`,data);
  }

  terminerReparation(numero: string,dateDepot: Date,desce: string){
    var data: any = {
      numero: numero,
      dateDepot: dateDepot,
      desce: desce
    }
    return this.http.put(`${environment.baseUrl}admin/terminerReparation`,data);
  }

  changerEtatDeposition(numero: string, dateDepot: Date,etat: Number){
    var data: any = {
      numero: numero,
      dateDepot: dateDepot,
      etat: etat
    }
    return this.http.put(`${environment.baseUrl}admin/changerEtatDeposition`,data);
  }

  envoyerEmail(login: string){
    return this.http.post(`${environment.baseUrl}admin/envoieMail`,{login: login});
  } 

  cloturerDepot(numero: string, dateDepot: Date){
    var data: any = {
      numero: numero,
      dateDepot: dateDepot
    }
    return this.http.put(`${environment.baseUrl}admin/cloturerDepot`,data);
  }
}
