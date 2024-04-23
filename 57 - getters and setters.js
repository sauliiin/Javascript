// getters and setters são uma maneira de proteger determinada propriedade de um objeto. Ex: o estoque só pode receber números. O getter é para obter o valor e o setter, para setar

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque; 
    Object.defineProperty(this, 'estoque', {
        enumerable: true,       
        configurable: true,
        get: function() {       // getter
            return estoque;
        }    
    });
}

const p1 = new Produto('Camiseta', 35, 3);
console.log(p1);  /// ATENÇÃOOOO!!! OIÁ SÓ
console.log(p1.estoque);

console.log('//------------------------------------------//')

function Prod(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque; 
    Object.defineProperty(this, 'estoque', {
        enumerable: true,       
        configurable: true,
        get: function() {       // getter. Seu trabalho é basicamente pegar o valor  
            return estoque;
        },
        set: function(valor) {  // setter é para configurar o valor e/ou validá-lo.
            if (typeof valor !== 'number') {
                //throw new TypeError('Digite um número!')
                console.log ('Digite um número!');
                return;
            } 
            estoque = valor;    
        }    
    });
}

const a1 = new Prod('short', 2, 3);
a1.estoque = 'dadsdasd'
console.log('//-------ATENÇÃO! Oiá só! Ele não aceitou as letras acima, avisou e manteve o número 3-------//')             
console.log(a1.estoque)




