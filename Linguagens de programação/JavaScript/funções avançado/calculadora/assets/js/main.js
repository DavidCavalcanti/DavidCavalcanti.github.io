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
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener("click", (evento) => {
        const elemento = evento.target;

        if (elemento.classList.contains("btn-num")) {
          this.btnParaDisplay(elemento.innerText); // innerText pega o valor texto do button
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criarCalculadora();
calculadora.inicia();
