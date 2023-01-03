import { Component } from '@angular/core';

interface Operaciones {
  name: string;
  color: string;
  operator: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  operaciones: Array<Operaciones> = [
    { operator: '+', name: 'sumar', color: 'blue' },
    { operator: '-', name: 'restar', color: 'green' },
    { operator: '*', name: 'multiplicar', color: 'coral' },
    { operator: '/', name: 'dividir', color: 'fuchsia' },
  ];

  resultado: string | number = '';

  colorActual = '';

  miFormulario = {
    primerValor: 0,
    segundoValor: 0,
    operator: '',
  };

  operar() {
    const currentOperator = this.miFormulario.operator;

    if (!currentOperator) {
      this.resultado = 'No eligió una operación';
      return;
    }

    if(currentOperator === '/' && this.miFormulario.segundoValor === 0) {
      this.resultado = 'No se puede dividir entre 0';
      this.colorActual = 'red';
      return;
    }

    this.colorActual = this.operaciones.find(({operator}) => operator === currentOperator)?.color || 'red';

    this.resultado = eval(`${this.miFormulario.primerValor} ${currentOperator} ${this.miFormulario.segundoValor}`);
  }
}
