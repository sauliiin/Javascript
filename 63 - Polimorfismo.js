// function Conta é Superclass na POO, ou classe pai/mãe. Polimorfismo é quando filhas se comportam de forma diferente, mesmo tendo mesmo pai. Por ex, posso criar contas correntes com limites diferentes, conta poupança etc 
function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}.`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Agencia/Banco: ${this.agencia}/${this.conta}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
};

const novaConta = new Conta (2864, 20330, 1000);
novaConta.depositar(25);
novaConta.sacar(100);


// ----------------------------------------------------------- //

function ContaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite   // Obs: Nós estamos chamando da superclass a Ag, Conta e saldo. Somente o limite e uma atribuição especifica da conta corrente  
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente; 

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}.`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const NovaContaCorrente = new ContaCorrente(2837, 11000, 200, 100);
NovaContaCorrente.depositar(10);
NovaContaCorrente.sacar(220)

// ----------------------------------------------------------- //
