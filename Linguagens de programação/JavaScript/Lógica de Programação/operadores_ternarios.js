/**
 * Operadoes ternários ajuda muito a enxugar o código em condicionais
 *
 * Estrutura ->  (condição) ? 'valor caso seja verdadeiro' : 'valor caso seja falso';
 */

const pontuacaoUsuario = 1000;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário vip" : "Usuário normal";

const corUsuario = 'red';
const corPadrao = corUsuario || "Preta";

console.log(`Nível do usuário: ${nivelUsuario}. Cor do usuário: ${corPadrao}`);

/*
if (pontuacaoUsuario >= 1000) {
  console.log("Usuário vip");
} else {
  console.log("Usuário normal");
}
*/
