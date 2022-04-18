/**
 * Atribuição via desestruturação com objetos
 */

const objetoPessoa = {
  nome: "David",
  sobrenome: "Cavalcanti",
  idade: 23,
  objetoEndereco: {
    rua: "Rua Tamandaré",
    numero: 347,
  },
};

// Atribuição via desestruturação
const {nome} = objetoPessoa;
/**
 * Estrai a chave 'nome' do objetoPessoa. O nome
 * da chave de ser igual a que está no objeto
 *
 * Podemos setar o valor da chave dentro da const, por exemplo: {nome = 'fulano da silva'}
 *
 * Pode também criar uma variável a paritr de uma chave, exemplo: const {nome: variavelTeste }, podendo
 * setar tbm o seu valor: const {nome: variavelTeste = 'testando funcionalidade' }
 */
console.log(nome);

const {objetoEndereco}  =  objetoPessoa;
console.log(objetoEndereco);
