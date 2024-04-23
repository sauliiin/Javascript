//Sempre que eu utilizo a palavra new estou usando uma função construtora, que começa sempre com a primeira letra maiúscula
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let data = new Date()
console.log(data.toString())
console.log(data.getFullYear())
console.log(data.getMonth() + 1) // Mes em JS quando não é string começa a contar do 0
console.log(data.getDate()) // dia do mês
console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getDay()) // dia da semana - 0 é domingo e 6 é sábado.

// const data = new Date(ano, mes, dia, hora, minuto, segundo, mili-segundo)
let data1 = new Date('2023-08-30 20:20')
console.log(data.toString())