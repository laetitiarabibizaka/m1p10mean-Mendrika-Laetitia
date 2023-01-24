import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  upload(file: File) {
		const formData: FormData = new FormData();
		formData.append('image', file);
		const req = new HttpRequest('POST', `${environment.baseUrl}/api/file-upload`, formData, {
			reportProgress: true,
			responseType: 'json'
		});
		return this.http.request(req);
	}
}
