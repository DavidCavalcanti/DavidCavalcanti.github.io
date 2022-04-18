let n1 = prompt('Digite um número');
let n2 = prompt('Digite outro número');

// Prompt sempre retorna String, vamos converter isso:

n1 = Number(n1);
n2 = Number(n2);



alert(`O resultado da sua conta foi ${n1+n2}`);