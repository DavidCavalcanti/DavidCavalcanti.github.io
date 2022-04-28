function relogio() {
  function getFromSeconds(seconds) {
    const data = new Date(seconds * 1000); // JavaScript recebe em ms

    return data.toLocaleTimeString("pt-br", {
      timeZone: "UTC", // Passando UTC ele desconsidera o horário atual, considerando a partir de 01/01/1970, 00:00:00.
    });
  }
  const relogio = document.querySelector(".relogio");
  let seconds = 0; // Variável que mantem os segundos
  let timer;

  function IniciarRelogio() {
    timer = setInterval(() => {
      seconds++;
      relogio.innerHTML = getFromSeconds(seconds); // getFromSeconds recebe os segundos e formata o horário
    }, 1000);
  }

  //Pegar envento de click
  document.addEventListener("click", (evento) => {
    const elemento = evento.target; // Target informa em qual elemento estamos clicando

    if (elemento.classList.contains("zerar")) {
      clearInterval(timer); //limpa o timer configurado pela função setInterval(). Ele desativa a função e não executa a função definida pelo temporizador
      relogio.classList.remove("pausado");
      relogio.innerHTML = "00:00:00";
      seconds = 0;
    }

  
  });
}
