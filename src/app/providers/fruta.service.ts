import { Injectable } from '@angular/core';
import { Fruta } from '../model/fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  frutas: Fruta[];

  constructor() {
    console.log('FrutaService constructor');
    this.frutas = [];
  }

  getAll():Fruta[]{

    this.frutas = [];
    this.loadFrutas();

    return this.frutas;
  }

  /* TODO cambiar por llamada a Servicio Rest */
  private loadFrutas(){
    
    let fruta = new Fruta();

    fruta.nombre = 'Kiwi';
    fruta.precio = 3.46;
    fruta.calorias = 24;
    fruta.oferta = true;
    fruta.imagen = 'https://www.cmdsport.com/app/uploads/2017/02/beneficios-kiwi-fuente-energia.jpeg';
    fruta.descuento = 10;
    fruta.cantidad = 0;

    this.frutas.push(fruta);
    fruta = new Fruta();
    
    fruta.nombre = 'Cereza';
    fruta.precio = 1.98;
    fruta.calorias = 8;
    fruta.oferta = false;
    fruta.imagen = 'https://previews.123rf.com/images/kulyk/kulyk1604/kulyk160400003/56403431-par-de-cerezas-frutas-de-cerca-cereza-con-la-hoja-aislada-en-el-fondo-blanco-ilustraci%C3%B3n-cualitativa-ac.jpg';
    fruta.descuento = 0;
    fruta.cantidad = 0;

    this.frutas.push(fruta);
    fruta = new Fruta();
    
    fruta.nombre = 'Melón';
    fruta.precio = 7.66;
    fruta.calorias = 45;
    fruta.oferta = true;
    fruta.imagen = 'https://www.gob.mx/cms/uploads/article/main_image/63826/melon-secundaria-1.jpg';
    fruta.descuento = 8;
    fruta.cantidad = 0;

    this.frutas.push(fruta);
  }

}
