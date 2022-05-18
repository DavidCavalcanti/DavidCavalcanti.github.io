const express = require("express");
const app = express();

//        Criar  ler   atualizar  apagar
//CRUD -> CRATE, READ, UPDATE,    DELETE
//        POST   GET   PUT        DELETE

// http://meusite.com/ <- GET -> Entregue a página(rota) /
// http://meusite.com/sobre <- GET -> Entregue a página(rota) /sobre
// http://meusite.com/contato <- GET -> Entregue a página(rota) /contato

app.get("/", (requisicao, resposta) => {
  resposta.send(`
  <form action='/' method= "POST">
  Nome do cliente: <input type="text" name="nome">
  <button> Enviar Agora</button>
  `);
});

app.post("/", (req, res) => {
  res.send("Formulário recebido!");
});

app.get("/contato", (requisicao, resposta) => {
  resposta.send("Obrigado por entrar em contato com a gente!");
});

// Mando o express escutar qualquer coisa que chegar na porta 3000
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
