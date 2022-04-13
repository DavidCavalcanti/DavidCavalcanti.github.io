// Captura de submit do formulário
const form = document.querySelector("#formulario");

//Parando o envio automático do formulário
form.addEventListener("submit", function (event) {
  // '(e)' é o evento que a qual a função captura
  event.preventDefault();

  //pegando os inputs
  const inputPeso = event.target.querySelector("#peso"); // .target informa qual elemento está recebendo o evento, qual elemento foi clicado na página
  const inputAltura = event.target.querySelector("#altura");

  // Pegando os valores dos inputs
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    // se altura for falsy
    setResutado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResutado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);

  console.log(imc);
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2); // retorna com precissão de duas casas decimais
}

// Função que cria parágrafo
function criaP(className) {
  const p = document.createElement("p"); // Cria um parágrafo(elemento)
  return p;
}

//Função que insere um html dentro da div.resultado
function setResutado(mensagem, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ""; // Zera resultado
  const p = criaP();
  p.innerHTML = mensagem; // coloca um html dentro do parágrafo
  resultado.appendChild(p); // insere p ao resultado (insere na div)
  // p.classList.add("paragrafo-resultado"); // Adiciona uma classe ao parágrafo p
}
