class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    
    toString() {
      return `Pessoa: ${this.nome}, ${this.idade} anos`;
    }
  }

//   Pessoa('Joao', 25); // Erro: Pessoa is not a constructor
  console.log(new Pessoa('Joao', 25)); // Pessoa { nome: 'Joao', idade: 25 }

class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        return `Pessoa: ${this.nome}, ${this.idade} anos`;
    }
}

const pessoa2 = new Pessoa2('Maria', 33);
console.log(pessoa2); 