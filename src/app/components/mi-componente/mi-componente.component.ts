import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{
    public title: string;
    public commentary: string;
    public year: number;
    
    constructor() {
        this.title = "Hola";
        this.commentary = "commentario";
        this.year = 2020;
    }
};