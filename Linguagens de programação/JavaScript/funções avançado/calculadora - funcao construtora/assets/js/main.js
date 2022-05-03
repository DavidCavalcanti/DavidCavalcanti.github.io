function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    this.display.addEventListener("keyup", (evento) => {
      if (evento.keyCode !== 13) return;
      this.realizaConta();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (evento) => {
      const elemento = evento.target;
      if (elemento.classList.contains("btn-num")) this.addNumDisplay(elemento); // Se for verdade, passe para o método o botão que foi clicado
      if (elemento.classList.contains("btn-clear")) this.clear(elemento);
      if (elemento.classList.contains("btn-del")) this.del(elemento);
      if (elemento.classList.contains("btn-eq")) this.realizaConta(elemento);
    });
  };

  this.addNumDisplay = (elemento) => {
    this.display.value += elemento.innerText;
    this.display.focus();
  };

  this.clear = (elemento) => (this.display.value = "");

  this.del = (elemento) =>
    (this.display.value = this.display.value.slice(0, -1));

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta inválida!");
        return;
      }

      this.display.value = conta;
    } catch (evento) {
      alert("Conta inválida!");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
