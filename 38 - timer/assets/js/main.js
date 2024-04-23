// ATENÇÃO!!! AS MESMAS COISAS QUE A GENTE TEM EM CSS TEM NO JS MAS EM CAMELCASE E SEM OS TRAÇOS. EX: background-color EM JS É: backgroundColor

const miliseg = document.getElementById('mili');
const seg = document.getElementById('sec');
const min = document.getElementById('min');

let miliNum = 0;
let segNum = 0;
let minNum = 0;
let INTERVALO;

function milissegundos() {
    miliNum++
    miliNum < 10 ? miliseg.innerHTML = '0' + miliNum : miliseg.innerHTML = miliNum;
    if (miliNum == 99) {
        miliNum = 0; 
        segundos();
    }
}
function segundos() {
    segNum++;
    segNum < 10 ? seg.innerHTML = '0' + segNum : seg.innerHTML = segNum;
    if (segNum == 59) {
        segNum = 0;
        minutos();
    }
}
function minutos() {
    minNum++;
    minNum < 10 ? min.innerHTML = '0' + minNum : min.innerHTML = minNum
};

function start() {
    document.body.style.color = 'rgb(0, 0, 0)';
    INTERVALO = setInterval(() => {milissegundos()}, 10);
}
//setInterval(function{o que eu quero que seja executado}, de quanto em quanto tempo). No caso, ao invés de criar uma função anonima, utilizei uma arrow function (aula 42)

function pause() {
    document.body.style.color = 'rgb(255, 0, 247)';
    clearInterval(INTERVALO) // eu declarei o intervalo acima (é uma variável global, então puxou os dados para esta função), somente porque o clearInterval SEMPREEEEE depende de um setInterval(). The clearInterval() method clears a timer set with the setInterval() method.
}

function reset() {
    document.body.style.color = 'rgb(0, 0, 0)';
    clearInterval(INTERVALO);
    miliNum = 0;
    segNum = 0;
    minNum = 0;
    miliseg.innerHTML = '00';
    seg.innerHTML = '00';
    min.innerHTML = '00';
}

