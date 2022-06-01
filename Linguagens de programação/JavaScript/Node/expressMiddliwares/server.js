const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const port = 3000;
const middleware = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middleware);
app.use(routes);

app.listen(port, () => {
  console, console.log("Acessar servidor: http://localhost:3000/");
  console.log("Servidor ativo na porta 3000");
});
