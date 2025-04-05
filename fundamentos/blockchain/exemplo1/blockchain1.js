const SHA256 = require('crypto-js/sha256');
class Bloco {
    constructor(timestamp,dados,hashBlocoAnterior = '') {
      this.hashBlocoAnterior = hashBlocoAnterior;
      this.timestamp = timestamp;
      this.dados =dados;
      this.hash = this.calculaHashBloco();
    }
  
    calculaHashBloco() {
      return SHA256(this.hashBlocoAnterior+ this.timestamp + JSON.stringify(this.dados)).toString();
    }
  }
  
  class Blockchain {
    constructor() {
      this.chain = [this.criaPrimeiroBloco()];
    }
  
    criaPrimeiroBloco() {
      return new Bloco('01/01/2022', 'Genesis block', '0');
    }
  
    ultimoBloco() {
      return this.chain[this.chain.length - 1];
    }
  
    adicionaBloco(novoBloco) {
      novoBloco.hashBlocoAnterior = this.ultimoBloco().hash;
      novoBloco.hash = novoBloco.calculaHashBloco();
      this.chain.push(novoBloco);
    }
  }
  
  let IFGoianoCoin = new Blockchain();
  IFGoianoCoin.adicionaBloco(new Bloco('02/01/2022', { quantia: 4 }));
  IFGoianoCoin.adicionaBloco(new Bloco('03/01/2022', { quantia: 8 }));
  
  console.log(JSON.stringify(IFGoianoCoin, null, 4));