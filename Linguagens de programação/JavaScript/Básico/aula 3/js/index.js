//window.alert('Mensagem')

const confirma = confirm('Deseja realmente sair da página?');
const validacao = prompt ('Responda: 4*3');
//validacao = parseFloat();

if (confirma == true && validacao== "12" ){alert('Sessão encerrada');}
else{alert('Sessão ainda vigente, você errou algum passo para logoff');}