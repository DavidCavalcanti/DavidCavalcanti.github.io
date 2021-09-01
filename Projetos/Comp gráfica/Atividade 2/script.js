let point1;
let point2;
let point3; //Pontos reta
let point4;

let point5; //Pontos circulo
let point6;
let point7;

let pixel = "";
var tela = document.querySelector(".prompt");

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
   pixel += `<rect x="${x}" y= "${y}" width="20" height="20" style="fill:red; stroke:black; stroke-width:3px"/>`;
}


function round(number) {
    return parseInt(number);
}


function DDA(x1, y1, x2, y2) {
    let step, i = 0;
    let X, Y;
    let Xinc, Yinc;
    step = Math.abs(x2 - x1);

    if (Math.abs(y2 - y1) > step)
        step = Math.abs(y2 - y1);

    Xinc = (x2 - x1) / step;
    Yinc = (y2 - y1) / step;
    X = x1;
    Y = y1;       

    while (i <= step) {
        console.log(X);
        console.log(Y);
        drawPixel(round(X), round(Y));
        X += Xinc;
        Y += Yinc;
        i++;
    }
    tela.innerHTML = pixel;

}



function ReceberValoresReta() {
    point1 = parseInt(document.querySelector("#idponto1").value);
    point2 = parseInt(document.querySelector("#idponto2").value);
    point3 = parseInt(document.querySelector("#idponto3").value);
    point4 = parseInt(document.querySelector("#idponto4").value);
    PlotarReta();
    DDA(point1, point2, point3, point4);

}

function PlotarReta(){
    let camp1 = document.querySelector("#reta");
    camp1.setAttribute("x1", point1);
    camp1.setAttribute("y1", point2);
    camp1.setAttribute("x2", point3);
    camp1.setAttribute("y2", point4);
}