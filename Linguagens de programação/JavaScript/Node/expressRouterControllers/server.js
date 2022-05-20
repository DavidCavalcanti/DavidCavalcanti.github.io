const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extress: true }));
app.use(routes);

app.listen(3000, () => {
  console.log("Acessar servidor: http://localhost:3000/");
});
