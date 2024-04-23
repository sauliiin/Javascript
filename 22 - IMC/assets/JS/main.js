// Declarar variáveis no escopo global não é uma boa prática porque pode conflitar com alguma biblioteca externa e bugar o código todo, então eu posso criar uma função chamada tipo, meuEscopoGlobal() e colocar as outras funções dentro dela. 
// como eu usei o resultado = window.document.getElementById('res') em diversas funções, eu deixei ele fora das funções para que a variável posa ser usada em todas.
// muitas vezes deu erro, pq eu tava fazendo referencia ao OBJETO, quando eu queria os dados do objeto! Faz diferençá e da erro. Por isso eu tenho que especificar os dados do objeto que quero. Ex de errado: resultado.innerHTML = colegas. Ex de certo colgas[0].nome
function analisar() {
    let resultado = window.document.getElementById('res')
    let peso = Number((document.getElementById('peso')).value)
    let altura = Number((document.getElementById('altura')).value)
    let imc = (peso/(altura*altura))
    resultado.style.backgroundColor = 'rgb(102, 168, 199)'
    if (peso === 0 && altura !== 0) {
        resultado.innerHTML = `O campo peso não foi preenchido no formulário!`
    } else if (altura === 0 && peso !== 0) {
        resultado.innerHTML = `O campo altura não foi preenchido no formulário!`
    } else if (altura === 0 && peso === 0) {
        resultado.innerHTML = `Os campos altura e peso não foram preenchidos!`
    } else if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e está <strong>magro</strong>.`
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e está <strong>normal</strong>.`
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e está e está com <strong>sobrepeso</strong>.`
        resultado.style.backgroundColor = '#ff0000'
    } else if (imc >= 29.9 && imc < 40) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e está e está <strong>obeso</strong>.`
        resultado.style.backgroundColor = '#ff0000'
    } else {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e está e está com <strong>obesidade grave</strong>.`
        resultado.style.backgroundColor = '#ff0000'
    } 
}