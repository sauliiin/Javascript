// Funções construtoras e funções fábricas criam objetos. Na função construtora é obrigatório o new e, por convenção, a função começa com letra maiúscula

// Função fábrica:
function criaPessoa (nome, sobrenome) {
    return {
        nome, sobrenome 
    };
}
const pes1 = criaPessoa('Luis', 'Otávio')
const pes2 = criaPessoa('Gustaf', 'Oliveira')

// Função construtora:
function Pessoa (nome, sobrenome) {
    this.nome = nome;  // É o mesmo que Pessoa.nome = nome
    this.sobrenome = sobrenome;
}
const p1 = new Pessoa('Olaf', 'Richards');
const p2 = new Pessoa('Pedro', 'Smart');

console.log(pes1)
console.log(pes2)
console.log(p1)
console.log(p2)