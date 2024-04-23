// É quase que ter um código que pode ser pausado. O q pode ser bom para a performance, dependendo da situação. Ela é representada pelo funtion*

function* geradora1() {
    // código qualquer
    yield 'Olha lá!';
    // código qualquer
    yield 'Aeeeeee!';
    // código qualquer
    yield 'Adeus! Fim!';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
console.log(g1);

console.log('');

const g2 = geradora1();
for (let valor of g2) {
    console.log(valor)
}

console.log('');
////////////////////////////////////////////////////////////////////////////////////////////////////

function* teste1(){
    yield 1;
    yield 2;
    yield 3;
}
function* teste2() {
    yield* teste1();
    yield 4;
    yield 5;
    yield 6;
}
const testando = teste2();
for (let valor of testando){
    console.log(valor);
}

console.log('');
////////////////////////////////////////////////////////////////////////////////////////////////////