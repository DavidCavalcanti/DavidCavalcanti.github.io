const HomeModel = require("../models/homeModel");

HomeModel.find({
  titulo: "Outra coisa qualquer",
  descricao: "Outra descrição.",
})
  .then((dados) => console.log(dados))
  .catch((erro) => console.log(erro));

exports.paginaHome = (req, res) => {
  /*req.flash("home", "Hello world!");
  req.flash("info", "Página em manutenção");
  req.flash("sucess", "Usuário logado");*/
  res.render("home.ejs", {
    //titulo: "Este será o título da página",
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  /*res.send(`
       <h1 style="text-align: center"> Hy, I'm David Cavalcanti 
        <br> Computer enginnering Student at UNIVASF        
        </h1><hr>                
    `);*/
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
};
