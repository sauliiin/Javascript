/* function somar (x, y){
    console.log(x + y)
}
const res = (x,y) => console.log(x + y) 
 */

const fun1 = () => {setTimeout(function() {console.log('Função 1')}, 3000);}
const fun2 = () => {setTimeout(function() {console.log('Função 2')}, 2000);}
const fun3 = () => {setTimeout(function() {console.log('Função 3')}, 1000);}
fun1();
fun2();
fun3();
// Em JavaScript, funções são objetos. Podemos passar objetos para funções como parâmetros e como funções são objetos, também podemos passá-las como parâmetros para outras funções e chamá-las dentro dessas funções. Callback é uma função passada como argumento para outra função.

function f1(callback) {
    setTimeout(function() {
        console.log('1 - Função 1');
        if (callback) callback();
    }, 3000);
}
function f2(callback) {
    setTimeout(function() {
        console.log('2 - Função 2');
        if (callback) callback();
    }, 2000);
}
function f3(callback) {
    setTimeout(function() {
        console.log('3 - Função 3');
        if (callback) callback();
    }, 1000);
}

// IF sem parâmetro (callback), conforme abaixo, executa normalmente, iguais as fun npo inicio deste script
f1()
f2()
f3()

/* f1(function () {
    f2(function() {
        f3();
    });
}); */

const f1cb = () => {f2(f2cb)};
const f2cb = () => {f3()};
f1(f1cb);
// Isto acime é o mesmo que o comentado /*

let a = (cb) => {setTimeout(function() {console.log('a - Função 1'); cb()}, 7000);}
let b = (cb) => {setTimeout(function() {console.log('b - Função 2'); cb()}, 2000);}
let c = (cb) => {setTimeout(function() {console.log('c - Função 3'); cb()}, 1000);}
const facb = () => {b(fbcb)};
const fbcb = () => {c()};
a(facb);
