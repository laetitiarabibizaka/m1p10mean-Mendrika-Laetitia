import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { ReparationVoiture } from 'src/app/shared/reparationvoiture/reparation-voiture.model';
import { Voiture } from 'src/app/shared/voiture/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  selectedReparationVoiture: ReparationVoiture = new ReparationVoiture;
  reparationVoitures: ReparationVoiture[] = [];
  public listeVoitures: Voiture[] = [];

  constructor(
		private http: HttpClient
  ) { }
  
  getListeVoiture(data:any) {
    return this.http.get(`${environment.baseUrl}client/voitures/${data}`,data);
  }

  getVoitureBynumero(numero:string) {
    console.log("tonga ato ny ", numero)
    return this.http.get(`${environment.baseUrl}client/fichevoiture/${numero}`,numero as any);
  }
}
