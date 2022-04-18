/**
 * Let - tem escopo de bloco {... bloco}
 * 
 * Var - só tem escopo de função.
 * 
 * Hoisting - é quando o JavaScript compila todos o código e todas as 
 * declarações de variáveis usando 'var' são elevadas ao todo da fun-
 * ção/escopo local(se declarada dentro de uma função), ou ao topo do 
 * escopo global (se declaradas fora de uma função) independentemente 
 * de onde a declaração foi feita
 * 
 */
const verdadeira = true;
let nome = "David"; // Está sendo criada uma variável
var nome2 = "David";

if (verdadeira) {
  let nome = "Luana"; // Está sendo criada uma variável
  var nome2 = "Levy"; //Redeclarando variável

  if (verdadeira) {
    var nome2 = "Cavalcanti"; // Redeclarando
    let nome = "Outra coisa";
  }
}

console.log(nome, nome2);


console.log(sobrenome);

var sobrenome = 'Torres';