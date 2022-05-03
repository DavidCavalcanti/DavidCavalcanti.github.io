function* geradora1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

function* contador() {
  let i = 0;

  //loop infinito
  while (true) {
    yield i;
    i++;
  }
}

const gerar1 = geradora1();
const contador1 = contador();

for (let valor of gerar1) {
  console.log(valor);
}

console.log(contador1.next().value);
console.log(contador1.next().value);
console.log(contador1.next().value);
