const crypto = require('crypto');

// Função para calcular o hash de um dado
function calcularHash(dado) {
  return crypto.createHash('sha256').update(dado).digest('hex');
}

// Função para construir uma árvore de Merkle
function construirArvoreMerkle(dados) {
  if (dados.length % 2 !== 0) {
    dados.push(dados[dados.length - 1]); // Se o número de dados for ímpar, duplicar o último dado.
  }

  const niveis = [dados]; // Cada nível da árvore

  while (niveis[niveis.length - 1].length > 1) {
    const nivelAtual = niveis[niveis.length - 1];
    const novoNivel = [];

    for (let i = 0; i < nivelAtual.length; i += 2) {
      const concatenacao = nivelAtual[i] + nivelAtual[i + 1];
      const hash = calcularHash(concatenacao);
      novoNivel.push(hash);
    }

    niveis.push(novoNivel);
  }

  return niveis;
}

// Dados de exemplo
const dados = [
  'Dado 1',
  'Dado 2',
  'Dado 3',
  'Dado 4'
];

// Construir a árvore de Merkle
const arvoreMerkle = construirArvoreMerkle(dados);

// Exibir a raiz da árvore de Merkle (que é o hash da raiz)
console.log('Raiz da Árvore de Merkle:', arvoreMerkle[arvoreMerkle.length - 1][0]);
