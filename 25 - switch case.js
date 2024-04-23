/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

// ctrl + / comenta várias linhas de uma vez

const data = new Date()
const diaSemana = data.getDay()
console.log(diaSemana)

switch(diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO') // Default é pra quando nenhuma das opções anteriores retornou resultado. Se ela estiver no final, nao precisa do break
}
console.log('')

function diaSemanaTexto(diaSn){
    switch (diaSn) {
        case 0:
            //diaStxt = 'Domingo'
            return 'Domingo'
        case 1:
            diaStxt = 'Segunda'
            return diaStxt
        case 2:
            diaStxt = 'Terça'
            return diaStxt
        case 3:
            diaStxt = 'Quarta'
            return diaStxt
        case 4:
            diaStxt = 'Quinta'
            return diaStxt
        case 5:
            diaStxt = 'Sexta'
            return diaStxt
        case 6:
            diaStxt = 'Sábado'
            return diaStxt
        default:
            diaStxt = 'ERRO'
            return diaStxt
    }  
}
console.log(diaSemanaTexto(0))
console.log(diaSemanaTexto(88))