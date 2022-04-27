// IIFE -> Immediately Invoked Function expression

// Funçao imediata
(function (idade, peso, altura) {
  const sobrenome = "Levy";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("David"));
  }

  falaNome();
  console.log(idade, peso, altura)
})(23, 74, 1.78); // (); ao final executa a função imediatamente
