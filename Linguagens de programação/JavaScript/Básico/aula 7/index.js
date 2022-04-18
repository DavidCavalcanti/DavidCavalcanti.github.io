/**
 * Criando objeto

    para criar array usa '[]'
    para criar objeto usa '{}'


const pessoa = {
    nome:'David',
    sobrenome: 'Cavalcanti',
    idade: 23
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

*/


//Criando função para gerar obejtos

function criaPessoa (nome, sobrenome, idade){
    return{
        nome, sobrenome, idade
    };
}


const Pessoa1 = criaPessoa('David', 'Cavalcanti', 23);
console.log(Pessoa1.nome, Pessoa1.sobrenome);