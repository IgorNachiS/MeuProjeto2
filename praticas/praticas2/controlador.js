const Contato = require("./modelo");

const contatos = [];

function adicionarContato(nome, email, telefone) {
  const novoContato = new Contato(nome, email, telefone);
  contatos.push(novoContato);
}

function listarContatos() {
  return contatos;
}

function buscarContato(nome) {
  return contatos.find((contato) => contato.nome === nome);
}

function atualizarContato(nome, email, telefone) {
  const contato = contatos.find((contato) => contato.nome === nome);
  if (contato) {
    contato.email = email;
    contato.telefone = telefone;
  }
  return contato;
}

function removerContato(nome) {
  const posicao = contatos.findIndex((contato) => contato.nome === nome);

  if (posicao >= 0) {
    contatos.splice(posicao, 1);
  }
}

module.exports = {
  adicionarContato,
  listarContatos,
  buscarContato,
  atualizarContato,
  removerContato,
};