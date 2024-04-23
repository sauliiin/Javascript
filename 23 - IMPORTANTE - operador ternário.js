/* Operador ternário é representeado por ? :
Esse operador pode reduzir muito o código quando usamos if else*/
const pontosUsuario = 999
if (pontosUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}
console.log('')

// Vamos usar operadores ternários. OLHA COMO A EXPRESSÃO ACIMA PODE SER RESUMIDA! Usa o ? para expressão verdadeira e : para a falsa
const nivelUsuario = pontosUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario)
console.log('')
// outra forma de reduzir o código. Se o usuário não escolhe uma cor, o sistema deixa a cor padrão preta. 

const corUsuário = null
const corPadrao = corUsuário || 'Preta'
console.log(corPadrao)