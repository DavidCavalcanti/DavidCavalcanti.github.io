class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

// Criando um pararelo com prototype
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = () => {
  console.log(`${this.nome} está falando.`);
};

Pessoa2.prototype.comer = () => {
    console.log(`${this.nome} está comnedo.`);
  };
//------------------------------------------

// p1 e p2 são praticamente iguais, o que divergem
// é apenas no construtor que em p1 é uma classe Pessoa
// (constructor: class Pessoa) e em p2 é uma função construtora
// (constructor f Pesso2(nome, sobrenome))
const p1 = new Pessoa("David", "Levy");
const p2 = new Pessoa2("Marmaduk", "Rabinut");

p1.falar();
p1.beber();
p1.comer();

p2.falar();
