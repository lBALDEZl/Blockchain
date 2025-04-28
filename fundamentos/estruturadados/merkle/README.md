# Introdução
Uma árvore de Merkle é uma estrutura de dados usada para verificar a integridade e autenticidade de conjuntos de dados, como blocos de dados ou transações, em sistemas de armazenamento ou transmissão. Ela é nomeada em homenagem ao matemático Ralph Merkle, que a propôs em 1979.
As árvores de Merkle têm várias aplicações, sendo mais notáveis em sistemas de blockchain, onde garantem a segurança e a integridade das transações e blocos. Elas também são usadas em sistemas de armazenamento distribuído e em verificações de autenticidade de dados em sistemas de segurança digital. Essas árvores permitem uma maneira eficiente e confiável de verificar grandes volumes de dados sem a necessidade de transferir ou armazenar todos os dados originais.

![Merkle Tree](https://github.com/user-attachments/assets/6eda3764-2127-4445-999c-2ad984702551)


## Para que serve
A árvore de Merkle é usada para verificar a integridade dos dados da seguinte maneira:

- Quando alguém deseja verificar a integridade de um conjunto de dados, como um bloco em uma blockchain, apenas o hash raiz da árvore é necessário. Isso é especialmente útil em sistemas distribuídos, como blockchain, onde você não deseja baixar todos os dados originais.

- A pessoa que deseja verificar os dados recebe o hash raiz de uma fonte confiável, como um bloco em uma blockchain. Em seguida, ela solicita hashes adicionais, se necessário, para verificar os blocos de dados específicos que deseja.

- A partir dos hashes recebidos, ela pode reconstruir a árvore de Merkle e comparar o hash raiz resultante com o hash raiz fornecido pela fonte confiável. Se os hashes coincidirem, isso garante a integridade dos dados, porque qualquer alteração nos dados originais teria resultado em diferentes hashes intermediários e, finalmente, em um hash raiz diferente.

## Como funciona

- Divisão dos Dados: Os dados são divididos em pedaços ou blocos. Em sistemas de blockchain, esses dados podem ser transações em um bloco ou pedaços de informações em um arquivo.
- 
Cálculo dos Hashes: Cada bloco de dados é submetido a uma função de hash, como SHA-256 (Secure Hash Algorithm 256 bits), que gera um valor de hash fixo e único para cada bloco. Os hashes são calculados para todos os blocos.

- Criação da Árvore: Os hashes calculados são organizados em níveis hierárquicos em uma estrutura de árvore binária. O nível mais baixo da árvore contém os hashes dos blocos de dados individuais. Os níveis superiores contêm hashes das combinações dos hashes dos níveis inferiores.

- Hash Raiz: O nó raiz da árvore, que é chamado de "hash raiz" ou "root hash", é o valor hash resultante de todos os hashes combinados nos níveis superiores da árvore.

Vamos ver o exemplo do código em Javascript

```javascript
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
  'Dado 4',
];

// Construir a árvore de Merkle
const arvoreMerkle = construirArvoreMerkle(dados);

// Exibir a raiz da árvore de Merkle (que é o hash da raiz)
console.log('Raiz da Árvore de Merkle:', arvoreMerkle[arvoreMerkle.length - 1][0]);
```

Neste exemplo:

1. A função `calcularHash` usa o algoritmo de hash SHA-256 para calcular o hash de um dado.

2. A função `construirArvoreMerkle` recebe uma matriz de dados, organiza-os em níveis (ou camadas) e calcula os hashes de cada nível. No final, ele retorna a árvore de Merkle.

3. Os dados de exemplo são fornecidos na matriz `dados`.

4. A árvore de Merkle é construída chamando `construirArvoreMerkle(dados)`.

5. O hash raiz da árvore de Merkle (que representa a integridade dos dados) é obtido a partir da última camada da árvore e impresso no console.

Lembre-se de que este é apenas um exemplo simples de uma árvore de Merkle. Em aplicações reais, você usaria uma biblioteca de criptografia confiável e pode precisar lidar com uma quantidade muito maior de dados. Além disso, as árvores de Merkle são frequentemente usadas em contextos de criptomoedas e segurança de blockchain para verificar a integridade de transações e blocos.

## Para testar
1. Instale o Nodejs
2. Instale o VS Code
3. Abra um novo Terminal e execute na pasta do código este comando `npm install crypto` para instala o pacote que irá auxiliar no desenvolvimento da estrutura
4. Execute o comando `node merkle.js`. Qual será o resultado?
5. Agora modifique na linha 37 `const dados = [  'Dado 1',  'Dado 2',  'Dado 3',  'Dado 4'];` para `const dados = [  'Dado 1',  'Dado 2',  'Dado 3',  'Dado 4', 'Dado 5'];` e execute novamente. qual será o resultado?

```
Primeira execução
Raiz da Árvore de Merkle: a1466586b8fb4e7227d439ec06199a0e7d2a9d2571eff392b19f43d4ffeed66f

Segunda execução
Raiz da Árvore de Merkle: ca47e460e0575d0642d1b53a81a657132f2f3102af1de114de6ace617f8c293e
```

Como podemos ver modificando mesmo que levemente a estrutura tudo muda o resultado do hash será completamente diferente.

## Referências bibliográficas
Jing, S., Zheng, X., & Chen, Z. (2021). Review and Investigation of Merkle Tree’s Technical Principles and Related Application Fields. 2021 International Conference on Artificial Intelligence, Big Data and Algorithms (CAIBDA), 86-90. https://doi.org/10.1109/CAIBDA53561.2021.00026.

Liu, H., Luo, X., Liu, H., & Xia, X. (2021). Merkle Tree: A Fundamental Component of Blockchains. 2021 International Conference on Electronic Information Engineering and Computer Science (EIECS), 556-561. https://doi.org/10.1109/EIECS53707.2021.9588047.
