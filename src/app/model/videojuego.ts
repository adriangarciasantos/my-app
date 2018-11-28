export class Videojuego {

    titulo: string;
    imagen: string;
    descripcion: string;
    anyo: number;           // Año publicación
    precio: number;
    alquilado: boolean;

    constructor(){
        this.titulo = `Tim's World`;
        this.imagen = 'assets/img/videogame_cover.png';
        this.descripcion = 'Lorem ipsum...';
        this.anyo = 0;
        this.precio = 0;
        this.alquilado = false;
    }

}
