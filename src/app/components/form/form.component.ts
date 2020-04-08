import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user:any;
  public campo:any;

  constructor() { 
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    Swal.fire({text: this.user});
  }
  hasDadoClick(){
    Swal.fire({text: 'Has dado click!'});
  }

  hasSalido() {
    Swal.fire({text: 'Has salido!'});
  }

}
