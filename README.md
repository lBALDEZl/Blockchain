# Introdução
A blockchain é um grande banco de dados(**Distributed Ledger**) compartilhado que registra as transações dos usuários.
A rede do Bitcoin, a primeira do mercado, guarda informações como quantidade de criptomoedas transferidas entre os usuários; identificação (endereço digital) de quem enviou e quem recebeu os valores; e data e hora das transações. 
A diferença entre uma blockchain como a do BTC e os bancos de dados “tradicionais” é que ela não é controlada por autoridades, como bancos, governos, empresas ou grupos. O sistema foi construído de tal maneira que os participantes (chamados de nós) são os controladores e auditores de tudo – e tomam as decisões sobre a rede. Há uma cópia da blockchain nos computadores de todos os envolvidos, espalhados por todo o mundo. 
Portanto, cada membro, esteja no Brasil, nos Estados Unidos ou no Japão, vê a mesma informação quando acessa o sistema. Nenhuma alteração pode ser feita sem a aprovação da coletividade. Os dados também são imutáveis – ou seja, se as transferências foram validadas e registradas, são eternas e não podem ser alteradas. Todo esse funcionamento é viável por causa de mecanismos de consenso que estabelecem algumas regras.

# Conceito de Distributed Lendger - Livro razão distribuído
Um livro distribuído é um tipo de banco de dados que é compartilhado, replicado e sincronizado entre os membros de uma rede descentralizada. Ele registra transações, como a troca de ativos ou dados, entre os participantes da rede . Ao contrário de um banco de dados centralizado, um livro distribuído não requer um administrador central e, consequentemente, não tem um único ponto de falha . A forma mais comum de tecnologia de livro distribuído é o blockchain, que pode ser em uma rede pública ou privada 

# Funcionamento da Transaction
Uma transação (Transaction) no blockchain **é uma transferência de dados entre dois ou mais usuários**, que é **registrada de forma imutável em uma rede distribuída**. Uma transação pode representar a **troca de ativos digitais**, como criptomoedas ou tokens, ou a execução de contratos inteligentes, que são programas que executam ações pré-definidas. A blockchain registra transações entre os participantes da rede. A tecnologia blockchain é baseada em quatro fundamentos: o registro compartilhado das transações (ledger), o consenso para verificar as transações, um contrato que determina as regras de funcionamento das transações e a criptografia, que é o fundamento de tudo . Uma transação no blockchain segue as seguintes etapas:

- **Criação**: O usuário que deseja enviar dados cria uma transação com as informações necessárias, como o endereço do destinatário, a quantidade de dados e uma assinatura digital que comprova sua identidade e autoriza a operação.
- **Propagação**: A transação é transmitida para os outros usuários da rede, chamados de **nós**, que verificam se ela é **válida e não é duplicada**. Os nós que recebem a transação a repassam para os demais, até que todos estejam cientes da operação.
- **Validação**: Os nós competem entre si para validar as transações e agrupá-las em **blocos**, que são conjuntos de dados que seguem um formato padrão. Para isso, eles precisam resolver um problema matemático complexo, que requer poder computacional e tempo. **O primeiro nó que resolver o problema propõe o novo bloco para a rede**.
- **Consolidação**: Os outros nós verificam se o bloco proposto está correto e segue as regras da rede. Se houver **consenso entre os nós**, o bloco é adicionado à cadeia de blocos existente, formando um **registro cronológico e inalterável de todas as transações realizadas na rede**. O nó que propôs o bloco recebe uma recompensa em forma de dados ou criptomoedas.

### O que acontece se uma transação não for válida?
**Se um nó não validar uma transação, ele não a incluirá em um bloco e não a propagará para outros nós**. Isso pode acontecer se a transação for inválida, ou seja, se não atender aos critérios definidos pela rede, como o saldo insuficiente do remetente ou a tentativa de gastar a mesma moeda duas vezes. Se a transação for legítima, mas o nó não conseguir validá-la por algum motivo, ela será retransmitida para outros nós que podem validá-la e incluí-la em um bloco. A validação de transações é um processo importante para garantir a integridade e segurança da rede blockchain.

