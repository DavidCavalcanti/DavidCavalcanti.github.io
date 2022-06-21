var matriz = [
  [08, 71],
  [25, 11],
  [17, 06],
];

var valores = ""; // Vai receber os elementos da matriz

// Este primeiro for varre as linhas da matriz
for (var L = 0; L <= 2; L++) {
  // Este segundo for varre as coluns da matriz
  for (var C = 0; C <= 1; C++) {
    valores += matriz[L][C] + "\n";
  }
}

console.log(`conteúdo da matriz: ${valores}`);