import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(
		private http: HttpClient
	) { }
	login(email: string, password: string): Observable<any> {
		const data:any = {
			email:email,
			password:password
		};
		console.log(`${environment.baseUrl}/login`)
		return this.http.post(`${environment.baseUrl}/login`,data,{});
	}
}
