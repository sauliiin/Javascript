function carregar() {
    const intro = document.querySelector('.container h1') // ATENÇãOOOO! Com este comando consigo manipular um aspecto do DOM, texto do HTML. Selecionei o h1 de container do arquivo html
    let res = document.getElementById('msg')
    let imagem = document.getElementById('img')
    let data = new Date()
    let ano = data.getFullYear()
    let mes = (data.getMonth()) // Mes em JS quando não é string começa a contar do 0, dai soma mais 1
    let diaMes = data.getDate() // dia do mês
    let hora = data.getHours()
    let min = data.getMinutes()
    let diaSem = data.getDay() // dia da semana - 0 é domingo e 6 é sábado.
    switch (diaSem) {
        case 0:
            diaSem = 'domingo'
            break
        case 1:
            diaSem = 'segunda-feira'
            break
        case 2:
            diaSem = 'terça-feira'
            break
        case 3:
            diaSem = 'quarta-feira'
            break
        case 4:
            diaSem = 'quinta-feira'
            break
        case 5:
            diaSem = 'sexta-feira'
            break
        case 6:
            diaSem = 'sábado'
            break
    }
    switch (mes) {
        case 0:
            mes = 'Janeiro'
            break
        case 1:
            mes = 'Fevereiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3:
            mes = 'Abril'
            break
        case 4:
            mes = 'Maio'
            break
        case 5:
            mes = 'Junho'
            break
        case 6:
            mes = 'Julho'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Setembro'
            break
        case 9:
            mes = 'Outubro'
            break
        case 10:
            mes = 'Novembro'
            break
        case 11:
            mes = 'Dezembro'
            break
    }


    res.innerHTML = `São ${hora}:${min}hs de ${diaSem}, dia ${diaMes} de ${mes} de ${ano}.`
    if (hora >= 0 && hora < 12) {
        intro.innerHTML = 'Olá! Tenha um bom dia!'
        imagem.src = './assets/img/manha.png'
        document.body.style.background = 'rgb(54, 207, 210)'
    } else if (hora >= 12 && hora < 18) {
        intro.innerHTML = 'Olá! Tenha um boa tarde!'
        imagem.src = './assets/img/tarde.png'
        document.body.style.background = '#2b4762'
    } else {
        intro.innerHTML = 'Olá! Tenha um boa noite!'
        imagem.src = './assets/img/noite.png'
        document.body.style.background = '#03182c'
    }
    
}


/* Olha a simplificação do professor!!!
function diaSem(diaSem) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return diasSemana[diaSem]
}
function nomeMes(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[mes]
}
*/
