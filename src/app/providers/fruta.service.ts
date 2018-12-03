import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

}
