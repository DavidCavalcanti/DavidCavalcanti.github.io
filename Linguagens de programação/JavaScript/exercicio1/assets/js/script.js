function meuEscopo() {
  const form = document.querySelector(".form"); // Selecionando o formulário a partir de sua classe
  const resultado = document.querySelector(".resultado");

  const pessoas = []; //recebe uma array

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Previne eventos padrões, como por exemplo o envio automático de formulário

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      // .value para pegar os valores dos inputs
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML +=
      `<p>Nome: ${nome.value} ${sobrenome.value} <br />` +
      `Peso: ${peso.value} kg <br /> Altura: ${altura.value} cm</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
