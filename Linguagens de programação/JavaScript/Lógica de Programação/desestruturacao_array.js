/**
 * Atribuição via desestruturação por array
 */

// Fazer a = B, b = C, c = A
let a = "A";
let b = "B";
let c = "C";

//desestruturaçao lado esquerdo. Array lado direito
// [a, b, c] = [1, 2, 3];

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//aplicando desestruturação
const [primeiroNumero, segundoNumero, ...resto] = numeros;
/**
 * No caso acima o primeiroNumero recebe a primeira posição de numeros[0], ou seja,
 * primeiroNumero = 1, e assim sucessivamente. Quando inserido '...' quer dizer que
 * o valor após '...', para este caso é 'resto', receberá todos os valores restantes
 * do array números, ou seja, resto=[3, 4, 5, 6, 7, 8, 9].
 */
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// Saltando valores
const [um, , tres, , cinco, , sete, , nove] = numeros;
console.log(um, tres, cinco, sete, nove);

// Mais complicado
const outrosNumeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(outrosNumeros[1][2]);
const [ ,[, , seis]] = outrosNumeros;
console.log(seis);

//forma mais fácil de acessar os valores de outrosNumeros
const [lista1, lista2, lista3] = outrosNumeros;

console.log(lista1[0]);