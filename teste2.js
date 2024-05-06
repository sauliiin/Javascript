function custoPainel (consumo) {
    if (consumo > 0 && consumo <= 400) return 15000;
    if (consumo > 400 && consumo <= 600) return 22000;
    if (consumo > 600 && consumo <= 800) return 25000;
    if (consumo > 800 && consumo <= 1000) return 15000;
}    

function economia (contaM) {
    let meses = 1
    let contaText = document.getElementById('conta').value;
    let contaNum = Number(contaText.replace(',','.'));
    if (contaNum > 1000) setTimeout(() => {alert('Maior que 1000, Blablabla')}, 300);
    let consumo = (contaNum - 24.26)*0.95553117;
    console.log(consumo)
    let custoP = custoPainel(consumo);
    console.log(custoP)
    let economiaTotal = 0;
    while (economiaTotal < custoP) {
      let economiaMes = (contaM * 1.008 ** meses) - 72;
      console.log(economiaMes)
      economiaTotal += economiaMes;
      meses++
    }
    return meses;
}