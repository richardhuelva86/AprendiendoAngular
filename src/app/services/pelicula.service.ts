import {Injectable} from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class  PeliculaService{

    public peliculas: Pelicula[];
    
    constructor() {
        this.peliculas = [
            new Pelicula('Spiderman IV', 2018, 'https://i.pinimg.com/originals/c4/41/5f/c4415f68d86beec116e21e4f224fe98d.jpg'),
            new Pelicula('Wonderwoman', 2018, 'https://i.pinimg.com/564x/ed/75/6d/ed756d1fc7c5e916ec6196e17d461f7a.jpg'),
            new Pelicula('Avengers Engame', 2018, 'https://gambar.dafunda.com/wp-content/uploads/2019/04/avengers-endgame-poster-IMAX-640x800.jpeg'),
            new Pelicula('Terminator II', 1993, 'https://cinemania.20minutos.es/img/conts/9d7ba0d_cabecera.jpg')
            ]
    }

    holaMundo() {
        return 'Hola mundo desde el sevicio de Angular';
    }

    getPeliculas() {
        return this.peliculas;
    }
}