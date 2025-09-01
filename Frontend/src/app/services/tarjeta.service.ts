import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarjeta {
  id?: number;
  titular: string;
  numeroTarjeta: string;
  fechaExpiracion: string;
  cvv: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl = 'https://localhost:44339/';
  private myApiUrl = 'api/Tarjeta/';
  constructor(private http: HttpClient) { }
  getListCards(): Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(this.myAppUrl + this.myApiUrl);
  }
  deleteCard(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
  saveCard(tarjeta: any): Observable<Tarjeta> {
    return this.http.post<Tarjeta>(this.myAppUrl + this.myApiUrl, tarjeta);
  }
  updateCard(id: number, tarjeta: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }
}
