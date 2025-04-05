Este é um exemplo de implementação de uma blockchain básica em JavaScript. Vou explicar o código passo a passo:

1. **Importação de Bibliotecas**:

   ```javascript
   const SHA256 = require('crypto-js/sha256');
   ```

   Aqui, você importa a biblioteca `crypto-js` e, em particular, a função `sha256`, que será usada para calcular os hashes dos blocos.

2. **Classe `Transaction`**:

   ```javascript
   class Transaction {
     constructor(enderecoRemetente, enderecoDestinatario, quantia) {
       this.enderecoRemetente = enderecoRemetente;
       this.enderecoDestinatario = enderecoDestinatario;
       this.quantia = quantia;
     }
   }
   ```

   A classe `Transaction` representa uma transação na blockchain. Cada transação possui um endereço de remetente, um endereço de destinatário e uma quantia a ser transferida.

3. **Classe `Bloco`**:

   ```javascript
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
   }
   ```

   A classe `Bloco` representa um bloco na blockchain. Cada bloco contém um carimbo de data e hora, um array de transações, o hash do bloco anterior, o seu próprio hash e um valor `nonce`. O `nonce` é um valor usado na mineração de blocos.

   - O método `calculaHash` é responsável por calcular o hash do bloco com base em seu conteúdo, incluindo o hash do bloco anterior, o carimbo de data e hora, as transações e o `nonce`.

   - O método `mineraBloco` é usado para minerar um bloco, ou seja, encontrar um valor de `nonce` que, quando combinado com os outros dados do bloco, gere um hash com uma dificuldade específica (um número definido de zeros no início do hash).

4. **Classe `Blockchain`**:

   ```javascript
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
   ```
   A classe `Blockchain` é a representação da cadeia de blocos. Ela mantém a cadeia, a dificuldade da mineração, as transações pendentes e a recompensa para mineradores.

   - O método `criaPrimeiroBloco` é usado para criar o bloco inicial da cadeia, conhecido como "bloco de gênese."

   ```javascript
   ultimoBloco() {
     return this.cadeia[this.cadeia.length - 1];
   }
   ```
   O método `ultimoBloco` retorna o último bloco na cadeia.

   ```javascript
   mineraTrasactionsPendentes(enderecoRecompensa) {
     let novoBloco = new Bloco(Date.now(), this.transactionsPendentes, this.ultimoBloco().hash);
     novoBloco.mineraBloco(this.dificuldade);

     console.log('Bloco minerado com sucesso!');
     this.cadeia.push(novoBloco);

     this.transactionsPendentes = [
       new Transaction(null, enderecoRecompensa, this.recompensa)
     ];
   }
   ```
   O método `mineraTrasactionsPendentes` é usado para minerar um novo bloco. Ele cria um novo bloco com as transações pendentes, calcula o hash do bloco, e verifica se o hash atende aos critérios de dificuldade. Após a mineração bem-sucedida, a recompensa é atribuída a um mineiro e as transações pendentes são reiniciadas.

   ```javascript
   criaTransaction(transaction) {
     this.transactionsPendentes.push(transaction);
   }
   ```
   O método `criaTransaction` é usado para criar uma nova transação e adicioná-la à lista de transações pendentes.

   ```javascript
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
   ```
   O método `saldoEndereco` calcula o saldo de um determinado endereço examinando todas as transações na cadeia de blocos.

   ```javascript
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
   ```
   O método `validarCadeia` verifica a integridade da cadeia de blocos, garantindo que os hashes estejam corretos e que os blocos estejam encadeados corretamente.

5. **Criação da Blockchain e Transações**:

   ```javascript
   let IFGoianoCoin = new Blockchain();

   IFGoianoCoin.criaTransaction(new Transaction('endereco1', 'endereco2', 100));
   IFGoianoCoin.criaTransaction(new Transaction('endereco2', 'endereco1', 50));
   ```
   Aqui, você cria uma instância da blockchain chamada `IFGoianoCoin` e adiciona duas transações pendentes à lista.

6. **Mineração e Saldo**:

   ```javascript
   console.log('\nIniciando com a mineração do bloco...');
   IFGoianoCoin.mineraTrasactionsPendentes('test-endereco');

   console.log('\nSaldo é', IFGoianoCoin.saldoEndereco('test-endereco'));

   console.log('\nIniciando com a mineração do bloco...');
   IFGoianoCoin.mineraTrasactionsPendentes('test-endereco');

   console.log('\nSaldo é', IFGoianoCoin.saldoEndereco('test-endereco'));
   ```
   Aqui, você inicia a mineração de um bloco com as transações pendentes,