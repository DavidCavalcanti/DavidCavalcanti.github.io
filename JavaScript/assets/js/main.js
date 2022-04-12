// Captura de submit do formulário
const form = document.querySelector("#formulario");

//Parando o envio automático do formulário
form.addEventListener("submit", function (event) {
  // '(e)' é o evento que a qual a função captura
  event.preventDefault();
  console.log("Evento parado"); 
  setResutado() ;
});

// Função que cria parágrafo
function criaP(className){
    const p = document.createElement('p'); // Cria um parágrafo(elemento) 
    return p;
}

//Função que insere um html dentro da div.resultado
function setResutado(mensagem) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ''; // Zera resultado 
  const p = criaP();  
  p.classList.add('paragrafo-resultado'); // Adiciona uma classe ao parágrafo p
  p.innerHTML = 'Qualquer coisa'; // coloca um html dentro do parágrafo
  resultado.appendChild(p); // insere p ao resultado (insere na div)
}
