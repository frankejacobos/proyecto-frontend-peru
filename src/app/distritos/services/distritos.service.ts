import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DistritosService {
  constructor(private http: HttpClient) {}
  getDistritos() {
    return this.http.get<any>(`${environment.API_URL}/distritos`);
  }
}
