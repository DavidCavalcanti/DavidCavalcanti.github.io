let point1;
let point2;
let point3; //Pontos reta
let point4;

let point5; //Pontos circulo
let point6; 
let point7;

function ReceberValoresReta(){
    point1 = document.querySelector("#idponto1").value; 
    point2 = document.querySelector("#idponto2").value; 
    point3 = document.querySelector("#idponto3").value; 
    point4 = document.querySelector("#idponto4").value; 
    PlotarReta();
}  

function PlotarReta(){
    let camp1 = document.querySelector("#reta");
    camp1.setAttribute("x1", point1);
    camp1.setAttribute("y1", point2);
    camp1.setAttribute("x2", point3);
    camp1.setAttribute("y2", point4);
}

function ReceberValoresCirculo(){
    point5 = document.querySelector("#idcentroX").value; 
    point6 = document.querySelector("#idcentroY").value; 
    point7 = document.querySelector("#idraio").value; 
    PlotarCirculo();
}  

function PlotarCirculo(){
    let camp2 = document.querySelector("#circulo");
    camp2.setAttribute("cx", point5);
    camp2.setAttribute("xy", point6);
    camp2.setAttribute("r", point7);
}
