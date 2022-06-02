const mongoose = require("mongoose");

//modelagem dos dados
const HomeSchema = new mongoose.Schema({
  // mandando cofiguração dos dados que queremos
  titulo: { type: String, required: true },
  descricao: String,
});

const HomeModel = mongoose.model("Home", HomeSchema);

module.exports = HomeModel;
