console.log('1 - //------------------------------------//') 

// <!--Comentário em HTML-->

// Sempre que eu utilizo a palavra new estou usando uma função construtora, que começa sempre com a primeira letra maiúscula
let data = new Date()
let ano = data.getFullYear()
const anoNascimento = 1984
console.log(ano)
let idade = ano - anoNascimento 

let nomeAluno // funfa e recebe mesmo sem colocar o igual, mas recebe o valor undefined. Pra const não funfa isso.

//-----------------------------------------------------------------------//

//Se o operador + for usado após o operando (por exemplo, x++), o operador de incremento incrementa e retorna o valor antes de incrementar.
//Se for usado prefixo, com operador antes do operando (por exemplo, ++x), o operador de incremento incrementa e retorna o valor após o incremento.

let cont = 1
console.log(cont++)
console.log(cont++)

console.log("")

let cont1 = 1
console.log(++cont1)
console.log(++cont1)

// let numberText = document.getElementById('txtn')  - recebe o objeto
// let numberNumber = Number(numberText.value)       - trata o objeto transformando-o em número

console.log(' ')
console.log('2 - //------------------------------------//') 

let texto = 'Eu estava andando de bicicleta'
console.log(texto.slice(1, 5))
console.log(texto.replace('Eu', 'Olaf'))

let texto3 = 'O rato roeu a roupa do rei de roma.'
console.log(texto3.replace('r', 'R')) // substituiu o primeiro r
console.log(texto3.replace(/r/g, 'R'))// substitui todos r por R

console.log(' ')
console.log('3 - //------------------------------------//') 

let num = 543.923965326
console.log(num.toFixed(3))

// x++ é o mesmo que x=x+1
// n1 += n2 é o mesmo que: n1 = n1 + n2

console.log(' ')
console.log('4 - //------------------------------------//') 

// Arrays são uma lista, coleção de coisas!
let Saulo = ['Saulo Hugo Rossi', 38, 84]

function soma(x=0, y=0) {
    const resultado = x + y
    return resultado
}

// Spoiler arrow function
const res = (x=0, y=0) => (x + y) 
console.log(res(10, 9))

// vamos criar um objeto:
const pessoa1 = {
    nome: 'Saulo',
    idade: 38,
    peso: 82
}
console.log(pessoa1)
console.log(pessoa1.nome)

function criaPessoas (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoas2 = criaPessoas ('Gustaf', 'Oliveira', 33)
console.log(pessoas2)

console.log(' ')
console.log('5 - //------------------------------------//') 

/* OPERADORES LÓGICOS
&& and (e)    Todas as expressões precisam ser verdadeira para retornar true
|| or (ou)    Um ou outra expressão tem que ser verdadeira para retornar true
! not (não)   Nenhuma expressão pode ser verdadeira para retornar true
*/

let hora = 10
if (hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log ('Boa noite!')
}

console.log(' ')
console.log('6 - //------------------------------------//') 

/* Operador ternário é representeado por ? :
ATENÇÃO! Passe a utilizar ternário quanto tiver apenas um if e else
Esse operador pode reduzir muito o código quando usamos if else*/

const pontosUsuario = 999
if (pontosUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}

//                           Condição      ?  Verdadeiro   :   Falso
const nivelUsuario = pontosUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

//                      Se pontos  >= 1000 ?     é VIP     :   normal     
console.log(nivelUsuario)


//-----------------------------------------------------------------------//

// Extraímos do HTML objetos. Para utilizá-los no JS temos que convertê-los em values string ou number
let colegas = []
// let resultado = window.document.getElementById('res')

function enviar() {
    let nome = String((document.getElementById('nome')).value)
    nome = nome[0].toUpperCase() + nome.substring(1, nome.length).toLowerCase()
    let peso = Number((document.getElementById('peso')).value)
    let altura = Number((document.getElementById('altura')).value)
    resultado.innerHTML = `${nome} pesa ${peso}kg e mede ${altura}m.`
    let pessoa = {
        nome: nome,
        peso: peso,
        altura: altura
    }
    colegas.push(pessoa)
    cont++
}

//-----------------------------------------------------------------------//
/*
    div#esquerda, div#direita {
        display: inline-block;  ESTE É O SEGREDO PARA DIVIDIR A DIV NO MEIO! DEPOIS EU PEGO UMA DELAS E COLOCO QUE A LARGURA EM 50%
    }
    div#esquerda {
        width: 50%;   
*/
//-----------------------------------------------------------------------//

switch(IMC) {
    case 0:
        console.log('Gordo')
        break
    case 1:
        console.log('Magro')
        break
    case 2:
        console.log('Normal')
        break
}

// Ou:

function IMC (n) {
    const IMC = ['Gordo', 'Magro', 'Normal']
    return IMC[n]
}

//-----------------------------------------------------------------------//

/* Let não pode ser redeclarado. Por ex: 
let nome = Gustaf
let nome = Olaf
Isso acima ta errado, mas eu posso:
nome = Olaf

agora, isto pode 
var nome1 = Olaf
var nome1 = Gustaf
*/

console.log(' ')
console.log('7 - //------------------------------------//') 

function nomeMes(y) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[(y-1)]
}
console.log(nomeMes(7));

