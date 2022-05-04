// Trabalhando com Ajax

const request = (objeto) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(objeto.method, objeto.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText); // texto que vem do html
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (evento) => {
  const elemento = evento.target;
  const tag = elemento.tagName.toLowerCase();

  if (tag === "a") {
    evento.preventDefault();
    carregaPagina(elemento);
  }
});

async function carregaPagina(elemento) {
  const href = elemento.getAttribute("href");

  const objetoConfig = {
    method: "GET",
    url: href,
  };
try{
    const response = await request(objetoConfig);
    carregaResultado(response);
}catch(erro){
    carregaResultado('Erro ao carregar a página');
}
  
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
