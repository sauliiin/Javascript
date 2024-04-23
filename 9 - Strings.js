let stringui = 'Um "texto"'
let stringui2 = "Um 'texto'"

let texto = 'PARALELEPÍPEDO'
console.log(texto.slice(1, 5))

console.log(texto.concat(' é estranha!'))
console.log(texto + ' é estranha!')
console.log(`${texto} é estranha!`)

let texto2 = 'Eu estava andando de bicicleta'
console.log(texto2);
console.log(texto2.indexOf('bicicleta'))
console.log(texto2.indexOf('BiCccicleta'))
console.log(texto2.search(/w/))
console.log(texto2.search(/i/))
console.log(texto2.replace('Eu', 'Olaf'))
//            0123456789 
let texto3 = 'O rato roeu a roupa do rei de roma.'
console.log(texto3.replace('r', 'R'))
console.log(texto3.replace(/r/g, 'R'))
console.log(texto3.length)
console.log(texto3.slice(2, 6))
console.log(texto3.slice(-5))
console.log(texto3.split(' '))
console.log(texto3.split(' ', 2))

