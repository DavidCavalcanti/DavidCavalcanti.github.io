var linhas = prompt("Digite a quantidade de linhas da matriz:");
var colunas = prompt("Digite a quantidade de colunas da matriz:");
alert(`Criar uma matriz com ${linhas} linhas e ${colunas} colunas`);

var matriz = [];

for (var i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (var j = 0; j < colunas; j++) {
    matriz[i][j] = "";
  }
}

for (var L = 0; L < linhas; L++) {
  for (var C = 0; C < colunas; C++) {
    matriz[L][C] = prompt("Digite um valor para inserir na matriz:");
  }
}
