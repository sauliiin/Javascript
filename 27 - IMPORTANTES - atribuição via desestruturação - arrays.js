let a = 'A';
let b = 'B';
let c = 'C';

[a, b, c] = [1, 2, 3];
console.log(a, b, c);
console.log('')
//Isto abaixo do lado esquerdo é atribuição por desestruturação

const numeros = [1, 2, 3];
[a, b, c] = numeros;
console.log(numeros);
console.log('');

const lista = [7, 2, 9, 4, 11];
let primeiroitem = lista[0];
console.log(primeiroitem);
[primeiroitem, segundoitem, terceiroitem, quartoitem, quintoitem] = lista;
console.log(primeiroitem, segundoitem, terceiroitem, quartoitem, quintoitem);
console.log('');

const listona = ['Saulo', 36, 82, 1.79, 10, 'Olaf', 12, 65, 1.63, 7]
let [nomeS, idadeS, pesoS, alturaS, notaS, ...resto] = listona
console.log(resto)
//obervação, eu poderia ao invés de resto, chamar de Olaf, faltante, o importante são os 3 pontos ... O nome do operador é rest operator. Tem também o spread operator:
let [nomeS2, idadeS2, , , , nomeO, idadeO, , , , ] = listona;
console.log(nomeS2, idadeS2, nomeO, idadeO);
console.log('');

const numeroses = [[1, 2, 3], [4, 5, 6], ['a', 'b', 'c']];
let n3 = numeroses[0][2];
console.log(n3);
let [lista1, lista2, lista3] = numeroses;
console.log(lista1)
console.log(lista1[2])