const HomeModel = require("../models/homeModel");

HomeModel.find({
  titulo: "Outra coisa qualquer",
  descricao: "Outra descrição.",
})
  .then((dados) => console.log(dados))
  .catch((erro) => console.log(erro));

exports.paginaHome = (req, res) => {
  console.log(req.session.usuario );
  res.render("home.ejs");
  /*res.send(`
       <h1 style="text-align: center"> Hy, I'm David Cavalcanti 
        <br> Computer enginnering Student at UNIVASF        
        </h1><hr>                
    `);*/
  return;
};
