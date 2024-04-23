// O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

/*
Produtos: Camiseta, caneca
*/

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.diminui = function(quantia) {
    this.preco -= quantia;
};

//.....................................................//

function Camiseta (nome, preco, cor) {  // camiseta herda tudo que produto tem, mas pode ter as suas coisas específicas.
    Produto.call(this, nome, preco);
    this.cor = cor;
}
// mas o prototype do produto ainda não está linkado com o prototype do Produto. Vamos lá:
// Criamos um objeto vazio para linkar os prototypes, assim, poderei utilizar o .aumento e .diminui
Camiseta.prototype = Object.create(Produto.prototype);
// O comando abaixo é para criar a classe camiseta, porque senão fica na classe produto   
Camiseta.prototype.constructor = Camiseta;

const camisaregatarosa = new Camiseta('Regata', 20, 'Rosa');
console.log(camisaregatarosa);
camisaregatarosa.aumento(5);
console.log(camisaregatarosa);

//.....................................................//

function Caneca (nome, preço, material, tamanho) {
    Produto.call(this, nome, preço);
    this.material = material;
    this.tamanho = tamanho;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const canevavingadores = new Caneca ('Vingadores', 10, 'Plástico', 'P');
const produtoC = new Produto ('Caneca Vingadores', 7.5);
canevavingadores.diminui(2.5);
console.log(canevavingadores);
console.log(produtoC);