// Factory function

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(nomeCompleto) {
      nomeCompleto = nomeCompleto.split(" "); // Divide o nome de acordo com os espaços, retornado uma string.
      this.nome = nomeCompleto.shift(); // Retira a primeira string retornada do .split e apaga após atribuíla a this.nome
      this.sobrenome = nomeCompleto.join(' ');// Junta todos os elementos de um array em uma string e retorna esta string
      console.log(nomeCompleto);
    },

    fala: (assunto) => {
      return `${nome} ${sobrenome} está ${assunto}.`;
    },
    altura,
    peso,
    imc: () => {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const pessoa1 = criaPessoa("David", "Cavalcanti", 1.78, 74);

pessoa1.nomeCompleto = "Luana Larissa Teixeira Torees";
console.log(pessoa1.nomeCompleto);
