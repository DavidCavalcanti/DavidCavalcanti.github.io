// urlencoded() é um método embutido no express para 
// reconhecer o objeto de solicitação de entrada como
// strings ou arrays 

const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/", (requisicao, resposta) => {
  resposta.send(`
  <form action='/' method= "POST">
  Nome: <input type="text" name="nome">  
  <button>Enviar</button>
  `);
});

// idUsuarios quando possui '?' diz que o parâmetro será opcional
app.get("/testes/:idUsuarios?/:parametroOpcional?", (req, res) => {
  console.log(req.params); // Partes  que vem na rota da url
  console.log(req.query); // Pega o que foi madado pela query String
  res.send(req.params);
});

app.post("/", (req, res) => {  
  res.send(`O que você enviou pelo formulário foi: ${req.body.nome}`); 
  console.log(req.body);
});

// Mando o express escutar qualquer coisa que chegar na porta 3000
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
