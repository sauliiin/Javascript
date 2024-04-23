// ATENÇÃO!!! AS MESMAS COISAS QUE A GENTE TEM EM CSS TEM NO JS MAS EM CAMELCASE E SEM OS TRAÇOS. EX: background-color EM JS É: backgroundColor


// OBSERVAÇÃO IMPORTANTE!!! Se eu dar o play no node por aqui, vai dar "ReferenceError: document is not defined". Isso pq eu estou manipulando documentos do DOM! Não estou importando nada nem convertendo em dados tratáveis pelo JS. Mas isso funfa e é útil! Basta abrir o console no browser.

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // Obs, queri selector escolhe apenas o primeiro elemento, por isso eu usei query selectorAll
// o ps é visto pelo DOM como uma espécie de array. Não é array (É um NodeList)! Tanto que alguns for não irão funcionar e não consigo converter em string: String(paragrafos.querySelectorAll('p').value);
console.log(ps)
console.log('')

// este abaixo não funfa
for (let index = 0; index < ps.length; index ++) {
    console.log(`${ps[index]}.`);
}
console.log('')

for (let p of ps) {
    console.log(p);
}
console.log('')

//for in - retorna o índice ou chave
//for of - retorna o valor em si
for (let p in ps) {
    console.log(p);
}
console.log('')

for (let p in ps) {
    console.log(ps[p]);
}
console.log('')

document.getElementById("amarelo").addEventListener ("click", amarelar, false);
document.getElementById("azul").addEventListener ("click", azular, true);
document.getElementById("rosa").addEventListener ("click", rosear, false);
document.getElementById("verde").addEventListener ("click", verdear, false);
function amarelar(){
    let color = document.body.style.background = 'rgb(246, 255, 0)';
    for (let p of ps) {
        p.style.backgroundColor = color;
        p.style.color = 'rgb(0, 221, 255)';    
    }
}
function azular(){
    let color = document.body.style.background = 'rgb(0, 221, 255)';
    for (let p of ps) {
        p.style.backgroundColor = color;
        p.style.color = 'rgb(255, 0, 247)';
    }
}
function rosear(){
    let color = document.body.style.background = 'rgb(255, 0, 247)';
    for (let p of ps) {
        p.style.backgroundColor = color;
        p.style.color = 'rgb(77, 231, 0)';  
    }    
}
function verdear(){
    let color = document.body.style.background = 'rgb(77, 231, 0)'; 
    for (let p of ps) {
        p.style.backgroundColor = color; 
        p.style.color = 'rgb(246, 255, 0)'; 
    }   
}



