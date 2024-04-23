const cpf = [0, 7, 0, 7, 3, 0, 0, 6, 6, 5, 0];
const a = (((0*10 + 7*9 + 0*8 + 7*7 + 3*6 + 0*5 + 0*4 + 6*3 + 6*2)*10)%11);
const b = (((0*11 + 7*10 + 0*9 + 7*8 + 3*7 + 0*6 + 0*5 + 6*4 + 6*3 + 5*2)*10)%11);
console.log(a, b)

let cont = 0
let acumulador = 10
for (let i = 10; i >=2; i--) { 
    cpfv = cpf[cont]*i 
    cont += 1
    acumulador = acumulador + cpfv
    console.log(acumulador)
}
resultado = acumulador*10%11
console.log(resultado)

let cont1 = 0
let acumulador1 = 0
for (let i = 11; i >=2; i--) { 
    cpfv = cpf[cont1]*i 
    cont1 += 1
    acumulador1 = acumulador1 + cpfv 
}
resultado1 = acumulador1*10%11
console.log(resultado1)

//const nivelUsuario = pontosUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const somaNumerosE = numeros.reduce(function(acumulador, valor, indice){
    cpV = valor*aculmulador;
       

}, 11);
