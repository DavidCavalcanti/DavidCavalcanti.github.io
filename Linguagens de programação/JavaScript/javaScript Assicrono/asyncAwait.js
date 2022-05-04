function tempoAleatorio(min = 1, max = 5) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function espereAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("ERRO NA MENSAGEM");
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na Promise");
    }, tempo);
  });
}

async function executa() {
  try {
    const conection = espereAi(
      // Gerar um erro por não usar await
      "Conexão com o Banco de Dados",
      1000
    );
    console.log(conection);

    setTimeout(() => {
      console.log('Esta Promise estava pendente', conection);
    }, 1500);

    const findData = await espereAi("Buscando dados da BASE", tempoAleatorio());
    console.log(findData);

    const handleData = await espereAi(
      "Tratando os dados da BASE",
      tempoAleatorio()
    );
    console.log(handleData);

    console.log("Exibe dados na tela.");
  } catch (erro) {
    console.log("ERRO", erro);
  }
}
executa();
