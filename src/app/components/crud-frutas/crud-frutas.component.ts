import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-crud-frutas',
  templateUrl: './crud-frutas.component.html',
  styleUrls: ['./crud-frutas.component.scss']
})
export class CrudFrutasComponent implements OnInit {

  frutas: Fruta[];

  constructor( public frutaService: FrutaService) {
    this.frutas = [];
  }

  ngOnInit() {
    this.cargarFrutas();
  }

  cargarFrutas(){
    this.frutaService.getAll().subscribe(data =>{
      console.debug('Frutas recibidas %o', data);
      this.frutas = data.map(el => el);
    });
  }

}
