



let meses = 1
let economiaMes = 0
let economiaTotal = 0

while (economiaTotal < 15000) {
  economiaMes = (200*1.008**meses) - 72;
  economiaTotal += economiaMes;
  console.log(economiaTotal)
  meses++
  console.log(meses)
}
console.log(meses)