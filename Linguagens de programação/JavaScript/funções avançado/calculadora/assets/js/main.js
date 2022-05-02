/**
 * Será utlizado na construção do backend
 * a Factory functions por motivos de exercício,
 * uma vez que, numa construção real, não seria utilizada
 * pois não será criada várias calculadoras, apenas uma.
 */

function criarCalculadora() {
  return {
    display: document.querySelector(".display"),

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); // slice: (tamanho da string, menos um)
    },

    inicia() {
      this.cliqueBotoes();
      this.pressionarEnter();
    },

    pressionarEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (evento) {
        alert("Conta inválida");
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener("click", (evento) => {
        const elemento = evento.target;

        if (elemento.classList.contains("btn-num")) {
          this.btnParaDisplay(elemento.innerText); // innerText pega o valor texto do button
        }

        if (elemento.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (elemento.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (elemento.classList.contains("btn-eq")) {
          this.realizaConta();
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
