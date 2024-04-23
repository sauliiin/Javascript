// ATENÇÃO!!! AS MESMAS COISAS QUE A GENTE TEM EM CSS TEM NO JS MAS EM CAMELCASE E SEM OS TRAÇOS. EX: background-color EM JS É: backgroundColor


let display = document.getElementById('display');

document.addEventListener('click', function(evento){
    const data = evento.target; 
    valor = data.innerText; // innertext é o valor escrito no html
    if(data.classList.contains('btn')) {
        display.value += valor;
    } 
    if(data.classList.contains('btn-clear')) {
        display.value = '';
    } 
    if(data.classList.contains('btn-del')) {
        display.value = display.value.slice(0, -2);
    } 
    if(data.classList.contains('btn-eq')) {
        let conta = display.value.slice(0, -1);
        try {
          conta = eval(conta); // a função eval avalia o que está na string e tenta executá-la como um código JavaScript
          if(!conta) {
            alert('Conta inválida');
            return;
          }
          display.value = String(conta);
        } catch(evento) {
          alert('Conta inválida');
          return;
        }
      }   
})

display.addEventListener('keyup', evento => {
  if (evento.keyCode === 13) {
    let conta = display.value;
        try {
          conta = eval(conta); // a função eval avalia o que está na string e tenta executá-la como um código JavaScript
          if(!conta) {
            alert('Conta inválida');
            return;
          }
          display.value = String(conta);
        } catch(evento) {
          alert('Conta inválida');
          return;
        }
      }   
})

display.addEventListener('keydown', e => {
    if (e.keyCode === 8) {
      e.preventDefault();
      display.value = display.value.slice(0, -1);
    }
});





