exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = "Este é o valor da vairável local"; //Pode ser criado funções, arrays, etc.
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
