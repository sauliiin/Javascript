function FB(data) {
    const quadro = document.querySelector('.res'); 
    if (data%3===0 && data%5===0) return quadro.innerHTML += `${data} - FizzBuzz<br>`
    if (data%3===0) return quadro.innerHTML += `${data} - FIZZ<br>`
    if (data%5===0) return quadro.innerHTML += `${data} - BUZZ<br>`
    if (data%3!=0 && data%5!=0) return quadro.innerHTML += `${data} - Fuennn!<br>`
}

function FizzBuzz() {
    let data = document.getElementById('BF').value;
    const quadro = document.querySelector('.res'); 
    quadro.innerHTML = '' 
    while (data<=100) {
        FB(data)
        data++
    } 
}

