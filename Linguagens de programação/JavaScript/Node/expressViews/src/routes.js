const express = require("express");
const route = express.Router();
const homeController = require("./controllers/homeController");
const contatoController = require("./controllers/contatoController");

//Rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.tratarFormulario);

//Rotas da contato
route.get("/contato", contatoController.paginaInicial);

//Exportar todas as rotas
module.exports = route;
