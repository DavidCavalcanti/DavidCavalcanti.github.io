require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => {
    app.emit("Pronto");
  })
  .catch((erro) => console.log(erro));

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");

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
