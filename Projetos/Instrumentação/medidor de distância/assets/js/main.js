function relogio() {
  function getFromSeconds(seconds) {
    const data = new Date(seconds * 1000); // JavaScript recebe em ms

    return data.toLocaleTimeString("pt-br", {
      timeZone: "UTC", // Passando UTC ele desconsidera o horário atual, considerando a partir de 01/01/1970, 00:00:00.
    });
  }
  const relogio = document.querySelector(".relogio");

  //Pegar envento de click
  document.addEventListener("click", (evento) => {
    const elemento = evento.target; // Target informa em qual elemento estamos clicando
  });
}
