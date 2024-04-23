console.log('1 - //------------------------------------------//')

// 1 - Filtrar os pares
// 2 - Dobrar os valores
// 3 - Reduzir valores

const numeros = [5, 10, 45, 23, 1, 3, 6, 91, 26, 73];
const operacao = numeros.filter(function(valor) {
    return valor % 2 == 0;
}).map(function(valor){
    return valor*2;
}).reduce(function(acumulador, valor){
    return acumulador + valor;
});     // não precisa criar novas funções, basta encadear!
console.log(operacao)

// Agora, em arrow function!
const numerosB = [5, 10, 45, 23, 1, 3, 6, 91, 26, 73];
const operacaoB = numeros.filter(valor => valor%2==0).map(valor => valor*2).reduce((acumulador, valor) => acumulador + valor);
console.log(operacaoB)