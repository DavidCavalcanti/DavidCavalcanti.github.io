/**
 * Escreva uma função que recebe um número e retorne:
 *
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = Retorna o própro número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */

function FizzBuzz(numero) {
  if (typeof numero !== "number") return numero; // Validar se realmente é número
  if (numero % 3 == 0 && numero % 5 === 0) return 'FizzBuzz'; // Número divisível por 3 e 5
  if (numero % 3 === 0) return "Fizz"; // Número divisível por 3
  if (numero % 5 === 0) return "Fizz"; // Número divisível por 5
  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(`Índice= ${i}, Resultado= ${FizzBuzz(i)}`);
}
