const path = require("path");
const escrever = require("./modules/escrever");
const caminhoArquivo = path.resolve(__dirname, "teste.json"); // Escreve na pasta escreverLerArquivos
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

/* const pessoas = [
  { nome: "David", sobrenome: "Cavalcanti " },
  { nome: "Luana", sobrenome: "Torres" },
  { nome: "Daniele", sobrenome: "Cavalcanti " },
];

const json = JSON.stringify(pessoas, "", 2);
escrever(caminhoArquivo, json); */

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

// Desconvertendo de JSON para objeto Javascript
function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val.nome, val.sobrenome));
}

lerArquivo(caminhoArquivo);
