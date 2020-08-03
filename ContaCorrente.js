import { Conta } from "./Conta.js";

//super serve para referenciar outras classes como forma de herança
export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  teste() {
    super.teste();
    console.log("teste a classe conta corrente");
  }

  //sobreescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}
