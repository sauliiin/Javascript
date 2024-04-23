/* A ação de criar novos objetos a gente chama de instanciação.
Por meio dos protótipos a gente passa as propriedades e métodos de um objeto para outro.

Protótipo é  aquele que serve de model para futuras produções.

Todos objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da  função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar ou não tal membro.*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() { // quando vc chama o prototype, todos os objetos que contam na função construtora referenciada serão chamados. Caso este membro (nomeCompleto) já exista no pai, ele vai usar o do pai.
    return this.nome + ' ' + this.sobrenome;
};

console.log('//------------------------------------------//')

// Obs, no dev tolls, obj._proto_ === Object.prototype
const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
// So outra forma de escrever a mesma coisa acima:
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);   // O objeto C herda (tem o prototype) do objeto B, que tem o prototype objeto A.

// O objC passa pelo objB que passa pelo objA que chega no Object.prototype

console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveC);

// Veja que isso pode ser muito poderoso, porque você pode usar códigos de outros objetos.

console.log('//------------------------------------------//')

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
    // poderia utilizar o prototype abaixo aqui como this.desconto, etc. Mas isso não é muito performático.
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
};
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
};

const p1 = new Produto ('Camiseta', 50);
console.log(p1);
p1.desconto(10);
console.log(p1)
p1.aumento(35);
console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15,      // Obs: o que eu quero utilizar para aproveitar prototype, tem que tem o mesmo nome. Aqui não pode ser, por ex, valor:
    cor: 'rosa'
}
// vamos aproveitar o prototype do produto!
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2)
p2.desconto(30);
console.log(p2)

const p3 = Object.create(Produto.prototype, {     // veja que eu posso chamar o prototype direto ao criar o objeto.
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'shorts'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 35
    } 
});
console.log(p3)
p3.aumento(10);
console.log(p3)


