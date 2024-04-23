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