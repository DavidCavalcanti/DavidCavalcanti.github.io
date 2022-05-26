// engine é um motor do JavaScript

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
//Dessa forma evita problema ao fazer deploy, mas poderia passar o caminho de outra forma: './src./views'
app.set("views", path.resolve(__dirname, "src", "views")); // caminho absoluto
app.set("view engine", "ejs"); // engine para renderizar os htmls (poder usar funções dentro do html). Tem que instalar o ejs

app.use(routes);

app.listen(3000, () => {
  console.log("Acessar o servidor http://localhost:3000");
});
