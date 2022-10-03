import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc2',
  templateUrl: './calc2.page.html',
  styleUrls: ['./calc2.page.scss'],
})
export class Calc2Page implements OnInit {
  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = [',', '/', '*', '+', '-'];

  constructor() {}

  ngOnInit() {}

  adicionarValor(valor: string) {
    this.caracter = this.caracteres.includes(valor);

    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }
  }

  limparMemoria() {
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  limparOperacao() {
    this.operacao = '';
    this.numero = false;
  }

  inverterValor() {
    // Alterna o numero entre positivo e negativo
  }

  apagarCaracter() {
    if (this.operacao.length > 0) {
      this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(-1);
    this.caracter = this.caracteres.includes(ultimo);

    if (!this.caracter) {
      this.numero = true;
    } else {
      this.numero = false;
    }
  }
}
