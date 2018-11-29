import { Component, OnInit, Input } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  _fruta: Fruta;

  constructor() {
    console.trace('FrutaCardComponent constructor');

    /*
    this.fruta = new Fruta();
    this.fruta.nombre = 'Melocotón';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 3.45;
    this.fruta.oferta = true;
    this.fruta.descuento = 10;
    this.fruta.imagen = './assets/img/melocoton.jpg';
    */

  }

  ngOnInit() {
    console.trace('FrutaCardComponent ngOnInit');
  }

  comprar(event: Event){
    console.trace('FrutaCardComponent comprar');
    alert(`Lo sentimos pero de momento tenemos esta opción deshabilitada ${this.fruta.nombre}`);
    
    //TODO hacerlo con a href
    //event.preventDefault();
  }
  
  get fruta(): Fruta {
    return this._fruta;
  }

  @Input('_fruta') set fruta(value: Fruta) {
    if(value){
      this._fruta = value;
    
    }else{
      console.debug('pasa por aqui');
      this._fruta = new Fruta();
    }
    
  }

}
