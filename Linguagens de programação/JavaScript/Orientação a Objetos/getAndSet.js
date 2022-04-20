const _velocidade = Symbol("velocidade"); // Gera uma chave aleatória
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0; // Garante que a velocidade inicie em zero
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const Fusca = new Carro("Fusca");

for (let i = 0; i <= 100; i++) {
  Fusca.acelerar();
  console.log(`O Fusca está acelerando a ${Fusca.velocidade} Km/h`);
}
