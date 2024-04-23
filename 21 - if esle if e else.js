let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()

function saudacao() {
    if (hora >= 6 && hora < 12) {
    console.log(`Bom dia, agora são ${hora} horas e ${min} minutos!`)
    } else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde, agora são ${hora} horas e ${min} minutos!`)
    } else {
    console.log (`Boa noite, agora são ${hora} horas e ${min} minutos!`)
    }
}
saudacao()

if (10 > 1) console.log('10 é maior que 1.')
    