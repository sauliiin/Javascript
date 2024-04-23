// em JS se usa muito i de index no lugar de cont


for (let cont = 1; cont <= 5; cont ++) {
    console.log(`Linha ${cont}.`);
}
for (let i = 0; i <= 100; i += 10) {
    console.log(`Contando de 10 em 10: ${i}.`);
}
for (let i = 10; i >= 0; i -= 1) {
    console.log(`Contagem regressiva: ${i}.`);
}
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par);
}
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}
console.log('');
//----------------------//
const frutas = ['maça', 'pera', 'banana', 'abacate', 'laranja'];
for (let i = 0; i < frutas.length; i++){
    console.log(`${i+1} - ${frutas[i]}`)
}
// IMPORTANTE - A mesma coisa acima, só que de forma BEMMMMMM mais resumida! Este tipo de for (for in - lê indices do array ou chaves do objeto) é muito interessante com objetos
for (let i in frutas) {
    console.log(`${i + 1} - ${frutas[i]}`)
}
// Eita!!! Pq deu errado? pq o primeiro for está contando, e o segundo lendo os índices do array, por isso o + concatenou ao invés de somar.
for (let i in frutas) {
    console.log(`${Number(i) + 1} - ${frutas[i]}`)
}
//Spoiler próxima aula:
for (let i of frutas) {
    console.log(i)
}

console.log('')
const pessoa = {
    nome: 'Saulo',
    idade: 37,
    peso: 81,
}
// Veja abaixo que o i não é um número! É ÍNDICE E RETORNA O ÍNDICE.
for (let i in pessoa) {
    console.log(i)
}
// Hummmm... E agora! Para acessar o nome, tem duas formas pessoa.nome ouuuuu, pessoa['nome']. O pessoa[] é muito útil quando vc não sabe o nome do atributo que quer, vide abaixo.
for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`)
}