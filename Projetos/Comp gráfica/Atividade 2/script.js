let point1;
let point2;
let point3; //Pontos reta
let point4;

let point5; //Pontos circulo
let point6;
let point7;

let pixel = "";
var tela = document.querySelector(".prompt");

function PlotarReta() {
    let camp1 = document.querySelector("#reta");
    camp1.setAttribute("x1", point1);
    camp1.setAttribute("y1", point2);
    camp1.setAttribute("x2", point3);
    camp1.setAttribute("y2", point4);
}

function ReceberValoresCirculo() {
    point5 = document.querySelector("#idcentroX").value;
    point6 = document.querySelector("#idcentroY").value;
    point7 = document.querySelector("#idraio").value;
    PlotarCirculo();
}

function PlotarCirculo() {
    let camp2 = document.querySelector("#circulo");
    camp2.setAttribute("cx", point5);
    camp2.setAttribute("xy", point6);
    camp2.setAttribute("r", point7);
}

function drawPixel(x, y) {
    pixel += `<rect x="${x}" y= "${y}" width="5" height="5" style="fill:red; stroke:black; stroke-width:3px"/>`;
}


//retorna um numero positivo

function abs(number) {
    if (number < 0)
        return number * (-1)
    return number
}
//arredonda o número

function round(number) {
    return parseInt(number + 0.5);
}


function DDA(x1, y1, x2, y2){
    let step;
    let X;                      //COMECEI A FAZER IGUAL A DE JORGE
    tela.innerHTML = pixel;
}



function ReceberValoresReta() {
    point1 = document.querySelector("#idponto1").value;
    point2 = document.querySelector("#idponto2").value;
    point3 = document.querySelector("#idponto3").value;
    point4 = document.querySelector("#idponto4").value;
    DDA(point1, point2, point3, point4);
}
