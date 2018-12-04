import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  frutas: Fruta[];
  endpoint: string = 'http://localhost:3000/frutas';

  constructor(public http: HttpClient) {
    console.log('FrutaService constructor');
    this.frutas = [];
  }

  getAll():Observable<any>{
    console.trace(`FrutaService getAll ${this.endpoint}`);
    return this.http.get(this.endpoint);
  }

  crear(fruta: Fruta): Observable<any>{

    console.trace('FrutaService crear %o', fruta);

    let body = 	{
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "oferta": fruta.oferta,
      "imagen": fruta.imagen,
      "descuento": fruta.descuento,
      "cantidad": fruta.cantidad
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Conten-Type': 'application/json'
      })
    };

    return this.http.post(this.endpoint, body, httpOptions);

  }
}
