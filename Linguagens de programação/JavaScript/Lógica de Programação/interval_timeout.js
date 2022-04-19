// setInterval - Quando for trabalhar com intervalo de tempo. Ele configura um intervalo de tempo.

function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {});
}

const timer = setInterval(function () {
  console.log(mostrarHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 5000);

setTimeout(function(){
    console.log('Olá, mundo!');
},5000);