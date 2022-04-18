/**
 * function saudacao(nome){

    console.log('Hii, ' + nome + '!' + " I'm a function!");

}


const variavel = saudacao()*/

/**
 * function soma(x,y){
    const resultado =  x+y;
    return resultado
}


console.log(soma(5,5));*/

//Função anônima:

const raiz = function(n){
    return n**0.5;
}

//Outra forma de declarar a função, 'Arrow function' para funções de apenas uma linha

const raiz1 = n => n**0.5;

console.log(raiz(9));
console.log(raiz1(16));