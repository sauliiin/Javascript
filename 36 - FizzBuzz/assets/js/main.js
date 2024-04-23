function FizzBuzzMeu() {
    const quadro = document.querySelector('.res'); 
    quadro.style.backgroundColor = 'rgb(17, 86, 102)';
    const data = document.getElementById('BF').value;
    if (data == '' || data < 0 || data > 100){
        window.alert('Digite um número entra 0 e 100!');
    } else if (isNaN(data) == true) {
        window.alert('Digite um número válido!');
    } else if (data%3===0 && data%5===0) {
        quadro.innerHTML = 'FizzBuzz'
    } else if (data%3===0) { 
        quadro.innerHTML = 'FIZZ'
    } else if (data%5===0) {
        quadro.innerHTML = 'BUZZ'
    } else if (data%3!==0 && data%5!==0) {
        quadro.style.backgroundColor = 'rgb(0, 221, 255)'
        quadro.innerHTML = `Fuennn! ${data}`
    }
}

function FizzBuzzSlim() {
    const quadro = document.querySelector('.res'); 
    quadro.style.backgroundColor = 'rgb(17, 86, 102)';
    const data = document.getElementById('BF').value;
    if (data == '' || data < 0 || data > 100) return window.alert('Digite um número entra 0 e 100!');
    if (isNaN(data) == true) return window.alert('Digite um número válido!');
    if (data%3===0 && data%5===0) return quadro.innerHTML = 'FizzBuzz';
    if (data%3===0) return quadro.innerHTML = 'FIZZ';
    if (data%5===0) return quadro.innerHTML = 'BUZZ';
    if (data%3!==0 && data%5!==0) {
        quadro.style.backgroundColor = 'rgb(0, 221, 255)'
        quadro.innerHTML = `Fuennn!`;
    }
}


