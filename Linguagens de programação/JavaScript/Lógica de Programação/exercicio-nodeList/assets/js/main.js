const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// Pegar fundo do background e colcá-la no parágrafo
const estiloBody = getComputedStyle(document.body); // estiloBody recebe tudo o que foi computado pelo browser
const backgroundColorBody = estiloBody.backgroundColor; // Passando a cor do background do body para backgroundColorBody

//Percorre cada parágrafo 
for (let p of ps){
    p.style.backgroundColor = backgroundColorBody; // Passando a cor do background para cada parágrafo
    p.style.color = '#FFFFFF';
    console.log(p);
}