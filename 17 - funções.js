function saudacao(nome){
    console.log(`Prazer em te conhecer, ${nome}.`)
}
console.log('')

function saudacao2(nome){
    return `Prazer em te conhecer, ${nome}.`;
}
console.log('')


saudacao('Saulo')
console.log(saudacao2('Olaf'))
let oie = saudacao('Gustaf')
console.log('')   

// Whatttttttttt? Se vc quer que a função retorne um valor dentro de uma variável, acrescente return no final. Após o return, encerrou a função. Então não dá pra colocar nada abaixo.
function saudacao2(nome){
    return `Prazer em te conhecer, ${nome}.`
}
let oiee = saudacao2('Gustaf')
console.log(oiee)
console.log('')

function soma(x, y) {
    const resultado = x + y
    return resultado
}
console.log(soma(2, 7))
console.log(soma())
console.log('')

// Para evitar erros ou caso o usuário esqueça de preencher algum valor, posso fazer isto:
function somaaa(x=0, y=0) {
    return x + y
}
console.log(somaaa())
console.log(somaaa(1, 5))
console.log('')

// eu posso jogar uma função dentro de uma variável, é chamado de função anonima 
const raiz = function(n){
    return n ** 0.5
};
console.log(raiz(4))

// POR FIM, MAS NÃO MENOS IMPORTANTE! vc pode criar uma função substituindo o function pelo =>
const raizzz = (n) => {
    return n ** 0.5
};
console.log(raizzz(4))
// o trecho acima ainda pode ser simplificado para 
const raizzzz = n => n ** 0.5;