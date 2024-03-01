const readline = require("readline-sync");
const contatoControlador = require("./controlador");

function menu() {
  console.log("1. Adicionar Contato");
  console.log("2. Listar Contatos");
  console.log("3. Buscar Contato");
  console.log("4. Atualizar Contato");
  console.log("5. Remover Contato");
  console.log("6. Sair");
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      const nome = readline.question("Nome: ");
      const email = readline.question("Email: ");
      const telefone = readline.question("Telefone: ");
      contatoControlador.adicionarContato(nome, email, telefone);
      break;
    case "2":
      console.log(contatoControlador.listarContatos());
      break;
    case "3":
      const nomeBuscar = readline.question("Nome para buscar: ");
      console.log(contatoControlador.buscarContato(nomeBuscar));
      break;
    case "4":
      const nomeAtualizar = readline.question("Nome do contato a ser atualizado: ");
      const novoEmail = readline.question("Novo email: ");
      const novoTelefone = readline.question("Novo telefone: ");
      console.log(contatoControlador.atualizarContato(nomeAtualizar, novoEmail, novoTelefone));
      break;
    case "5":
      const nomeRemover = readline.question("Nome do contato a ser removido: ");
      contatoControlador.removerContato(nomeRemover);
      break;
    case "6":
      process.exit(0);
    default:
      console.log("Opcao Invalida");
  }
  readline.question("Pressione ENTER para continuar...");
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opcao:");
    escolherOpcao(opcao);
  }
}

main();