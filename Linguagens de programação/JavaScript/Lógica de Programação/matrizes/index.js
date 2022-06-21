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
