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
  const nivelImc = getNivelImc(imc);

  const mensagem = `Seu imc é ${imc} (${nivelImc}).`;
  
  setResutado(mensagem, true);
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2); // retorna com precissão de duas casas decimais
}

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
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
  if (isValid) {p.classList.add("paragrafo-resultado");} // Adiciona uma classe ao parágrafo p
  else {p.classList.add("bad");} // Adiciona uma classe ao parágrafo p}
  p.innerHTML = mensagem; // coloca um html dentro do parágrafo
  resultado.appendChild(p); // insere p ao resultado (insere na div)
  // 
}
