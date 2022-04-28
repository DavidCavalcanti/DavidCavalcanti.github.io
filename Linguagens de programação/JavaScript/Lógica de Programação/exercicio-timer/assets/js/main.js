function relogio() {
  function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000); // * 1000 porque o JavaScript recebe em ms

    return data.toLocaleTimeString("pt-BR", {
      timeZone: "GMT",
    });
  }

  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciarRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  //Pegando evento de click
  document.addEventListener("click", function (evento) {
    const elemento = evento.target; // target informa em qual elemento estamos clicando

    if (elemento.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
    if (elemento.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }
    if (elemento.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciarRelogio();
    }
  });
}

relogio();
