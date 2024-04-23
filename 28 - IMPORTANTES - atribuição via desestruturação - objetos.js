const pessoa = {
    nome: 'Olaf',
    idade: 12,
    endereco: {
        rua: 'Araguari',
        numero: 20
    }
};
console.log(pessoa);
console.log(pessoa.nome);
console.log('')

const nome1 = pessoa.nome;
console.log(nome1);
console.log('')

// atribuição via desestruturação. Desestruturação pq eu estou extraindo de um objeto um item
const {nome} = pessoa;
console.log(nome);
const {idade} = pessoa;
console.log(idade);
const {endereco} = pessoa;
console.log(endereco);
const {rua} = endereco;
console.log(rua);
const {numero} = endereco;
console.log(numero);
console.log('')


const pessoa2 = {
    nome2: 'Gustaf',
    idade2: 21,
    endereco2: {
        rua2: 'Alvarenga',
        numero2: 18
    }
};
const {nome2, idade2, endereco2, CEP='Não informado'} = pessoa2;
// Eu fiz isso no CEP para nos casos em que o cidadão deixa de preencher um campo, ao invés de undefinied aparece isso
console.log(nome2, idade2, CEP);
// E se eu quiser mudar o nome da varável?
const {nome2: Nomeee} = pessoa2;
console.log(Nomeee)
const {endereco2: {rua2, numero2}} = pessoa2;
console.log(rua2, numero2);