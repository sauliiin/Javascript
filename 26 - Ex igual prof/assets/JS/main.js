function diaSemana(x) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return diasSemana[(x)]
}
function nomeMes(y) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[(y)]
}
function faseslua(dia, mes, ano, anostring) {
    let imagem = document.getElementById('img')
    let imagem2 = document.getElementById('img2')
    const intro = document.querySelector('.container h1')
    if (ano >= 2100) {
        imagem.src = './assets/img/luafim.png'
        intro.innerHTML = 'Olá! Sinto muito, infelizmente o mundo acabará no ano 2100!'
        document.body.style.background = '#000000'
        return `morte`
    }
    else if (ano < 2000) {
        carregar()
        const ano1 = Number(anostring.substring(2, 3))
        const ano2 = Number(anostring.substring(3, 4))
        fases = (((ano1+ano2+2)+2)*11+dia+mes)%30
        if (fases >= 0 && fases <= 7) {
            imagem.src = './assets/img/lua-nova.png'
            return `Lua Nova`
        } else if (fases > 7 && fases <= 14) {
            imagem.src = './assets/img/lua-crescente.png'
            return `Lua Crescente`
        } else if (fases > 14 && fases <= 21) {
            imagem.src = './assets/img/lua-cheia.png'
            return `Lua Cheia`
        } else if (fases > 21 && fases <= 28) {
            imagem.src = './assets/img/lua-minguante.png'
            return `Lua Minguante`
        }

    } else {
        const ano2dig = Number(anostring.substring(2, 4))
        fases = ((ano2dig+2)*11+dia+mes)%30
        if (fases >= 0 && fases <= 7) {
            imagem.src = './assets/img/lua-nova.png'
            return `Lua Nova`
        } else if (fases > 7 && fases <= 14) {
            imagem.src = './assets/img/lua-crescente.png'
            return `Lua Crescente`
        } else if (fases > 14 && fases <= 21) {
            imagem.src = './assets/img/lua-cheia.png'
            return `Lua Cheia`
        } else if (fases > 21 && fases <= 28) {
            imagem.src = './assets/img/lua-minguante.png'
            return `Lua Minguante`
        }
    }       
}



function carregar() {
    const intro = document.querySelector('.container h1') // ATENÇãOOOO! Com este comando consigo manipular um aspecto do DOM, texto do HTML. Selecionei o h1 de container do arquivo html
    let res = document.getElementById('msg')
    let imagem = document.getElementById('img')
    let data = new Date()
    let ano = data.getFullYear()
    let anostring = String(ano)
    let mes = data.getMonth()
    let mesnome = nomeMes(data.getMonth()) // Mes em JS quando não é string começa a contar do 0
    let diaMes = data.getDate() // dia do mês
    let hora = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()
    let min = data.getMinutes() < 10 ? '0' + data.getMinutes()  : data.getMinutes() 
    let diaSem = diaSemana(data.getDay()) // dia da semana - 0 é domingo e 6 é sábado.
    res.innerHTML = `Olá, agora são ${hora}:${min}hs, ${diaSem}, dia ${diaMes} de ${mesnome} de ${ano}, com noite de ${faseslua(diaMes, mes, ano, anostring)}.`
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

function verdia(){
    document.getElementById("block").style.background = "rgb(0, 0, 0)";
    let datausr = String(document.getElementById('data').value)
    let res = document.getElementById('msg')
    const ano = Number(datausr.substring(0, 4))
    const anostring = datausr.substring(0, 4)
    const mes = Number(datausr.substring(5, 7))
    const dia = Number(datausr.substring(8, 10))
    const data = new Date(ano, (mes), (dia))  // função construtora, sempre é precedida de new e começa com maiúsculo
    const diaSem = data.getDay()
    res.innerHTML = `A data digitada é: ${diaSemana(diaSem)}, ${dia} de ${nomeMes(mes-1)} de ${ano}, com noite de ${faseslua(dia, mes, ano, anostring)}.`
}




