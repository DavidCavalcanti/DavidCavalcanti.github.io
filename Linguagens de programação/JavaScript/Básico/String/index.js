//Mexendo com String
let umaString  = "Esse é um texto";

console.log(umaString);
console.log(umaString.replace('um', 'outro') + ' que usa a função .replace');
console.log(umaString.concat(' ', 'em', ' ','que usa', ' ', 'a função .concat'));
console.log(umaString + ' que usa outra forma de concatenação');
console.log(`${umaString} que usa o template String`);// mais interessante de usar
console.log(umaString.indexOf('texto', 5));// % informa a partir de qual posição procurar 'texto', caso não exista 'texto' após a posição 5, retorna -1
console.log(umaString.match(/[a-z]/g)); // Expressão regular que retorna todas as letras minúsculas
console.log(`${umaString.toUpperCase()} COM TODAS AS LETRAS MAIÚSCULAS`); // Letras maiúsculas
console.log(`${umaString.toLocaleLowerCase()} com todas as letras minúsculas`); // Letras minúsculas