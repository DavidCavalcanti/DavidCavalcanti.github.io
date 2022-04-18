/**
 * Operadores Lógicos
 *
 * && -> AND -> E - > Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR  -> OU
 * !  -> NOT -> NÃO
 */

const expressaoAnd = true && true && true && true;
const expressaoOR = true || false;

console.log(expressaoAnd);
console.log(expressaoOR);

const usuario = "David";
const senha = "123456";

const vaiLogar = usuario === "David" && senha === "123456";
console.log(vaiLogar);
