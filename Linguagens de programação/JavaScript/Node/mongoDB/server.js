const express = require("express");
const app = express();

const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://davidcavalcanti:teste123@cluster0.c9srumn.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => {
    console.log("Sucesso ao conectar à base de dados.");
    app.emit("Pronto");
  })
  .catch((erro) => console.log(erro));

const routes = require("./routes");
const path = require("path");
const port = 3000;
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middlewareGlobal);
app.use(routes);

app.on("Pronto", () => {
  app.listen(port, () => {
    console, console.log("Acessar servidor: http://localhost:3000/");
    console.log("Servidor ativo na porta 3000");
  });
});
