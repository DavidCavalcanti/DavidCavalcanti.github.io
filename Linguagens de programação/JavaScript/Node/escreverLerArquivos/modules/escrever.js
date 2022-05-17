const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" }); // flag: '' apaga tudo que está no arquivo e escreve "Frase" nele
};
