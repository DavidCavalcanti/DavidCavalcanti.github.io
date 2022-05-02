/**
 * Será utlizado na construção do backend
 * a Factory functions por motivos de exercício,
 * uma vez que, numa construção real, não seria utilizada
 * pois não será criada várias calculadoras, apenas uma.
 */

function criarCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      alert("olá, iniciei :-)");
    },
  };
}

const calculadora = criarCalculadora();
calculadora.inicia();
