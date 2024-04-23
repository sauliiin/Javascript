const numeros = [0, 7, 0, 7, 3, 0, 0, 6, 6, 5, 0];
const cpfv1 = numeros.slice(0, -2).reverse()
const cpfv2 = numeros.slice(0, -1).reverse()


const d1 = cpfv1.reduce(function(acumulador, valor, indice){   
    acumulador += Number(valor)*(indice + 2)
    return acumulador
}, 0);  
console.log(d1*10%11)

const d2 = cpfv2.reduce(function(acumulador, valor, indice){
    acumulador += Number(valor)*(indice + 2)
    return acumulador
}, 0);  
console.log(d2*10%11) 

const a = (((0*10 + 7*9 + 0*8 + 7*7 + 3*6 + 0*5 + 0*4 + 6*3 + 6*2)*10)%11);
const b = (((0*11 + 7*10 + 0*9 + 7*8 + 3*7 + 0*6 + 0*5 + 6*4 + 6*3 + 5*2)*10)%11);
console.log(a, b)



/*const cpf = [0, 7, 0, 7, 3, 0, 0, 6, 6];
for (let i = 10; i >=2; i--) {
    acumulador = acumulador + cpf
    cpf[i]*i 
    return acumulador 
}
console.log(acumulador)*/