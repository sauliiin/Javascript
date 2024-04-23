function analisar() {
    let nt = document.getElementById('txtnum')
    let num = Number(nt.value)
    let resultado = window.document.getElementById('res')
    resultado.innerHTML = `<p>Você digitou o número ${num}.<br></p>`
    resultado.innerHTML += `A raiz quadrada de ${num} é <strong>${Math.sqrt(num).toFixed(2)}</strong>.<br>`
    /*if (Number.isInteger(num) == true) {
        resultado.innerHTML += `${num} é um número <strong>inteiro</strong>.<br>`
    } else {
        resultado.innerHTML += `${num} é um número <strong>real</strong>.<br>`
    }*/
   num.isInteger ? resultado.innerHTML += `${num} é um número <strong>real</strong>.<br>` : resultado.innerHTML += `${num} é um número <strong>real</strong>.<br>`
   
    resultado.innerHTML += `O valor digitado arredondado é <strong>${Math.round(num)}</strong>.`
}

