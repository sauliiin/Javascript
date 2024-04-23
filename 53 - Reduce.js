// Reduce é bem versátil! Ele reduz o array, mas pode ser utilizado para várias coisas, inclusive, fazer o mesmo que filter e map, contudo não e recomendado esse uso amplo.

console.log('1 - //------------------------------------------//')

const numeros = [5, 10, 45, 23, 1, 3, 6, 91, 26, 73];
const somaNumerosE = numeros.reduce(function(acumulador, valor, indice, array){
    //console.log(acumulador); // perceba que o acumulador é um objeto e necessita de uma interação para trazer um resultado.
    console.log(valor);
    console.log(indice);
    //console.log(array)
}, 1);  // Eu tb posso receber um valor inicial para meu acumulador, por isso o 1. Mas esse valor é opcional. Se eu não atribuir nada, será o primeiro elemento: teste!

console.log('2 - //------------------------------------------//')

const somaNumeros = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador = acumulador + valor;
    console.log(acumulador, valor);
    // acumulador, valor, índice e array não são números, mas objetos, por isso, preciso do return para que a soma seja mostrada.
    return acumulador;
});
console.log(somaNumeros);

console.log('3 - //------------------------------------------//')

// retorne um array com os valores pares e a soma entre eles
const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor%2 === 0) {
        acumulador.push(valor);}
    return acumulador
    },[]);   // Olha que interessante! Lembra que eu falei que posso atribuir um valor inicial para o acumulador, então, nesse caso o acumulador vai ser um array.
console.log(pares);

const somaPares = numeros.reduce(function(acumulador, valor){
    if (valor%2 === 0) {
        acumulador += valor;
    }
    return acumulador;
    }, 0);   // ATENÇÃO! Se eu nao colocar um valor inicial para o acumulador, ele vai somar o 5 (primeiro numero), mesmo ele nao sendo par.
console.log(somaPares);

console.log('4 - //------------------------------------------//')

//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Olaf', idade: 62},
    {nome: 'Maria', idade: 13},
    {nome: 'Gustaf', idade: 8},
    {nome: 'Junia', idade: 71},
    {nome: 'Wil', idade: 2},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(`${maisVelha.nome} é a pessoa mais velha, com ${maisVelha.idade} anos.`)