import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Utilisateur } from '../shared/utilisateur/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AjoutevehiculeService {

  constructor(private http: HttpClient) { }
  upload(file: File) {
		const formData: FormData = new FormData();
		formData.append('image', file);
		// const req = new HttpRequest('POST', `${environment.baseUrl}/api/file-upload`, formData, {
		// 	reportProgress: true,
		// 	responseType: 'json'
		// });
		// return this.http.request(req);
	}

	ajouterVehicule(numero:string,marque: string,modele:string,user: Utilisateur){
		const data:any={
			numero: numero,
			marque: marque,
			modele: modele,
			idUser: user.id,
			nom: user.nom,
			prenom: user.nom,
			login: user.login,
			contact: user.contact
		}
		return this.http.post(`${environment.baseUrl}client/ajoutVoiture`,data,{});
	}
}
