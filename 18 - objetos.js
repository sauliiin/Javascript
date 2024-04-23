// veja que vc consegue alterar os componentes de uma array mesmo que ela seja uma constante, oq que não é possível é alterar toda a constante, tipo: const array = [1,2,3]; array = Olaf
const array = [1,2,3]
array.push(4)
array[0] = 'Joseph'
console.log(array)
console.log('')

// vamos criar um objeto:
const pessoa1 = {
    nome: 'Saulo',
    idade: 38,
    peso: 82
}
console.log(pessoa1)
console.log(pessoa1.nome)

const pessoa2 = {
    nome: 'Olaf',
    idade: 23,
    peso: 68
}

const array2 = [pessoa1, pessoa2]
console.log(pessoa1, pessoa2)
console.log(array2)
console.log('')

function criaPessoas (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoas1 = criaPessoas ('Gustaf', 'Oliveira', 33)
const pessoas2 = criaPessoas ('Olaf', 'Rufo', 12)
const pessoas3 = criaPessoas ('Maria', 'Clara', 24)
console.log(pessoas1, pessoas2, pessoas3)
console.log('')

/*O JS é espertinho! Pode resumir a função assim:
function criaPessoas (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}*/
const pessoax = {
    nomex: 'Luis',
    sobrenomex: 'Carlos',
    idadex: 23,

    fala() {
        console.log(`Olá, meu nome é ${this.nomex} ${this.sobrenomex} e tenho ${this.idadex} anos.`)
    },
    aumentaidade(numx){
        this.idadex = this.idadex + numx;
    }
}
pessoax.fala()
pessoax.aumentaidade(12)
pessoax.fala()
console.log('')