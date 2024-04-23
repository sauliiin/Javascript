/* 070.730.066-50

Fórmula do primeiro dígito verificador (primeiro dígito depois do '-'):
1 - Você pega os dígitos antes do -
2 - Multiplicada cada umm em contagem regressiva de 10 a 2:
0x10=0, 7x9=63, 0x8=0, 7x7=49, 3x6=18, 0x5=0, 0x4=0, 6x3=18, 6x2=12. 

Soma os valores:
I  -  0+63+0+49+18+0+0+18+12=160
II - (160 * 10)%11 = 5    Obs: Quero saber é o resto da divisão entre 1600 por 11. 

Observação Importante: Se o resto da divisão for igual a 10, nós o consideramos como 0.

Fórmula do segundo dígito verificador:
1 - Você pega os dígitos antes do primeiro dígito (5)
2 - Multiplicada cada umm em contagem regressiva de 11 a 2, porque agora inclui o 5:
0x11=0, 7x10=70, 0x9=0, 7x8=56, 3x7=21, 0x6=0, 0x5=0, 6x4=24, 6x3=18, 5x2=10. 
A soma deu 199
(199 * 10)%11 = 10.

*/

let cpf = '070.730/066-50';  // CPF String
let cpfLimpo = cpf.replace(/\D+/g, ''); // Isto /\D+/g representa tudo que não é um número. Assim, tudo que não for número é substituído por ''
console.log(cpfLimpo);
console.log(Array.from(cpfLimpo));   // Olha que FODAAAAAAAA! Array.from(cpfLimpo) cria um array. Eu converti para Array para utilizar reduce e map. #ficaaDica

const a = (((0*10 + 7*9 + 0*8 + 7*7 + 3*6 + 0*5 + 0*4 + 6*3 + 6*2)*10)%11);
const b = (((0*11 + 7*10 + 0*9 + 7*8 + 3*7 + 0*6 + 0*5 + 6*4 + 6*3 + 5*2)*10)%11);

// Se tem apenas um if e else, posso usar operador ternário:
//                              Condição     ?  Verdadeiro   :   Falso
//const nivelUsuario = pontosUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

/*
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
*/

function verfif (n) {
    if (n >= 10) {
        return 0
    } return n
}

console.log(`Os últimos dígitos verificadores do seu CPF são ${verfif (a)} e ${verfif (b)}.`)
