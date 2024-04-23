// Filter sempre retorna um array com a mesma quantidade de elementos do array original ou menos

// retornar numeros maiores que 10
const numeros = [5, 10, 45, 23, 1, 3, 6, 91, 26, 73];
// o método filter vai receber uma função de callback que vai iterar sobre cada um dos elementos do array

function callbackFilter(valoresDnumeros) {
    if (valoresDnumeros > 10) {
        return true; // se os valor for > 10, retorna este valor
    } else {
        return false;
    }
}
/* a função acima poderia ser bem melhor:
function callbackFilter(valoresDnumeros) {
    return valor > 10;
}

Obs: posso usar o callback como uma função anônima ou uma arrow function:
const maiorQ10 = numeros.filter(valor => valor > 10);
*/

// para compreender melhor, olha oq o filter faz, ele funciona como um for, checando cada elemento do array e buscando o resultado que você quer:
const maiorQ10b = numeros.filter((valor) => {
    console.log(valor);
    return valor > 10
})
console.log(maiorQ10b)
//

const maiorQ10 = numeros.filter(callbackFilter);
console.log(maiorQ10)



// A - Retorne as pessoas que tem nome com 5 letras ou mais
const pessoas = [
    {nome: 'Olaf', idade: 62},
    {nome: 'Maria', idade: 13},
    {nome: 'Gustaf', idade: 8},
    {nome: 'Junia', idade: 71},
    {nome: 'Wil', idade: 2},
];

const nomesss = []
const pessoasComNomeGrande = pessoas.filter(function(valor, indice) {
    console.log(valor);
    console.log(indice);
    console.log(valor.nome);
    if (valor.nome.length >= 5) {
        nomesss.push(valor.nome);
        return true
    } 
});
console.log(nomesss)
console.log(pessoasComNomeGrande);

// B - Retorne as pessoas com mais 50 anos
const pessoasVeias = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasVeias);

// C - Retorne as pessoas cujo nome termina com 'a'
const pessoasComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComA);