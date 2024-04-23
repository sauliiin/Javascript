let num1 = 1500
let num2 = 2.5
let num3 = 543.923965326

// para converter número para string:

console.log(num1.toString() + num2.toString())

// representação binária de um número é so colocar toString(2)
console.log(num1.toString(2))

console.log(num3.toFixed(3))

// num1 é inteiro? NaN (Not a Number)
console.log(Number.isInteger(num1))

n1 = 0.7
n2 = 0.1
// Eu quero chegar a 1
console.log(n1 += n2)
console.log(n1 += n2)
console.log(n1 += n2)
// O comando abaixo faz a soma mais precisa. As vezes é necessário pq o pc faz as contas em binário e acontece essas loucuras
console.log(parseFloat(n1.toFixed(2)))

// x++ é o mesmo que x=x+1
// n1 += n2 é o mesmo que: n1 = n1 + n2

