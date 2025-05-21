# Exercicio 01
## Sistema de Gerenciamento de Conta Bancária
### Contexto:
Você está desenvolvendo um sistema para um banco que gerencia contas correntes de clientes. A máquina de estados de uma conta bancária deve controlar as diferentes fases de um processo de transações, levando em consideração o estado atual da conta e as operações que podem ser realizadas (depósitos, retiradas, etc.).

A máquina de estados da conta bancária deve ter os seguintes estados:

* Ativa: A conta está em pleno funcionamento e o cliente pode realizar depósitos e retiradas.
* Bloqueada: A conta foi bloqueada por motivos como inadimplência, fraude detectada, ou problemas administrativos. O cliente não pode realizar transações até que o bloqueio seja removido.
* Inativa: A conta foi desativada, seja por solicitação do cliente, ou por inatividade prolongada. O cliente não pode realizar transações, mas ainda pode consultar o saldo e pedir o reativamento.
* Suspensa: A conta foi suspensa temporariamente por erro de pagamento ou outros motivos. A suspensão é temporária e, após a correção do problema, a conta retorna ao estado Ativa.
* Fechada: A conta foi encerrada, seja por solicitação do cliente ou por algum motivo administrativo. Não é mais possível realizar transações nesta conta.

### Eventos que podem alterar os estados:
* Depósito: A conta pode receber depósitos, o que mantém a conta em estado Ativa, caso ela já esteja nesse estado.
* Retirada: A conta pode fazer retiradas, mas apenas se houver saldo suficiente e se a conta não estiver bloqueada ou suspensa.
* Bloqueio da Conta: Se o cliente for inadimplente ou se houver um incidente de fraude, a conta pode ser bloqueada, transicionando para Bloqueada.
* Reativação da Conta: Se a conta estava Inativa ou Suspensa, ela pode ser reativada após a correção do problema. Nesse caso, a conta volta ao estado Ativa.
* Encerramento de Conta: A conta pode ser encerrada, movendo o estado para Fechada.
* Solicitação de Cancelamento de Bloqueio: Se o bloqueio for temporário, o cliente pode solicitar a remoção do bloqueio, que deve voltar ao estado Ativa.

### Requisitos:
* Implementar as transições entre os estados conforme as ações do cliente.
* Tratar eventos de fraude, inadimplência e encerramento de conta.
* Garantir que a conta bloqueada ou suspensa não permita transações, mas que a conta inativa ainda possibilite consulta de saldo.
* A conta deve voltar ao estado Ativa após a reativação.

# Exercicio 02
## Sistema de Monitoramento de Processo de Fabricação
### Contexto:
Você está desenvolvendo um sistema para monitorar o processo de fabricação em uma linha de produção de uma fábrica. O processo de fabricação pode passar por diversas etapas, e é crucial controlar os estados de cada máquina e a produção de itens em diferentes fases de fabricação.

A máquina de estados do processo de fabricação deve ter os seguintes estados:
* Iniciado: O processo de fabricação foi iniciado. A máquina está pronta para começar a produção.
* Preparando Matéria-Prima: A máquina está no processo de preparar a matéria-prima, como cortar, aquecer ou misturar materiais.
* Em Produção: A máquina está fabricando o item. O item está sendo montado ou processado de acordo com o design.
* Em Testes de Qualidade: O item fabricado é testado para garantir que atende aos padrões de qualidade.
* Ajustes Necessários: Se o item não passar nos testes de qualidade, ajustes são feitos antes de repetir o teste.
* Finalizado: O item foi produzido com sucesso e passou nos testes de qualidade.
* Pausado: O processo de fabricação foi interrompido temporariamente, seja por falha na máquina, falta de matéria-prima ou qualquer outra razão. O processo pode ser retomado ou cancelado.
* Cancelado: O processo de fabricação foi cancelado devido a um erro irreparável ou decisão administrativa.

### Eventos que podem alterar os estados:
* Falha na Máquina: Se a máquina apresentar algum problema, o processo pode ser pausado e, dependendo do tipo de falha, a transição pode ser para Pausado ou Cancelado.
* Reajuste de Parâmetros: Se os testes de qualidade indicarem que o item não está conforme esperado, ajustes podem ser feitos, e o estado retorna para Em Produção ou Em Testes de Qualidade.
* Suprimento de Matéria-Prima: Se o processo foi pausado por falta de matéria-prima, o sistema verifica o suprimento de novos materiais e, uma vez fornecido, o estado retorna para Preparando Matéria-Prima ou Em Produção.
* Problemas de Qualidade: Se o item falhar nos testes de qualidade e não puder ser ajustado, o processo pode ser marcado como Cancelado.

### Requisitos:
* Gerenciar os estados de máquinas e itens no processo de fabricação.
* Tratar interrupções, falhas e ajustes necessários no processo.
* Garantir que o sistema permita a pausa e o cancelamento do processo, além de verificar o status da produção.
* Implementar eventos que possam alterar o estado de forma dinâmica e realista (ex: falta de matéria-prima, falha em testes).