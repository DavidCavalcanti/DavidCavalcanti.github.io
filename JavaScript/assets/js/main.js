// Captura de submit do formulário
const form = document.querySelector('form');

//Parando o envio do formulário
form.addEventListener('submit', function(e){ // '(e)' é o evento que a qual a função captura
    e.preventDefault();
    console.log('Evento parado');
})