let nome = prompt('Qual o seu nome?')
while (nome == null || nome.length == '') {
    nome = confirm('Digite seu nome para prosseguir:')
} 

function tabuada() {
    if (window.confirm(`${nome}, deseja prosseguir?`) == true) {  //window.confirm ou confirm, sempre retorna um valor true or false
        let nT = document.getElementById('txtn')
        let tab = document.getElementById('seltab')
        

        if (nT.value.length == 0) {
            window.alert('[ERRO] Você deve preencher algum número!')
        } else {
            let nN = Number(nT.value)
            let cont = 1
            tab.innerHTML = ''
            do {
                let item = document.createElement('option')
                item.text = `${nN} x ${cont} = ${nN * cont}`
                item.value = `tab${cont}`
                tab.appendChild(item)
                cont++
            } while (cont <= 10)
        }
    } else {
        alert('Operação abortada!')
    }

}





