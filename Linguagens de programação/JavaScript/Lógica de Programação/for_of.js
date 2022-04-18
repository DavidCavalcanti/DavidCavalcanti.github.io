// For clássico - Geralmente com iteráveis (array ou Strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = 'David Levy Cavalcanti de Sá';
const nomes = ['David', 'Levy', 'Cavalcanti', 'de', 'Sá'];

/*for (let valor of nome) {
    console.log(valor)
}

for (valor of nomes) {
    console.log(valor);
}*/

nomes.forEach(function (valor, indice ){
    console.log(valor, indice);
});