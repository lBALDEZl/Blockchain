class No {
    constructor(valor) {
      this.valor = valor;
      this.proximo = null;
    }
  }
  
  class ListaEncadeada {
    constructor() {
      this.cabeca = null;
      this.tamanho = 0;
    }
  
    adicionar(valor) {
      const novoNo = new No(valor);
      if (!this.cabeca) {
        this.cabeca = novoNo;
      } else {
        let noAtual = this.cabeca;
        while (noAtual.proximo) {
          noAtual = noAtual.proximo;
        }
        noAtual.proximo = novoNo;
      }
      this.tamanho++;
    }
  
    adicionarEmPosicao(valor, posicao) {
      if (posicao < 0 || posicao > this.tamanho) {
        console.log("Posição inválida.");
        return;
      }
      const novoNo = new No(valor);
  
      if (posicao === 0) {
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
      } else {
        let noAnterior = null;
        let noAtual = this.cabeca;
        for (let i = 0; i < posicao; i++) {
          noAnterior = noAtual;
          noAtual = noAtual.proximo;
        }
        novoNo.proximo = noAtual;
        noAnterior.proximo = novoNo;
      }
      this.tamanho++;
    }
  
    remover(valor) {
      if (!this.cabeca) {
        return;
      }
  
      if (this.cabeca.valor === valor) {
        this.cabeca = this.cabeca.proximo;
        this.tamanho--;
        return;
      }
  
      let noAtual = this.cabeca;
      let noAnterior = null;
  
      while (noAtual && noAtual.valor !== valor) {
        noAnterior = noAtual;
        noAtual = noAtual.proximo;
      }
  
      if (noAtual) {
        noAnterior.proximo = noAtual.proximo;
        this.tamanho--;
      }
    }
  
    removerPorPosicao(posicao) {
      if (posicao < 0 || posicao >= this.tamanho) {
        console.log("Posição inválida.");
        return;
      }
  
      if (posicao === 0) {
        this.cabeca = this.cabeca.proximo;
      } else {
        let noAnterior = null;
        let noAtual = this.cabeca;
        for (let i = 0; i < posicao; i++) {
          noAnterior = noAtual;
          noAtual = noAtual.proximo;
        }
        noAnterior.proximo = noAtual.proximo;
      }
      this.tamanho--;
    }
  
    procurar(valor) {
      let noAtual = this.cabeca;
      while (noAtual) {
        if (noAtual.valor === valor) {
          return noAtual;
        }
        noAtual = noAtual.proximo;
      }
      return null;
    }
  
    estaVazia() {
      return this.tamanho === 0;
    }
  
    obterTamanho() {
      return this.tamanho;
    }
  
    imprimir() {
      let resultado = [];
      let noAtual = this.cabeca;
      while (noAtual) {
        resultado.push(noAtual.valor);
        noAtual = noAtual.proximo;
      }
      console.log(resultado.join(' -> '));
    }
  }
  
  // Exemplo de uso da ListaEncadeada:
  const lista = new ListaEncadeada();
  lista.adicionar(10);
  lista.adicionar(30);
  lista.adicionar(40);
  lista.imprimir(); // Saída: 10 -> 30 -> 40
  
  lista.adicionarEmPosicao(20, 1);
  lista.imprimir(); // Saída: 10 -> 20 -> 30 -> 40
  
  lista.remover(30);
  lista.imprimir(); // Saída: 10 -> 20 -> 40
  
  lista.removerPorPosicao(2);
  lista.imprimir(); // Saída: 10 -> 20
  