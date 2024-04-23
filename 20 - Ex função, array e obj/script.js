// Declarar variáveis no escopo global não é uma boa prática porque pode conflitar com alguma biblioteca externa e bugar o código todo, então eu posso criar uma função chamada por ex, function meuEscopoGlobal() e colocar as outras funções dentro dela. 
let colegas = []
cont = 0
let resultado = window.document.getElementById('res')

function enviar() {
    let nome = String((document.getElementById('nome')).value)   // Tem que colocar o string ou number antes e o value depois para traduzir um elemento HTML em valor JS.
    nome = nome[0].toUpperCase() + nome.substring(1, nome.length).toLocaleLowerCase();
    let peso = Number((document.getElementById('peso')).value)
    let altura = Number((document.getElementById('altura')).value)
    resultado.innerHTML = `${nome} pesa ${peso}kg e mede ${altura}m.`
    let pessoa = {
        nome: nome,
        peso: peso,
        altura: altura
    }
    colegas.push(pessoa)
    cont++
    document.getElementById('nome').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}

// como eu usei o resultado = window.document.getElementById('res') em diversas funções, eu deixei ele fora das funções para que a variável possa ser usada em todas.
// muitas vezes deu erro, pq eu tava fazendo referencia ao OBJETO, quando eu queria os dados do objeto! Faz diferença e da erro. Por isso eu tenho que especificar os dados do objeto que quero. Ex de errado: resultado.innerHTML = colegas. Ex de certo colgas[0].nome

function analisar() {
    resultado.innerHTML = ''
    for (let c=0; c<=cont; c++){
        let imc = (colegas[c].peso/(colegas[c].altura*colegas[c].altura)).toFixed(2)
        if (imc < 18.5){
            resultado.innerHTML += `${colegas[c].nome} pesa ${colegas[c].peso}, mede ${colegas[c].altura}, o seu IMC é ${imc} e está <strong>magro</strong>.<br>`
        } else if (imc >= 18.5 && imc < 24.9){
            resultado.innerHTML += `${colegas[c].nome} pesa ${colegas[c].peso}, mede ${colegas[c].altura}, o seu IMC é ${imc} e está <strong>normal</strong>.<br>`
        } else if (imc >= 24.9 && imc < 29.9){
            resultado.innerHTML += `${colegas[c].nome} pesa ${colegas[c].peso}, mede ${colegas[c].altura}, o seu IMC é ${imc} e está <strong>sobrepeso</strong>.<br>`
        } else if (imc >= 29.9 && imc < 40){
            resultado.innerHTML += `${colegas[c].nome} pesa ${colegas[c].peso}, mede ${colegas[c].altura}, o seu IMC é ${imc} e está <strong>obeso</strong>.<br>`
        } else {
            resultado.innerHTML += `${colegas[c].nome} pesa ${colegas[c].peso}, mede ${colegas[c].altura}, o seu IMC é ${imc} e está com <strong>obesidade grave</strong>.<br>` 
        }
    }
}

function reiniciar(){
    colegas = []
    resultado.innerHTML = ''
}


