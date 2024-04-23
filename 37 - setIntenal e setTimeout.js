function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {hour12: false});
}
// setInterval vai configurar um intervalo de tempo para que uma função seja executada

/*
function funcaoInterval() {
    console.log(mostraHora())
}

setInterval(funcaoInterval, 1000); // 1000 milisegundos = 1 segundo

//Nossa, mas criar outra função pra isso. Nãooo, você pode criar uma função anônima:
*/


//const timer = setInterval(function(){console.log(mostraHora())}, 1000);
const timer = setInterval(() => {console.log(mostraHora())}, 1000) // É a mesma coisa, só que ao invés de função anônima, eu usei arrow function


//Eu declaro em uma variável (const) pra já chamar a função, setInterval(function{o que eu quero que seja executado}, de quanto em quanto tempo)
/* isso acima e o mesmo que 
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);*/


//para não ficar executando para sempre a gente pode jogar a função acima em uma variável e usar o seTimeout
setTimeout(function(){
    clearInterval(timer);
}, 8000)

// seTimeout tb pode ser usada para outras coisas, por exemplo, exibir uma mensagem na tela após um tempo.
/*setTimeout(function(){
    console.log('Olá, mundo!')
}, 5000)


function hora () {
    setInterval(function(){(mostraHora())}, 1000) 
}*/
const mensagem = function() {  
    console.log("Essa mensagem é exibida depois de 3 segundos");
}
 
//setTimeout(mensagem, 3000);
//Isso acima é o mesmo que:
setTimeout(function() {  
    console.log("Essa mensagem é exibida após 3 segundos");
}, 3000);



