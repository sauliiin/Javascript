// ARROW FUNCTION - é um recurso mais novo, que serve para declarar função de forma mais curta.
/* 
Uma função convencional pode ser criada com este código:
function() {}

Já a sintaxe básica de uma arrow function é a seguinte:
() => {} 
*/
console.log('1 - //------------------------------------------//')

function hello (name) {
    console.log(`Seja bem-vindo ${name}!!!`);
}
const hellooooo = name => console.log(`Seja bem-vindo ${name}!!!`);
hello('Mark')
hellooooo('Steve')

function somar (x, y){
    console.log(x + y)
}
const res = (x,y) => console.log(x + y)  // É mandatório colocar os parâmetros entre parêntese apenas se forem mais de 1 argumento. Assim como a {}, que nem sempre é necessária.
const res2 = (x, y) => {
    let res2 = x + y
    console.log(res2)
}
somar(2, 2)
res(2, 3)
res2(3, 5)

console.log('2 - //------------------------------------------//')

// Função dentro do objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
}
obj.falar();


console.log('3 - //------------------------------------------//')

// PARÂMETROS DA FUNÇÃO
function funcao(){
    console.log(arguments);
}
funcao(1, 4, 5, 7, 8 ,11);
//parece estranho chamar a função assim, pq na function não foi declarado nenhum parâmetro, mas o JS não da erro e salva esses valores em arguments
//Isso é bom pq eu posso trabalhar com os argumentos sem saber quantos valores ou dados serão atribuídos! Exs: 
function soma(x, y) {
    let total = x + y;
    return total ;   
}
console.log(soma(2, 5));
// E se eu não sei quantos valores eu quero somar?
function somaMais(){
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
somaMais(1, 4, 5, 2, 7, 0, 11);
// Obs: O resultado "total" deve ser mostrado (console.log) dentro da function somaMais, pq fora os dados serão vistos como objetos e o resultado será undefined.
function somaPouco(a=0, b=3, c=0, d=0, e=0) {
    console.log(a + b + c + d + e);
}
somaPouco(3, 1)
somaPouco(2, undefined, 3) // Se eu não tenho um parâmetro, mas quero assumir o valor padrão definido na função (no caso b=3, mas poderia ser b=72) tenho que colocar undefined.

console.log('4 - //------------------------------------------//')

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
function alunos({nome, idade, nota}){
    console.log(nome, idade, nota);
}
alunos({nome: 'Saulo', idade: 23, nota: 10});

//Eu posso tirar o array e utilizar o rest operator assim: function soma(operador, ...numeros). O rest operator tem que ser sempre o último parâmetro.
function conta(acumulador, numeros){
    for (let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador)
}
conta(0, [1, 3, 4, 5, 6, 7])

function contaMais(acumulador, ...numeros){
    for (let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador);
}
contaMais(0, 1, 3, 4, 5, 6, 7, 12, 15, 31);

console.log('5 - //------------------------------------------//')

// RETURN - retorna um valor e termina a função
function soma (a, b){
    return 'O resultado da some é ' + (a + b);
}
console.log(soma(2, 5))
// return tb pode retornar um objeto:
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}
const p1 = criaPessoa('Saulo', 'Rossi');
console.log(p1)

function criaMultiplicador(multiplicador) {
    return function multiplicação (n){     // Eu posso usar uma função anônima aqui: return function(n) 
        return multiplicador * n;
    }    
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const tenplica = criaMultiplicador(10);
console.log(duplica(5));
console.log(triplica(5));
console.log(tenplica(5));

console.log('6 - //------------------------------------------//')

// FUNÇÕES DE CALLBACK
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function f1() {
    setTimeout(function() {
        console.log('função 1');
    }, rand());
}
function f2() {
    setTimeout(function() {
        console.log('função 2');
    }, rand());
}
f1();
f2();
setTimeout(function() {
    console.log('Olá mundo!');
}, rand());

// Como eu faço para essas funções serem executadas na ordem que eu quero? O callback serve para isso!
// Em JavaScript, funções são objetos. Podemos passar objetos para funções como parâmetros. Então, nós podemos também passar funções como parâmetros para outras funções e chamá-las dentro das funções. Callback é uma função passada como argumento para outra função.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function fA(callback) {
    setTimeout(function() {
        console.log('1ª função.');
        if (callback) callback();
    }, rand());
}
function fB(callback) {
    setTimeout(function() {
        console.log('2ª função.');
        if (callback) callback();
    }, rand());
}
fA(function () {
    fB(function() {
        console.log('Olá mundo!');
    });
});

// Eu acho que o prof complicou, mas mais um exemplo, agora com arrow function. Obs Abaixo a função Ola é callback da função inserirNome
const inserirNome = (callback) => {
    nomea = 'Olaf';
    callback(nomea);
}
const Ola = (nomea) => {
    console.log('Olá, ' + nomea +'!');
}
inserirNome(Ola)
// Perceba que pela função inserirNome (que não tem console.log) eu chamei a função Ola. Isso, em razão do call it back

console.log('7 - //------------------------------------------//')

// Factory functions - funções que retornam objetos + bonus: this

/* AULA COMPLEXA E PESADA - 75 - Quando uma função está dentro de um objeto, ela e chamada de método. 
This refere sempre a quem chama o objeto, não necessariamente uma função ou objeto, pode ser um window, por ex. This é complexo.
*/

function criaPessoax(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // o método abaixo chama setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') // O (' ') separa os espaços que tem no array, no caso, o nome completo.
            this.nome = valor.shift(); // Retira o primeiro valor do array
            this.sobrenome = valor.join(' ') // Junta tundo em uma string e coloca espaço 
        },
        fala: function (assunto = 'falando sobre nada') {
            return `${this.nome} está falando sobre ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        // usa o get pra teste e apaga pra rodar. O get faz o imc fingir ser um atributo, assim, na função abaixo, você pode usar: console.log(`O IMC de ${px.nome} é ${px.imc}.`). Perceba que o IMC não foi chamado como função. Isso se chama getter
        get imc() {
            const imc = this.peso/(this.altura**2); // (peso / (altura * altura)) É o peso e altura da pessoa chamada, no ex abaixo, eu chamei px 
            return imc.toFixed(2)
        }
    }
}

const px = criaPessoax('Saulo', 'Yoda', 1.79, 79);
const py = criaPessoax('Luiz', 'Nheco', 1.72, 102);
console.log(px.fala('JavaScript'));
console.log(py.fala('bobagem'));
console.log(`O IMC de ${px.nomeCompleto} é ${px.imc}.`)
py.nomeCompleto = 'Maria Oliveira Silva de Andrade'   // observação: eu só consigo fazer isso por conta do getter, que faz o nome completo fingir ser atributo.
console.log(py.nome)
console.log(py.sobrenome)
console.log(py.nomeCompleto)




