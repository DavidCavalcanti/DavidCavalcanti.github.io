let point1;
let point2;
let point3; //Pontos reta
let point4;

let point5; //Pontos circulo
let point6;
let point7;

let pixel = "";
var tela = document.querySelector(".prompt");
var tela2 = document.querySelector(".prompt2");

function plotPoint(xc, yc, x, y) {
    drawPixel(xc + x, yc + y);
    drawPixel(xc - x, yc + y);
    drawPixel(xc + x, yc - y);
    drawPixel(xc - x, yc - y);
    drawPixel(xc + y, yc + x);
    drawPixel(xc - y, yc + x);
    drawPixel(xc + y, yc - x);
    drawPixel(xc - y, yc - x);
}


function PlotarCirculo() {
    let camp2 = document.querySelector("#circulo");
    camp2.setAttribute("cx", point5);
    camp2.setAttribute("xy", point6);
    camp2.setAttribute("r", point7);
}

function drawPixel(x, y) {
    pixel += `<rect x="${x}" y= "${y}" width="10" height="10" style="fill:red; stroke:black; stroke-width:3px"/>`;
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
        drawPixel(round(X*20), round(Y*20));
        X += Xinc;
        Y -= Yinc;
        i++;
    }
    tela.innerHTML = pixel;
    pixel = "";

}

function Bresenham(x1, y1, x2, y2) {

    let dx, dy, p, p2, xy2, x, y, xf;

    dx = x2 - x1;
    dy = y2 - y1;

    p = 2 * dy - dx;
    p2 = 2 * dy;
    xy2 = 2 * (dy - dx);

    if (x1 > x2) {
        x = x2;
        y = y2;
        xf = x1;
    } else {
        x = x1;
        y = y1;
        xf = x2;
    }
    drawPixel(x*20, y*20);

    while (x < xf) {
        x++;
        if (p < 0) {
            p -= p2;
        } else {
            y--;
            p -= xy2;
        }
        drawPixel(x*20, y*20);
    }
    tela.innerHTML = pixel;
    pixel = "";
}

function CirculoSimples(xc, yc, r) {
    let x, y;
    let yr;

    x = 0;
    y = r;
    yr = r;

    plotPoint(xc*5, yc*5, x*5, y*5);

    while (x < yr) {
        x += 1;
        yr = Math.sqrt(r * r - x * x);
        y = parseInt(round(yr));
        plotPoint(xc*5, yc*5, x*5, y*5);
    }

    tela2.innerHTML = pixel;
    pixel = "";
}

function CirculoPontoMedio(xc, yc, r) {
    let x, y, p;
    x = 0;
    y = r;
    p = 1 - r;

    plotPoint(xc*5, yc*5, x*5, y*5);

    while (x < y) {
        x += 1;
        if (p < 0) {
            p = p + 2 * x + 1;
        } else {
            y -= 1;
            p = p + 2 * (x - y) + 1;
        }
        plotPoint(xc*5, yc*5, x*5, y*5);
    }
    tela2.innerHTML = pixel;
    pixel = "";
}

/*
function PlotarReta() {
    let camp1 = document.querySelector("#reta");
    camp1.setAttribute("x1", point1);
    camp1.setAttribute("y1", point2);
    camp1.setAttribute("x2", point3);
    camp1.setAttribute("y2", point4);
}
*/

function ReceberValoresRetaDDA() {
    point1 = parseInt(document.querySelector("#idponto1").value);
    point2 = parseInt(document.querySelector("#idponto2").value);
    point3 = parseInt(document.querySelector("#idponto3").value);
    point4 = parseInt(document.querySelector("#idponto4").value);
    DDA(point1, point2, point3, point4);
}

function RecebeValoresRetaBresenham() {
    point1 = parseInt(document.querySelector("#idponto1").value);
    point2 = parseInt(document.querySelector("#idponto2").value);
    point3 = parseInt(document.querySelector("#idponto3").value);
    point4 = parseInt(document.querySelector("#idponto4").value);
    Bresenham(point1, point2, point3, point4);
}

function ReceberValoresCirculoSimples() {
    point5 = document.querySelector("#idcentroX").value;
    point6 = document.querySelector("#idcentroY").value;
    point7 = document.querySelector("#idraio").value;
    CirculoSimples(point5, point6, point7);
}

function ReceberValoresCirculoPontoMedio() {
    point5 = document.querySelector("#idcentroX").value;
    point6 = document.querySelector("#idcentroY").value;
    point7 = document.querySelector("#idraio").value;
    CirculoPontoMedio(point5, point6, point7);
}