// Escreva uma função que recebe 2 números e retorne o maior deles
function max(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(12, 76))


function maxResumida(x, y) {
    if(x > y) return x;
    return y;
}
console.log(maxResumida(12, 76))

function maxUltraResumida (x, y) {
    return x > y ? x : y;
} 
console.log(maxUltraResumida(12, 76))


function ePaisagem (largura, altura) {
    return largura > altura ? 'Modo paisagem' : 'Modo Retrato';
}
console.log(ePaisagem(1920, 1080));



