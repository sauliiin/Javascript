/* Let não pode ser redeclarado. Por ex: 
let nome = Gustaf
let nome = Olaf
Isso acima ta errado, mas eu posso:
nome = Olaf

agora, isto pode 
var nome1 = Olaf
var nome1 = Gustaf
*/

// A maior diferença entre var e let é o escopo. Var pode ser redeclarado

let nome = 'Luiz'
var nome2 = 'Luizin'

if (true) {
    let nome = 'Otávio'
    var nome2 = 'Rogério'
    if (true) {
        let nome = 'Qualquer coisa'
        var nome2 = 'Olaf'
    } 
} 
console.log(nome, nome2)