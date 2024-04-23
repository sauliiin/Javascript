const nuns = [1, 23, 43, 56, 12, 98, 7, 34, 55]

//for of
for(let valor of nuns) {
    console.log(valor)
}

//for it é semelhante às funções anteriores, mas ele somente itera e não dá nenhum retorno.
nuns.forEach(function(valor, índice, array){
    console.log(índice, valor);
});


// da pra fazer com arrow function. Aliás, deve
nuns.forEach((v, i) => console.log(`${i} - ${v}`));