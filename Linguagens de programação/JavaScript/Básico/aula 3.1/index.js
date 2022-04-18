/**
 * 
 * Exercíco com const e let
 *
 * David Levy Cavalcanti de sá tem 23 anos, pesa 74 kg 
 * tem 1.78 de altura e seu IMC é de 23.355636914530994 
 * David Levy nasceu em 1998
 */

//Variáveis que não vão mudar:
const firstName = 'David Levy';
const middleName = ' Cavalcanti de';
const lastName = ' Sá';
const age = 24;
const peso = 74;
const alturaEmMetros = 1.78;

//Váriáveis que podem ser alteradas
let imc; // peso/(altura*altura)


imc = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2022 - age;

/*console.log(firstName + middleName + lastName + " tem " + age + " anos, pesa " + peso + " kg ");
console.log("tem " + alturaEmMetros + " de altura e seu IMC é de " + imc );
console.log(firstName + " nasceu em " + anoNascimento);*/

//Usando template Strings

console.log(`${firstName} ${middleName} ${lastName} tem ${age} anos, pesa ${peso} kg `);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${imc}`);
console.log(`${firstName} nasceu em ${anoNascimento}.`);