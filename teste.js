



let meses = 1


/*while (economiaTotal < 15000) {
  let economiaMes = (200 * 1.008 ** meses) - 72;
  economiaTotal += economiaMes;
  console.log(economiaTotal)
  meses++
  console.log(meses)
}
console.log(meses)
*/




function economia(contaM, painelS) {
  let economiaTotal = 0;
  while (economiaTotal < painelS) {
    let economiaMes = (contaM * 1.008 ** meses) - 72;
    economiaTotal += economiaMes;
    meses++
  }
  return meses
}
console.log(economia(250, 15000))