// Promise.all -> resolve todas as promises, caso alguma seja rejeitada ele não executa nenhuma
// Promise.race -> retorna a primeira promise resolvida, mas não para executar o resto, mesmo que não apresente na tela
// Promice.resolve ->
// Promice.reject ->

function tempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function espereai(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("INVÁLIDO");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return espereai("Baixei a página", 3000);
  }
}

// Promise.all Promise.race Promice.resolve Promice.reject

const promises = [
  //"Primeiro valor", // não é uma promise, então será apresentado primeiro
  espereai("Promise 1", tempoAleatorio(1, 5)),
  espereai("Promise 2", tempoAleatorio(1, 5)),
  espereai("Promise 3", tempoAleatorio(1, 5)),
  //"Outro valor",
];

/*Promise.all(promises)
  .then((valores) => {
    console.log(valores);
  })
  .catch((erro) => {
    console.log(erro);
  });

Promise.race(promises)
  .then((valores) => {
    console.log(valores);
  })
  .catch((erro) => {
    console.log(erro);
  });
*/

baixaPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((erro) => console.log("ERRO ", erro));
