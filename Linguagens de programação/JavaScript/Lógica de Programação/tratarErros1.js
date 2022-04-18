/*try {
  // É executada quando não há erros

  // console.log(a); para testar  catch apague este comentário
  console.log('Abrir um arquivo');
  console.log('Mnipular um arquivo e gerar erro');
  console.log('Fechar o arquivo');

} catch (erro) {
  // É executada quando há erros
  console.log('Tratando o erro');
} finally {
  // sempre é exeutada
  console.log('FINALLY: Eu sempre sou executado');
}*/

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    // Ler:  Se a data foi enviada e não for uma instância de Date, faça:
    throw new TypeError("Esperando instância de Date.");
  }

  if(!data){
      data = new Date();
  }

  return data.toLocaleTimeString('pt-BR',{
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      hour12: false
  });
}

try{
const data = new Date('11-04-2022 17:41:30');
const hora = retornaHora();
console.log(hora);
} catch (erro){
    // Tratar erro
    console.log('Problema inesperado');
} finally{
    console.log('Olá, este é o horário atual :-).');
}
