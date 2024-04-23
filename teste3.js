const numeros = [5, 10, 45, 23, 1, 3, 6, 91, 26, 73];
const somaNumeros = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador = acumulador + valor;
    console.log(acumulador, valor);
    // acumulador, valor, índice e array não são números, mas objetos, por isso, preciso do return para que a soma seja mostrada.
    return acumulador;
}, 11);
console.log(somaNumeros);