const pessoa = {
  nome: "David",
  sobrenome: "Cavalcanti",
  idade: 23,
  cpf: "118.197.484-75",
};

for (let chave in pessoa) {
  console.log(`${chave} = ${pessoa[chave]}`);
}

const chave = 'nome';
console.log(pessoa[chave]);