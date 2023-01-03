import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  operaciones: Array<string> = ['Sumar', 'Restar', 'Multiplicar', 'Dividir'];

  miFormulario = {
    primerValor: 0,
    segundoValor: 0,
    operacion: '',
  };
}
