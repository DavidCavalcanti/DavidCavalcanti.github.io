module.exports = (req, res, next) => {
  console.log();
    if(req.body.cliente) {
        req.body.cliente = req.body.cliente.replace("Cavalcanti", "Não use Cavalcanti")
        console.log(`Você postou ${req.body.cliente}`);
    }
  console.log();

  next();
};
