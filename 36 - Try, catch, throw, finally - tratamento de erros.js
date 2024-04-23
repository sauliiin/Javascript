// try, catch, throw são ótimos para tratar errors

try {
    console.log(qualquercoisa);
} catch (erro) {
    console.log('qualquer coisa não foi definida');
}

const res = (x, y) => (x + y) 

try {
    console.log(res(1, 2));
    console.log(res('s', 5));
} catch (error) {
    console.log(error);
}

/*
try { TENTE
    // Esta parte é executada quando não há erros
} catch (e) {
    // Esta parte é executada quando há erros
} finally {
    // sempre é executada! Mas pode ser omitido se não for necessário.
}
*/
//Sempre que a gente tem muita indentação, o código fica feio e não é uma boa prática, então podemos aninhar alguns trechos.


function retornaHora(data) {      // Eu quero que essa data seja exatamente um objeto do date de JS!
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}


const hora = retornaHora();
console.log(hora);