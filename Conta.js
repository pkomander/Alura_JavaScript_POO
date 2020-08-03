//Classe abstrata
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    //throw lança um erro para o console
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deveria instancia um objeto do tipo conta Diretamente, pois essa é uma classe abstrata"
      );
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  //Método abstrato
  sacar(valor) {
    throw new Error("O método Sacar da conta é abstrato");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  //early return
  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  teste() {
    console.log("teste a classe conta conta");
  }
}
