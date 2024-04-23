let i = 0;

while (i < 10) {
    console.log (i);
    i++;
    if (i == 10) {
        console.log('10 - boooom!')
    }
}
console.log('')

function random (min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

let rand = random(1, 20);
let cont = 0
console.log(rand);
console.log('') 

// sorteio, mas excluindo números repetidos.
let randoms = [];
while (rand !== 10) {
    rand = random(1, 20);
    if (randoms.indexOf(rand) === -1) {
        randoms.push(rand)
        cont++
    }
}
console.log(`Foram sorteados os números: ${randoms}.`);
console.log(`Foram necessários ${cont} sorteios para chegar a 10.`)
console.log('')

cont = 0
rand = 10
do {
    rand = random(1, 20)
    console.log(rand)
    cont++
} while (rand !== 10)
console.log(`Foram necessários ${cont} sorteios para chegar a 10`)

// a diferença entre o while e do while é que no do while verifica se a condição foi alcançada apenas no final, assim, inclusive, posso declarar o 10 antes que ela é executada. 