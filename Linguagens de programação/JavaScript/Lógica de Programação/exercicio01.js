// Escrever uma função que recebe 2 números e retorna o maior deles

/*function maior (valor1, valor2){
    if(valor1>valor2){
        return valor1;
    }else{
        return valor2;
    }
}*/

//===============================

// Melhorando a função
/*function maior(valor1, valor2) {
  if (valor1 > valor2) {
    return valor1;
  }
  return valor2;
}*/

//===============================

// Melhorando mais a função
/*function maior(valor1, valor2) {
  if (valor1 > valor2) return valor1;
  return valor2;
}*/

//===============================

// Melhorando ainda mais a função
/*function maior(valor1, valor2) {
  return valor1 > valor2 ? valor1 : valor2;
}*/

//===============================

//Agora utilizando arrow function
/*const maior = (valor1, valor2) => {
    return valor1 > valor2 ? valor1 : valor2;
}*/

//===============================

//Agora melhorando ainda mais utilizando arrow function
const maior = (valor1, valor2) => (valor1 > valor2 ? valor1 : valor2);

console.log(maior(210, 30));
