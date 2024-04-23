const nome = 'WORLD';
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}
console.log('')

for (let i in nome) {
    console.log(nome[i])
}
console.log('')

/* como a string possui indices, posso fazer referencia direta ao valor utilizando o of ao invés de in. Dai no console.log utilizo apenas o valor. Isso funciona tanto para string e arrays.
for in - retorna o índice ou chave
for of - retorna o valor em si
*/
for (let valor of nome) {
    console.log(valor)
}
console.log('')

const people = ['Gustaf', 'Olaf', 'Ricky']
for (let valor of people) {
    console.log(valor)
}
console.log('')