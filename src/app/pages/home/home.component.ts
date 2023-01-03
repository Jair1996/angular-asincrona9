import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  operaciones: Array<string> = ['Sumar', 'Restar', 'Multiplicar', 'Dividir'];

  resultado: string | number = '';

  miFormulario = {
    primerValor: 0,
    segundoValor: 0,
    operacion: '',
  };

  operar() {
    if(!this.miFormulario.operacion) {
      this.resultado="No eligió una operación";
      return;
    }

    switch (this.miFormulario.operacion) {
      case 'sumar':
        this.resultado = this.miFormulario.primerValor + this.miFormulario.segundoValor;
        break;

      case 'restar':
        this.resultado = this.miFormulario.primerValor - this.miFormulario.segundoValor;
        break;

      case 'multiplicar':
        this.resultado = this.miFormulario.primerValor * this.miFormulario.segundoValor;
        break;

      case 'dividir':
        if(this.miFormulario.segundoValor === 0) {
          this.resultado="No se puede dividir entre 0";
          return;
        }

        this.resultado = this.miFormulario.primerValor / this.miFormulario.segundoValor;
        break;

      default:
        break;
    }
  }
}
