import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  fecha: Date;
  pi: number;
  videojuegos: Videojuego[];
  frutas: Fruta[];
  precioTotal: number;
  nombresFrutas: string[];
  frutasOferta: Fruta[];
  frutasColorRojo: Fruta[];
  primeraFrutaOferta: Fruta;
  primeraFrutaOfertaVerde: Fruta;


  constructor() {
    console.trace('videojuegos constructor');
    this.fecha = new Date();  // 9 de Mayo de 2017
    this.pi = 3.141598;
    this.videojuegos = [];
    this.loadVideojuegos();

    this.frutas = [];
    this.loadFrutas();

    // Programación funcional
    this.precioTotal = this.frutas.map(el => el.precio).reduce((c, p) => c + p);
    this.nombresFrutas = this.frutas.map(el => el.nombre);
    this.frutasOferta = this.frutas.filter(el => el.oferta);
    this.frutasColorRojo = this.frutas.filter(f => f.colores.find(c => c==='rojo'));
    this.primeraFrutaOferta = this.frutas.find(el => el.oferta);
    this.primeraFrutaOfertaVerde = this.frutas.filter(f => f.colores.find(c => c=== 'verde')).find(f=> f.oferta);
  }

  ngOnInit() {
    console.trace('videojuegos ngOnInit');
  }

  loadFrutas(): void{
    console.trace('frutas loadFrutas');
    let f = new Fruta();
    f.nombre= 'Banana';
    f.precio= 3.15;
    f.calorias= 500;
    f.colores= ['amarillo', 'negro'];
    f.oferta= true;
    f.imagen='./assets/img/banana.jpg';
    f.descuento= 10;

    this.frutas.push(f);

    f = new Fruta();
    f.nombre= 'Pera';
    f.precio= 2;
    f.calorias= 350;
    f.colores= ['amarillo', 'verde'];
    f.oferta= false;
    f.imagen='./assets/img/pera.jpg';
    f.descuento= 0;

    this.frutas.push(f);

    f = new Fruta();
    f.nombre= 'Fresa';
    f.precio= 0.75;
    f.calorias= 100;
    f.colores= ['rosa', 'rojo', 'verde'];
    f.oferta= true;
    f.imagen='./assets/img/fresa.jpg';
    f.descuento= 33;

    this.frutas.push(f);

  }

  loadVideojuegos(): void{
    console.trace('videojuegos loadVideojuegos');
    let v = new Videojuego();
    
    v.titulo = 'Mario Bros';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Donkey Kong';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Space Invaders';
    v.alquilado = false;
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Zelda';
    v.alquilado = false;
    this.videojuegos.push(v);

  }

}