// const intro = document.querySelector('.container h1') // ATENÇãOOOO! Com este comando consigo manipular um aspecto do DOM, texto do HTML. Selecionei o h1 de container do arquivo html

/* ATENÇÃO!!! AS MESMAS COISAS QUE A GENTE TEM EM JS TEM NO CSS, MAS EM CAMELCASE E SEM OS TRAÇOS. 
EX: background-color EM JS É: backgroundColor
document.getElementById("div1").style.backgroundColor = "rgb(0, 0, 0)";
*/

console.log(' ')
console.log('8 - //------------------------------------//') 

//Isto abaixo do lado esquerdo é atribuição por desestruturação. Desestruturação pq eu estou extraindo de umm objeto um item

//[a, b, c] = [1, 2, 3];
const numeros = [1, 2, 3];
[a, b, c] = numeros;

const pessoa = {
    nome: 'Olaf',
    idade: 12,
    endereco: {
        rua: 'Araguari',
        numero: 20
    }
  };
  // atribuição via desestruturação. Desestruturação pq eu estou extraindo de um objeto um item
  const {nome} = pessoa;
  console.log(nome);
  const {endereco} = pessoa;
  console.log(endereco)
  const {rua} = endereco;
  console.log(rua);
 
console.log(' ')
console.log('9 - //------------------------------------//') 

for (let index = 0; index <= 100; index += 10) {
    console.log(`Contando de 10 em 10: ${index}.`);
}

console.log(' ')
const frutas = ['maça', 'pera', 'banana', 'abacate', 'laranja'];
for (let i = 0; i < frutas.length; i++){
    console.log(`${i+1} - ${frutas[i]}`)
}

console.log(' ')
// A mesma coisa acima, só que de forma BEMMMMMM mais resumida! Este tipo de for (for in - lê INDICES (não são numbers) do array ou chaves do objeto) é muito interessante com objetos.
for (let i in frutas) {
    console.log(`${i} - ${frutas[i]}`)
}
// Eita!!! Pq deu errado? pq o primeiro for está contando, e o segundo lendo os índices do array, por isso o + concatenou ao invés de somar.

/* como a string possui indices, posso fazer referencia direta ao valor utilizando o of ao invés de in. Dai no console.log utilizo apenas o valor. Isso funciona tanto para string e arrays.
for in - retorna o índice ou chave
for of - retorna o valor em si
*/
console.log(' ')

for (let i in frutas) {
    console.log(`${Number(i) + 1} - ${frutas[i]}`)
}

console.log(' ')

for (let i of frutas) {
    console.log(i)
}

//-----------------------------------------------------------------------//

// const paragrafos = document.querySelector('.paragrafos');
// const ps = paragrafos.querySelectorAll('p'); // Obs, query selector escolhe apenas o primeiro elemento, por isso eu usei query selectorAll

function acrescentar() {
    let typo = String((document.getElementById('article')).value) // String, pq eu quero pegar um objeto do DOM para utilizar no JS. Dai tenho que especificar o tipo
    let text = String((document.getElementById('txtd')).value)
    let newTag = document.createElement(typo);
    newTag.innerText = text;
    quadro.appendChild(newTag)
}

