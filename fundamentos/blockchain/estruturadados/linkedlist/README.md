# Linked List - Listas Encadeadas

É uma estrutura de dados linear usada para organizar e armazenar uma coleção de elementos chamados "nós". 

Cada nó contém dois elementos principais:

**Dados**: é a parte do nó onde os elementos ou informações são realmente guardados.

**Referência (ou link)**: é uma referência do endereço de memória para o próximo nó na sequência, criando assim a "ligação" entre os nós. 

## Para que serve uma Linked List?

Elas servem como uma estrutura de dados fundamental em muitos programas e sistemas de computação. São estruturas dinâmicas, p´raticas e versateis.

Aqui vai alguns exemplos de utilização:

- Histórico de Navegação em Navegadores da Web
- Gerenciamento de Memória em Linguagens de Programação
- Listas de Tarefas em Aplicativos
- Fila de Impressão em Impressoras
- Sistemas de Gerenciamento de Arquivos
- Histórico de ações em editores de texto.
- Histórico de comandos
- Histórico de listas de reprodução streaming
- Implementação de estruturas de dados mais complexas

## Qual a diferença entre Arrays e Linked List?

Arrays e listas encadeadas (linked lists) são duas estruturas de dados usadas para armazenar coleções de elementos, mas diferem em vários aspectos. Abaixo, vou destacar as principais diferenças entre essas duas estruturas de dados:

1. **Alocação de Memória**:

   - **Array**: Os arrays alocam uma parte contígua de memória para armazenar seus elementos. Isso significa que todos os elementos do array estão próximos na memória, o que permite um acesso rápido aos elementos por índice. No entanto, essa alocação contígua pode levar a problemas de alocação de memória quando o tamanho do array precisa ser ajustado.

   - **Linked List**: As listas encadeadas não alocam memória de forma contígua. Cada elemento (nó) de uma lista encadeada contém um valor e uma referência ao próximo nó. Isso permite que os elementos sejam armazenados em locais de memória independentes, o que facilita a inserção e remoção de elementos em qualquer ponto da lista. No entanto, o acesso a elementos por índice é mais lento, pois requer percorrer a lista a partir do início.

2. **Inserção e Remoção de Elementos**:

   - **Array**: A inserção ou remoção de elementos em um array pode ser ineficiente, especialmente quando feita no meio do array. Para inserir um elemento no meio, é necessário deslocar todos os elementos à direita para abrir espaço. O mesmo ocorre com a remoção, onde os elementos à direita do elemento removido precisam ser deslocados para a esquerda.

   - **Linked List**: As listas encadeadas são eficientes na inserção e remoção de elementos em qualquer ponto da lista, pois isso geralmente envolve a atualização das referências dos nós vizinhos. Não é necessário deslocar elementos, o que torna essas operações mais rápidas em comparação com arrays.

3. **Acesso a Elementos**:

   - **Array**: O acesso a elementos em um array é muito eficiente quando você conhece o índice do elemento desejado, pois basta calcular o endereço da memória com base no índice.

   - **Linked List**: O acesso a elementos em uma lista encadeada é mais lento, pois requer percorrer os nós a partir do início (ou do final, em uma lista duplamente encadeada) até o nó desejado. O acesso por índice não é direto.

4. **Espaço em Memória**:

   - **Array**: Os arrays podem alocar mais memória do que o necessário se forem dimensionados com uma grande capacidade inicial. Isso pode desperdiçar espaço em memória.

   - **Linked List**: As listas encadeadas alocam apenas a quantidade necessária de memória para cada elemento. Isso pode economizar espaço, especialmente se a lista for grande e dinamicamente dimensionada.

## Explicando o exemplo

1. Instale o Nodejs
2. Instale o VS Code
3. Abra um novo Terminal e execute na pasta do código este comando `node linkdelist.js`. Qual será o resultado?

O resultado da execução será

```powershell
10 -> 30 -> 40
10 -> 20 -> 30 -> 40
10 -> 20 -> 40
10 -> 20
```

O código cria uma lista encadeada e vai adicionando e removendo nós em pontos específicos

![linkedlist](/fundamentos/assets/images/linkedlist.svg)

### Classe `No`

```javascript
class No {
  constructor(valor) {
    this.valor = valor;    // Valor armazenado no nó
    this.proximo = null;   // Referência para o próximo nó na lista
  }
}
```

- A classe `No` representa um nó na lista encadeada. Cada nó possui um valor que pode ser de qualquer tipo e uma referência (`proximo`) para o próximo nó na lista. Quando o nó é o último na lista, a referência `proximo` é `null`.

### Classe `ListaEncadeada`

```javascript
class ListaEncadeada {
  constructor() {
    this.cabeca = null;  // Referência para o primeiro nó (cabeça) na lista
    this.tamanho = 0;   // Tamanho atual da lista
  }

  // Métodos para adicionar, remover, procurar, imprimir, etc.
}
```

- A classe `ListaEncadeada` representa a lista encadeada em si. Ela tem dois atributos principais: `cabeca` (a referência para o primeiro nó na lista) e `tamanho` (o número de nós na lista).

#### Método `adicionar(valor)`

```javascript
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
```

- Este método adiciona um novo nó com o valor especificado ao final da lista encadeada. Se a lista estiver vazia (`cabeca` é `null`), o novo nó se torna a cabeça da lista. Caso contrário, o método percorre a lista até encontrar o último nó (aquele cujo `proximo` é `null`) e o liga ao novo nó.

#### Método `adicionarEmPosicao(valor, posicao)`

```javascript
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
```

- Este método permite adicionar um nó com um valor especificado em uma posição específica na lista encadeada. Ele primeiro verifica se a posição é válida. Se for, ele cria um novo nó com o valor e, em seguida, liga esse novo nó ao nó anterior e ao nó seguinte na posição desejada. Se a posição for 0, o novo nó se torna a cabeça da lista.

#### Método `remover(valor)`

```javascript
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
```

- Este método remove um nó com um valor especificado da lista encadeada. Ele começa verificando se a lista está vazia (nenhuma cabeça), e se o valor a ser removido está na cabeça, a cabeça é atualizada para o próximo nó. Caso contrário, ele percorre a lista até encontrar o nó com o valor especificado e, em seguida, ajusta as referências para remover o nó.

#### Método `removerPorPosicao(posicao)`

```javascript
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
```

- Este método permite remover um nó em uma posição específica da lista encadeada. Ele verifica se a posição é válida e, em seguida, atualiza as referências para remover o nó na posição especificada.

### Outros Métodos

- `procurar(valor)`: Este método procura um nó com um valor específico na lista encadeada e retorna o nó encontrado ou `null` se não encontrar.

- `estaVazia()`: Retorna `true` se a lista estiver vazia (sem nós) e `false` caso contrário.

- `obterTamanho()`: Retorna o número de nós na lista.

- `imprimir()`: Este método imprime os valores dos nós na lista encadeada, mostrando a sequência de nós na ordem em que estão ligados.
