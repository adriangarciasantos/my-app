import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  fecha: Date;
  pi: number;
  videojuegos: Videojuego[];

  constructor() {
    console.trace('videojuegos constructor');
    this.fecha = new Date();  // 9 de Mayo de 2017
    this.pi = 3.141598;
    this.videojuegos = [];
    this.loadVideojuegos();
  }

  ngOnInit() {
    console.trace('videojuegos ngOnInit');
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
