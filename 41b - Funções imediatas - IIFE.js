// Funções imediatas - IIFE - Immediately Invoked Function Expression - Elas começam com parênteses e tem um () no final. Elas são chamadas automaticamente quando criadas.

(function(nome, idade){
    console.log(`${nome} tem ${idade} idade.`)
})('Olaf', 12);

(function(nome, idade){console.log(`${nome} tem ${idade} idade.`)})('Olaf', 12);
