import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
		const data:any = {
			login:email,
			mdp:password
		};
		return this.http.post(`${environment.baseUrl}client/traitementLogin`,data,{});
	}
}
