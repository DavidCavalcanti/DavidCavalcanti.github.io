// Captura de submit do formulário
const form = document.querySelector("#formulario");

//Parando o envio automático do formulário
form.addEventListener("submit", function (event) {
  // '(e)' é o evento que a qual a função captura
  event.preventDefault();
  console.log("Evento parado");  
});

//Função que insere um html dentro da div.resultado
function setResutado(mensagem) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
}
