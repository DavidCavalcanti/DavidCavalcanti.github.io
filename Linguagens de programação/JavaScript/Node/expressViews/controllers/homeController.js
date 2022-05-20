exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Idade: <input type="text" name="idade">    
    <button>Enviar</button>
    </form>
    `);
};

exports.tratarFormulario = (req, res) => {
  res.send(`Formulário enviado com sucesso! <br />
    Dados enviados: <br /> ${req.body.nome}, ${req.body.idade}    
  `);
};
