// .then() é executado quando o resolve() é chamado
// .catch() é xeceudado quando o reject() é chamado

function tempoAleatorio(min, max) {
  max *= 1000; // Transformando em segundos
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espereai(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        return reject("BAD VALUE");
        return;
      }

      resolve(msg);
      return;  // resolve() é de parâmetro único
    }, tempo);
  });
}

espereai("Conexão com o Banco de Dados", tempoAleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return espereai("Buscando dados da BASE", tempoAleatorio(1, 3));
  })
  .then((resposta2) => {
    console.log(resposta2);
    return espereai("Tratando os dados da BASE", tempoAleatorio(1, 3));
  })
  .then((resposta3) => {
    console.log(resposta3);
  })
  .then(() => {
    console.log("Exibe dados na tela.");
  })
  .catch((erro) => {
    console.log("ERROR " + erro);
  });
