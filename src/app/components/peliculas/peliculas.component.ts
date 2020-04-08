import { Component, OnInit, DoCheck, OnDestroy, Input } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import {PeliculaService} from '../../services/pelicula.service'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit,DoCheck, OnDestroy {

  public title: string;
  public peliculas:Pelicula[];
  public favorita:Pelicula;
  public fecha:any;
  constructor(
    private _peliculaService: PeliculaService
  ) { 
    this.title = 'Componente películas';
    this.peliculas = this._peliculaService.getPeliculas();

    this.fecha = new Date(2020, 8, 17);

  }

  ngOnInit(): void {
    console.log('Hook');
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {
    console.log('Hook docheck');
  }

  click() {
    this.title = "La guerra de las galaxias";
  }

  ngOnDestroy() {
    console.log('Se va a eliminar el componente');
  }

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
