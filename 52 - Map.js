// A map altera valores do array, sem alterar seu tamanho. Assim como o filter, o map funciona como um for, checando cada elemento do array e realizando a função desejada

// vamos dobrar todos os némeros deste array
const numeros = [5, 10, 45, 23, 1, 3, 6, 91, 26, 73];
const numerosEmDobro = numeros.map(function(valor){
    return valor*2
})
console.log(numerosEmDobro)

// vamos resumir isto!
const numerosEmTriplo = numeros.map(valor => 3*valor)
console.log(numerosEmTriplo)

// Vamos trabalhar com objetos
const pessoas = [
    {nome: 'Olaf', idade: 62},
    {nome: 'Maria', idade: 13},
    {nome: 'Gustaf', idade: 8},
    {nome: 'Junia', idade: 71},
    {nome: 'Wil', idade: 2},
];
const nomes = pessoas.map(obj => obj.nome); 
console.log(nomes);

// remova apenas a chave nome do objeto e mostre apenas idades
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);