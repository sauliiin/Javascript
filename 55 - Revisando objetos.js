console.log(`O "this" em JavaScript se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo. Ele pode ser usado dentro de uma função para se referir ao objeto que a chamou, ou pode ser usado fora de uma função para se referir ao objeto global. O THIS E MUITO UTILIZADO COM OBJETOS PARA, POR EX. QUANDO FOREM CHAMADOS NÃO FIQUEM UNDEFINED`)


console.log('1 - //------------------------------------------//')
// O objeto literal é feito pelas chaves {}
const pessoa = {
    nome: 'Saulo',
    sobrenome: 'Rossi',
}
console.log(pessoa.nome); 
console.log(pessoa['nome']);
console.log(pessoa[0]); // undefined

console.log('2 - //------------------------------------------//')
// construtor de array tb serve pra objeto.
const pessoa1 = new Object();
pessoa1.nome = 'Olaff';
pessoa1.sobrenome = 'Hosfot';
pessoa1.idade = 26;
console.log(pessoa1);
delete pessoa1.idade; // Olhaaaaa! Manipulei o objeto
console.log(pessoa1);

console.log('3 - //------------------------------------------//')
// objetos podem conter métodos. Métodos são funções que estão dentro do objeto e executam ações. Ou seja, quando as functions estão dentro de objetos, nós as chamamos de métodos.
const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otaf';
pessoa2.idade = 12;
pessoa2.falaNome = function () {
    console.log(`${this.nome}, disse seu nome.`)
};
pessoa2.falaNome();
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; 
}
console.log(pessoa2.getDataNascimento())

console.log('4 - //------------------------------------------//')
const pessoa3 = {
    nome: 'Elois',
    sobrenome: 'Martins',
    fala() {
        console.log(`Olá, eu sou o ${this.nome}!`);
    }
}
pessoa3.fala()

for (let valor in pessoa3) {
    console.log(pessoa3[valor])
}
for (let chave in pessoa3) {
    console.log(chave)
}
console.log('5 - //------------------------------------------//')
// vamos criar um "molde" de vai criar objetos. Os moldes que já vimos são as factory functions e constructor functions. Como JS é uma linguagem baseada em protótipo, ela e bem confuso e diferente das demais linguagens que trabalham com orientação a objetos.

console.log('---------- Factory Function ----------')
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {                             // funciona tb se tirar a palavra get
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Saulo', 'Rossi')
console.log(p1.nomeCompleto)

console.log('---------- Constructor Function ----------')
//Nas constructor functions, o JS muda o comportamento da função baseado na palavra new

function Pessoas(nome, sobrenome) {       // Constructor functions começa SEMPRE com maiúscula
    this.nome = nome;
    this.sobrenome = sobrenome;
}   

const pe1 = new Pessoas('Olaf',  'Crazy');
console.log(pe1);