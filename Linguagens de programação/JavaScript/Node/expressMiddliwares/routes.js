const express = require("express");
const route = express.Router();
const paginaHome = require("./src/controllers/home");
const paginaContato = require("./src/controllers/contato");

// Rota da página home
route.get("/", paginaHome.paginaHome);

// Rota da página contato
route.get("/contato", paginaContato.paginaContato);
route.post("/", paginaContato.trataForm);

module.exports = route;
