import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mostrarPeliculas: boolean;
  public title = 'Curso de Angular de Victor Robles';
  constructor() {
    this.mostrarPeliculas = true;
    this.title = 'Curso de angulaaaar';
  }
  ocultar() {
    this.mostrarPeliculas = false
  }
}
