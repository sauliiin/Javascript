// eu quero que a propriedade estoque fique oculta

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque; 
    Object.defineProperty(this, 'estoque', {
        enumerable: false,     // oculta o estoque
        value: estoque,        // é o mesmo que this.estoque = estoque
        writable: true,        // permite alterar o valor
        configurable: false    // não permite configurar essas chave, no caso, não é permitida alterá-la ou reconfigurá-la.
    });
    Object.defineProperties(this, { // a diferença deste comando é que eu posso alterar várias variáveis de uma vez
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);  // nome e preço são variáveis nome é públicas (posso acessá-las de fora do objeto! Consigo acessá-la pelo console.log
console.log(p1);
console.log(Object.keys(p1));   // IMPORTANTE - comando para ver as chaves enumeráveis do objeto.
for (let chave in p1) {         // O comando acima é quase o mesmo que este
    console.log(chave);
}