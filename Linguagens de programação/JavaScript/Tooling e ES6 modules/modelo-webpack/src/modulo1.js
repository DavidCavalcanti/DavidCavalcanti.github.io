export const nome = "David";
export const sobrenome = " Cavalcanti";
export const idade = 23;

export function soma(x, y) {
  return x + y;
}

export const multiplicacao = (x, y) => x * y;

export default class Pessoa {
  construct(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
}
