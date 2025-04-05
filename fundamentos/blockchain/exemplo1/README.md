# Explicação exemplo de Blockchain básico

## Introdução

O código fornecido é um exemplo de como criar uma blockchain em JavaScript. 
Ele define duas classes: `Bloco` e `Blockchain`. A classe `Bloco` é usada para criar blocos individuais na cadeia, enquanto a classe `Blockchain` é usada para criar a cadeia de blocos.

A classe `Bloco` tem um construtor que recebe três parâmetros: `timestamp`, `dados` e `hashBlocoAnterior`. O método `calculaHashBloco()` é definido para calcular o hash do bloco atual.

A classe `Blockchain` tem um construtor que inicializa a cadeia com um bloco de gênese. Os métodos `ultimoBloco()` e `adicionaBloco(newBlock)` são definidos para obter o bloco mais recente na cadeia e adicionar um novo bloco à cadeia, respectivamente.

No exemplo duas instâncias da classe `Bloco` são criadas e adicionadas à cadeia usando o método `adicionaBloco()`. A cadeia completa é exibida no console usando `JSON.stringify()`.

## Detalhamento

A classe Bloco é definida com um construtor que recebe três parâmetros: `timestamp`, `dados` e `hashBlocoAnterior`.

`timestamp` é a hora em que o bloco foi criado.

`dados` é o conteúdo do bloco.

`hashBlocoAnterior` é o hash do bloco anterior na cadeia.

O método `calculaHashBloco()` é definido para calcular o hash do bloco atual.

A classe `Blockchain` é definida com um construtor que inicializa a cadeia com um bloco de gênese.

O método `criaPrimeiroBloco()` é definido para criar o bloco de gênese.

O método `ultimoBloco()` é definido para obter o bloco mais recente na cadeia.

O método `adicionaBloco(novoBloco)` é definido para adicionar um novo bloco à cadeia.

Duas instâncias da classe `Bloco` são criadas e adicionadas à cadeia usando o método `adicionaBloco()`.

A cadeia completa é exibida no console usando `JSON.stringify()`.

## Testar o código 



