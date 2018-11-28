import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';
import { Sexos } from 'src/app/model/persona';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {

  titulo: string;
  videojuego: Videojuego;
  persona: Persona;
  yo: Persona;
  compa: Persona;

  constructor() {
    console.trace('VideojuegoDetalleComponent constructor');
    this.titulo = 'Aprendiendo a usar clases.';
    this.videojuego = new Videojuego();

    // Llamamos al setter siempre que está definido
    this.videojuego.titulo = `Tim's World`;

    this.persona = new Persona();

    this.yo = new Persona();
    this.yo.nombre = 'Adrian';
    this.yo.apellidos = 'Garcia Santos';
    this.yo.sexo = Sexos.Masculino;
    this.yo.email = 'akirruai@gmail.com';
    this.yo.edad = 22;

    this.compa = new Persona();    
    this.compa.nombre = 'Ainara';
    this.compa.apellidos = 'Goitia Arenaza';
    this.compa.sexo = Sexos.Femenino;
    this.compa.email = 'agoitia@gmail.com';
    this.compa.edad = 25;
  }

  ngOnInit() {
    console.trace('VideojuegoDetalleComponent ngOnInit');
  }

}
