let n1 = 9.534
console.log(Math.floor(n1)) // arredonda para baixo
console.log(Math.ceil(n1)) // arredonda para cima
console.log(Math.round(n1)) // arredonda
console.log(Math.max(1, 2, 3, 234, -10)) // qual o maior
console.log(Math.min(1, 2, 3, 234, -10)) // qual o menor
console.log(Math.random()) // gera número aleatório
console.log(Math.random().toFixed(2)) 
console.log(Math.random() * (10-5) + 5) // gera número aleatório entre 10 e 5. Veja que o JS não é tão inteligente quanto o python.
console.log(Math.round(Math.random() * (10-0) + 0)) // um numero aleatório entre 0 e 10
console.log(Math.round(Math.random() * (10-5) + 5)) // pra arredondar, eu faço isso
console.log(Math.pow(2, 10)) // potenciação: 2 elevado a 10
console.log(2 ** 10) // mesma coisa feita acima
console.log(100/0) // Pois é! cuidado, o JS aceita dividir um número por 0 (é impossível na matemática, mas não aqui) e o resultado é infinity