import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  private _frutas: Fruta[];
  private _fruta1: Fruta;
  private _fruta2: Fruta;

  constructor() {
    console.trace('ComparadorComponent constructor');

    this.frutas = [];
    this.loadFrutas();
    this.fruta1 = this.frutas[0];
    this.fruta2 = this.frutas[1];

  }

  ngOnInit() {
    console.trace('ComparadorComponent ngOnInit');
  }

  loadFrutas(){
    
    let fruta = new Fruta();

    fruta.nombre = 'Kiwi';
    fruta.precio = 3.46;
    fruta.calorias = 24;
    fruta.oferta = true;
    fruta.imagen = 'https://www.cmdsport.com/app/uploads/2017/02/beneficios-kiwi-fuente-energia.jpeg';
    fruta.descuento = 10;

    this.frutas.push(fruta);
    fruta = new Fruta();
    
    fruta.nombre = 'Cereza';
    fruta.precio = 1.98;
    fruta.calorias = 8;
    fruta.oferta = false;
    fruta.imagen = 'https://previews.123rf.com/images/kulyk/kulyk1604/kulyk160400003/56403431-par-de-cerezas-frutas-de-cerca-cereza-con-la-hoja-aislada-en-el-fondo-blanco-ilustraci%C3%B3n-cualitativa-ac.jpg';
    fruta.descuento = 0;

    this.frutas.push(fruta);
    fruta = new Fruta();
    
    fruta.nombre = 'Melón';
    fruta.precio = 7.66;
    fruta.calorias = 45;
    fruta.oferta = true;
    fruta.imagen = 'https://www.gob.mx/cms/uploads/article/main_image/63826/melon-secundaria-1.jpg';
    fruta.descuento = 8;

    this.frutas.push(fruta);
  }

  cambiarFruta(f: Fruta){
    console.trace('ComparadorComponent cambiarFruta');
    this.fruta2 = this.fruta1;
    this.fruta1 = f;
  }
  
  public get frutas(): Fruta[] {
    return this._frutas;
  }
  public set frutas(value: Fruta[]) {
    this._frutas = value;
  }
  
  public get fruta1(): Fruta {
    return this._fruta1;
  }
  public set fruta1(value: Fruta) {
    this._fruta1 = value;
  }

  public get fruta2(): Fruta {
    return this._fruta2;
  }
  public set fruta2(value: Fruta) {
    this._fruta2 = value;
  }

}
