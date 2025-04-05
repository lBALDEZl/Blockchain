const SHA256 = require('crypto-js/sha256');

class Transaction {
  constructor(enderecoRemetente, enderecoDestinatario, quantia) {
    this.enderecoRemetente = enderecoRemetente;
    this.enderecoDestinatario = enderecoDestinatario;
    this.quantia = quantia;
  }
}

class Bloco {
  constructor(timestamp, transactions, hashAnterior = '') {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.hashAnterior = hashAnterior;
    this.hash = this.calculaHash();
    this.nonce = 0;
  }

  calculaHash() {
    return SHA256(this.hashAnterior + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
  }

  mineraBloco(dificuldade) {
    while (this.hash.substring(0, dificuldade) !== Array(dificuldade + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculaHash();
    }

    console.log('Bloco fechado e minerado: ' + this.hash);
  }
}

class Blockchain {
  constructor() {
    this.cadeia = [this.criaPrimeiroBloco()];
    this.dificuldade = 4;
    this.transactionsPendentes = [];
    this.recompensa = 100;
  }

  criaPrimeiroBloco() {
    return new Bloco(Date.parse('2022-01-01'), [], '0');
  }

  ultimoBloco() {
    return this.cadeia[this.cadeia.length - 1];
  }

  mineraTrasactionsPendentes(enderecoRecompensa) {
    let novoBloco = new Bloco(Date.now(), this.transactionsPendentes, this.ultimoBloco().hash);
    novoBloco.mineraBloco(this.dificuldade);
  
    console.log('Bloco minerado com sucesso!');
    this.cadeia.push(novoBloco);
  
    this.transactionsPendentes = [
      new Transaction(null, enderecoRecompensa, this.recompensa)
    ];
  }
  

  criaTransaction(transaction) {
    this.transactionsPendentes.push(transaction);
  }

  saldoEndereco(endereco) {
    let saldo = 0;

    for (const Bloco of this.cadeia) {
      for (const trans of Bloco.transactions) {
        if (trans.enderecoRemetente === endereco) {
          saldo -= trans.quantia;
        }

        if (trans.enderecoDestinatario === endereco) {
          saldo += trans.quantia;
        }
      }
    }

    return saldo;
  }

  validarCadeia() {
    for (let i = 1; i < this.cadeia.length; i++) {
      const blocoAtual = this.cadeia[i];
      const blocoAnterior = this.cadeia[i - 1];

      if (blocoAtual.hash !== blocoAtual.calculaHash()) {
        return false;
      }

      if (blocoAtual.hashAnterior !== blocoAnterior.hash) {
        return false;
      }
    }

    return true;
  }
}

let IFGoianoCoin = new Blockchain();

IFGoianoCoin.criaTransaction(new Transaction('endereco1', 'endereco2', 100));
IFGoianoCoin.criaTransaction(new Transaction('endereco2', 'endereco1', 50));

console.log('\nIniciando com a mineração do bloco...');
IFGoianoCoin.mineraTrasactionsPendentes('test-endereco');

console.log('\nSaldo é', IFGoianoCoin.saldoEndereco('test-endereco'));

console.log('\nIniciando com a mineração do bloco...');
IFGoianoCoin.mineraTrasactionsPendentes('test-endereco');

console.log('\nSaldo é', IFGoianoCoin.saldoEndereco('test-endereco'));