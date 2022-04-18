// Tratando e lançando erros (try, catch, throw)

/*try {
  console.log(naoExisto);
} catch (erro) {
  console.log("naoexisto não existe");
}*/

// Exemplo

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw (`x e y precisam ser número.`);
  }
  return x + y;
}

try{
console.log(soma(1,3));
console.log(soma(1,'a'));
}catch(error){
  //console.log(error);
  console.log(`lançar algo mais amigável ao ausuário`);
}