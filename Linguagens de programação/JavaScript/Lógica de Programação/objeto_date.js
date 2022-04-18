/**
 * Trabalhando com datas
 *
 * new Date(); -> data atual
 * new Date(valor); -> milissegundos
 * new Date(dataString);
 * new Date(ano, mês, dia, hora, minuto, segundo, milissegunndos);
 */

//const data = new Date(2022, 2, 29, 15, 14, 27);
const data = new Date("2021-11-25 20:30:58");
console.log("Dia", data.getDate()); // pega o dia
console.log("Mês", data.getMonth() + 1); //como os meses começam na posição zero, soma +1 para pegaro mês desejado
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log("Dia da semana", data.getDay()); // 0- Domingo, 6- Sábado

console.log(data.toString());
console.log(Date.now()); // Retorna a quantidade de milissegundos decorridos desde o marco zero até a hora atual.
// Caso você pegue o retorno e insira no parâmetro  de  Date(parâmetro), ela te rotada a data exata refernte a eses milissegundos
