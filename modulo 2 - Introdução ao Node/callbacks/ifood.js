// Sem ifood, restaurante físico
// Cliente fala o nome do produto
// garçom pega o nome do item do pedido
// Garçom vai chamar o cozinheiro e falar qual item do pedido ele vai preparar


// Função comprar produto, deve receber o nome do produto, o nome do restaurante e a forma de entrega
function comprarProduto(nomeProduto, nomeRestaurante, callback) {
  // Vai avisar o restaurante
  // console.log("Avisando o restaurante " + nomeRestaurante + " que tem um novo pedido de " + nomeProduto + "!")
  console.log("\n================================\n");
  avisarRestaurante(nomeRestaurante, nomeProduto);
  // Alterar o status do pedido
  // Busca no json o nome desse restaurante e pega o telefone dele
  // Uso o whatsapp pegando esse número do passo anterior e mando uma mensagem para o restaurante
  // console.log("O restaurante " + nomeRestaurante + " começou a preparar o seu pedido");
  console.log("\n================================\n");
  alterarStatusDoPedido(nomeRestaurante, nomeProduto)

  // Alterar estoque
  //console.log("Tirando um item do estoque do produto " + nomeProduto + "do restaurante " + nomeRestaurante);
  console.log("\n================================\n");
  alterarEstoque(nomeRestaurante, nomeProduto)

  console.log("\n================================\n");
  callback(nomeProduto);
}

// ================================================================
// Funções do callback

function enviarDelivery(nomeProduto) {
  console.log("O produto " + nomeProduto + " já está a caminho!");
}

function retirarProduto(nomeProduto) {
  console.log("O produto " + nomeProduto + " já pode ser retirado!");
}

function programar(nomeProduto) {
  console.log("O produto " + nomeProduto + " foi programado!");
}


// ================================================================
// Funções extras do passo a passo de fazer o pedido

function avisarRestaurante(nomeRestaurante, nomeProduto) {
  console.log("Avisando o restaurante " + nomeRestaurante + " que tem um novo pedido de " + nomeProduto + "!");
}

function alterarStatusDoPedido(nomeRestaurante, nomeProduto) {
  // console.log("O restaurante " + nomeRestaurante + " começou a preparar o seu pedido ( " + nomeProduto + " )");
  // Interpolação => Template Strings => Outra forma de se juntar texto com variável
  console.log(`O restaurante ${nomeRestaurante} começou a preparar o seu pedido(${nomeProduto})!`)
}

function alterarEstoque(nomeRestaurante, nomeProduto) {
  console.log("Tirando um item do estoque do produto " + nomeProduto + "do restaurante " + nomeRestaurante);
}

// ===============================================================
// Executando as funções
// Colocando o funcionário pra trabalhar!

comprarProduto("Batata", "Mc Donaldos", enviarDelivery);
comprarProduto("Batata", "Rei do Burguer", retirarProduto);
// comprarProduto("Batata", programar);

// ====  AJUDA =====

// Função é uma sequência de processos
// Atalho para selecionar onde quer tirar o print: tecla windows + shift + s
// Comando para ir até a função: ctrl + clicar em cima do nome da função
// Comando para limpar o terminal => ou digitar clear, ou ctrl + L