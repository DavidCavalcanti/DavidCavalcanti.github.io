// Declaração de função (Function hoisting)

falaOi();

function falaOi() {
  console.log("Oie!");
}

// First-class objects (Objetos de primeira classe). Podem ser passada uma função para uma variável
// Funciton expression
const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

// Arrow function

const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

funcaoArrow();
 
// Dentro de um objeto pode haver função
const obj ={
    falar (){console.log('Estou falando...')}
}

obj.falar();