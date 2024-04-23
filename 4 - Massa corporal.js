// ECMAScript é uma padronização da linguagem de JS criada pela empresa ECMA. EcmaScript 2015, por ex, é o ES6

const nome = 'Mestre Yoda Rossi'
let data = new Date()
let ano = data.getFullYear()
const anoNascimento = 1984
console.log(ano)
let idade = ano - anoNascimento 
const alturaM = 1.84
let peso = 84
console.log(nome + ` nasceu em ${anoNascimento}, tem ${idade} anos de idade, mede ${alturaM}m e seu IMC é ${(peso/(alturaM*alturaM)).toFixed(2)}.`) // To fixed arredonda casas decimais
// + serve pra concatenar e também para somar! 

nome1 = 'Luiz'
// dá pra fazer! mas é uma variável global e pode afetar outras variáveis e dar ERRO

let nome2 = 'pedro'
//let nome2 = 'Gustaf'
// Nãoooo pode fazer isso com let, mas com var sim. O correto com let para redeclarar é:
nome2 = 'Olaf'