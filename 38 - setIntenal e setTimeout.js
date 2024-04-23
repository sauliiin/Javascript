function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

const timer = setInterval(function() {console.log(mostraHora())}, 1000);
//Eu declaro em uma variável (const) pra já chamar a função, setInterval(function{o que eu quero que seja executado}, de quanto em quanto tempo)

setTimeout(function() {clearInterval(timer);}, 8000)
// function(){clearInterval é uma chamada para parar(o que eu quero que pare), quando} 
//o clearInterval SEMPREEEEE depende da existência um setInterval(). The clearInterval() method clears a timer set with the setInterval() method. Ver Ex 38 - timer 

setTimeout(function() {  
    console.log("Essa mensagem é exibida após 3 segundos");
}, 3000);