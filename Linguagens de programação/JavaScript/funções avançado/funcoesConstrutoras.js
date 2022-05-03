// Função Construtoras retorna objetos
// Função Construtoras retorna objetos
// Função Construtora, por convenção, começa com letra maiúscula

function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 01022020;

    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = () =>{
        console.log(this.nome, this.sobrenome);
    };
}

const p1 = new Pessoa('David', 'Cavalcanti');
const p2 = new Pessoa('Luana', 'Torres');

p1.metodo();