function addElement() {
    const newDiv = document.createElement("div"); // create a new div element
    const newContent = document.createTextNode("Hi there and greetings!"); // and give it some content
    newDiv.appendChild(newContent); // add the text node to the newly created div
    const currentDiv = document.getElementById("div1"); // add the newly created element and its content into the DOM
    document.body.insertBefore(newDiv, currentDiv);
}

function criaBotaoApagar(li) {   // recebe li para saber onde vai adicionar este botão
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa.')
    li.appendChild(botaoApagar);  
}

// document.getElementById("mudarfundo").addEventListener ("click", corDeFundo, false);

function corDeFundo(){
    document.body.style.background = 'rgb(0, 221, 255)';
}

/* 
const inputTarefa = document.querySelector('.input-tarefa');
inputTarefa.addEventListener('keypress', function(evento) { 
    if (evento.keyCode === 13) {    // Keypress para pressionamento de tecla e keyCode 13 para ENTER. Se pressiona ENTER cria tarefa 
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
}); // Ou seja: se apertar enter no input-tarefa, executa a função.
*/

console.log(' ')
console.log('10 - //------------------------------------//') 

console.log(Math.floor(Math.random() * (20-10) + 10)); // gera um número aleatório entre 10 e 20
console.log(Math.floor(Math.random() * 20)); // gera un número aleatório entre 0 e 20
console.log(' ')

let i = 0;
while (i < 10) {
    console.log (i);
    i++;
}
console.log(' ')

i = 0
do {
    console.log (i);
    i++;
} while ( i < 10)

//-----------------------------------------------------------------------//
console.log(' ')
console.log('10 - //------------------------------------//') 

// break e continue funcionam em todos os laços, for, while, do while, etc. O break encerra e o continue volta pro inicio.

const nums = [2, 4, 5, 11, 76, 12];

for (let num of nums) {
    if (num === 5) {
        console.log(`Pulei o número 5`)
        continue;          // Neste exemplo, não quero mostrar o número 5, o continue faz o laço voltar para o início e não rodar até o final. Posso ter vários continues no laço e em posições diferentes, para atender as minhas necessidades. 
    }
    console.log(num);
}
console.log(' ')

const palavra = 'Hello World'
for (let letra of palavra) {
    console.log(letra);
    if (letra === ' ') {
        break
    }
}

// Escreva uma função que recebe 2 números e retorne o maior deles
function max(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}
function maxUltraResumida (x, y) {
    return x > y ? x : y;
} 


console.log(' ')
console.log('11 - // Tratamento de erros ----------------//') 

try {
    console.log(naodeclarado); // Esta parte é executada quando não há erros
} catch (erro) {
    console.log('qualquer coisa não foi definida'); // Esta parte é executada quando há erros
} finally {
    console.log('Teste finalizado!') // sempre é executada! Mas pode ser omitido se não for necessário.
}

function soma(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== "number") {
        return'x e y precisam ser números.'; // throw serve para lançar um erro
    }
    return x + y
}
console.log(soma('zero', 1))
console.log(soma(2, 3))

console.log(' ')
console.log('12 - //------------------------------------//') 

function mostraHora() {
    let data = new Date();
    console.log(data.toLocaleTimeString('pt-BR', {hour12: false}));
}
function intervalo () {
    setInterval(function(){mostraHora()}, 1000) //função anônima() {função desejada}, 1000 <- de quanto em quanto tempo atualiza 
}

const timer = setInterval(function(){mostraHora()}, 1000) // Se eu deixo a variável fora de uma função no JS ela executa independente de ter sido chamada!
setTimeout(function(){clearInterval(timer)}, 5000)  // a função vai parar depois de 5 segundos

//Se eu quiser colocar tudo em uma função:
function olhaAHora () {
    timer = setInterval(function(){mostraHora()}, 1000); //função anônima() {função desejada}, 1000 <- de quanto em quanto tempo atualiza
    setTimeout(function(){
        clearInterval(timer);
    }, 9000) 
}

//setTimeout
const mensagem = function() {  
    console.log("Essa mensagem é exibida depois de 3 segundos");
} 
setTimeout(mensagem, 3000);

//Isso acima é o mesmo que:
setTimeout(function() {  
    console.log("Essa mensagem é exibida após 6 segundos");
}, 6000);

//-----------------------------------------------------------------------//
