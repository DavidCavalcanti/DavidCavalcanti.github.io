/* const mod1 = require('./mod1'); 
console.log(mod1.falaNome()); */

const path = require("path");
const axios = require("axios");
//Fazendo um destruct
const { pessoa } = require("./mod1");

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => console.log(response.data))
  .catch((erro) => console.log(erro));

//  const p1 = new pessoa("David");

//console.log(p1);
