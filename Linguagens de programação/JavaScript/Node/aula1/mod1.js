/* const nome = "David";
const sobrenome = "Levy";

const falaNome = () => nome + " " + sobrenome;

// Função do node
/* module.exports.nome = nome; // exportando a chave '.nome' com valor 'const nome' que é 'David'
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; // Aqui a função não é executada 

//console.log(module.exports);

// Outra forma de exportar (atalho)
// A variável não precisa ter nome da chave

exports.NOME = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//console.log(exports);
 */

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// A chave '.pessoa' contem o objeto 'Pessoa', então a pasta
// requerida, para instânciar um objeto, será usada a chave
// 'pessoa' e não o nome do objeto: 'Pessoa'.
exports.pessoa = Pessoa; 
