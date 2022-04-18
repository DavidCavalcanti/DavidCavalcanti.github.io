const {
    objetoEndereco: { rua, numero },
    objetoEndereco,
  } = objetoPessoa;
  console.log(rua, numero, objetoEndereco);
  
  const { nome, sobrenome, ...resto } = objetoPessoa;
  console.log(resto);
  
  const frutas = ['maçã', 'banana', 'laranja'];
  
  for(let i=0; i< frutas.length; i++){
    console.log(`Índice ${i} - ${frutas[i]}`);
  }