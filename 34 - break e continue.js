// break e continue funciona em todos os laços, for, while, do while, etc.

const numeros = [2, 4, 5, 11, 76, 12];

for (let num of numeros) {
    if (num === 5) {
        console.log(`Pulei o número 5`)
        continue;          // Neste exemplo, não quero mostrar o número 5, o continue faz o laço voltar para o início e não rodar até o final. Posso ter vários continues no laço e em posições diferentes, para atender as minhas necessidades. 
    }
    console.log(num);
}
console.log('')

const palavra = 'Hello World'
for (let letra of palavra) {
    console.log(letra);
    if (letra === ' ') {
        break
    }
}

for (let num of numeros) {
    if (num === 5) {
        return console.log(`Pulei o número 5`)
        // Veja que o comportamento do return é diferente. Ao alcançar a condição, ele retorna o valor e encerra a função.
    }
    console.log(num);
}