# Mineração
A mineração em blockchain é um processo que visa garantir a segurança e a descentralização de algumas criptomoedas que usam o mecanismo de consenso chamado Prova de Trabalho (PoW). **Os mineradores (miners) usam seus recursos computacionais para verificar e registrar as transações dos usuários em uma blockchain**. Como **recompensa** pelo seu trabalho, os mineradores recebem novas unidades de criptomoedas e taxas de transação. A mineração também controla a emissão de novas moedas, seguindo regras pré-definidas pelo protocolo da criptomoeda. Alguns exemplos de criptomoedas que usam a mineração são o Bitcoin, Ethereum e o Litecoin.

# Algoritmos, estruturas de dados e blockchain
- Uma blockchain é uma estrutura de dados que armazena transações em blocos, que são encadeados sequencialmente. 
- Cada bloco contém um cabeçalho e um conjunto de transações. 
- O cabeçalho do bloco contém informações como o número do bloco, o hash do bloco anterior, a raiz da árvore de Merkle das transações e um nonce. 
- As transações são armazenadas em uma árvore de Merkle, que é uma estrutura de dados que permite verificar a integridade das transações sem a necessidade de verificar todas elas. 

Além disso, as blockchains também usam chaves criptográficas para garantir a autenticidade e a integridade das transações e dos blocos.

As estruturas de dados usadas em uma blockchain são:

- **Lista encadeada:** É utilizada para organizar os blocos da blockchain. Um exemplo pode ser estudado [aqui](https://github.com/claulis/blockchain-basic/tree/main/estruturadados/linkedlist) 
- **Função HASH:** É utilizada para o encadeamento entre blocos e também para garantir a integridade destes blocos. Um exemplo pode ser estudado [aqui](https://github.com/claulis/blockchain-basic/tree/main/estruturadados/hash) 
- **Árvore de Merkle:** É utilizada para armazenar as transações em um bloco e permitir a verificação da integridade das transações sem a necessidade de verificar todas elas.
- **Criptografia assimétrica:** É utilizada para assinatura de transações armazenadas nos blocos e para identidade dos participantes da blockchain.
- **Redes peer-to-peer (P2P):** São utilizadas para a distribuição em diversos nós, eliminando, por exemplo, ponto único de falha.

## Blocos
Um bloco em blockchain é uma estrutura de dados que armazena um conjunto de transações que são validadas e adicionadas à cadeia de blocos por meio de um mecanismo de consenso. Um bloco em blockchain tem as seguintes características:

- **Cabeçalho**: Contém informações como o número do bloco, o hash do bloco anterior, a raiz da árvore de Merkle das transações e um nonce. O hash do bloco anterior é usado para garantir a imutabilidade e a ordem dos blocos na cadeia. A raiz da árvore de Merkle é usada para verificar a integridade das transações no bloco. O nonce é um valor aleatório usado para resolver o problema matemático que valida o bloco.
- **Transações**: São as operações realizadas pelos usuários da rede, como a transferência de criptomoedas ou a execução de contratos inteligentes. Cada transação tem um identificador único, uma assinatura digital do remetente, o endereço do destinatário, a quantidade de dados e outras informações opcionais. As transações são organizadas em uma árvore de Merkle, que permite verificar se uma transação pertence ao bloco sem a necessidade de verificar todas elas.
- **Tamanho**: É o espaço ocupado pelo bloco na memória. O tamanho do bloco depende do número e do tipo de transações que ele contém, bem como do protocolo da rede blockchain. Por exemplo, o tamanho máximo do bloco no Bitcoin é de 1 MB, enquanto no Ethereum é variável e depende da complexidade das transações.
- **Recompensa**: É o incentivo dado aos nós que validam os blocos e contribuem para a segurança e a descentralização da rede. A recompensa consiste em novas unidades de criptomoedas geradas pelo protocolo e em taxas pagas pelos usuários que realizam as transações. A recompensa varia de acordo com a rede blockchain e tende a diminuir ao longo do tempo.







