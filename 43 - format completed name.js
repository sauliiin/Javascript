const nome = 'SAUlo huGo roSSi' 

function formatName(nome) {
    const nomesplited = nome.split(' ')
    let NomeCompletoFormatado = [];
    let nomef = ''
    for (index in nomesplited) {
        let nomes = nomesplited[index];
        let nomeSplitFormat = nomes[0].toUpperCase() + nomes.substring(1, nomes.length).toLowerCase();
        NomeCompletoFormatado.push(nomeSplitFormat);
    }
    for (i in NomeCompletoFormatado) {
        NomeCompletoFormatado.length < 1 ? (nomef += NomeCompletoFormatado[i]) : (nomef += NomeCompletoFormatado[i] + ' ');
    }
    return nomef;
}
console.log(formatName(nome))

// Outra forma é o join (Junta tundo em uma string e coloca espaço):


const nome2 = 'SAUlo huGo roSSi'

function formatName2(nome) {
    const nomesplited = nome.split(' ')
    let NomeCompletoFormatado = [];
    let nomef = ''
    for (index in nomesplited) {
        let nomes = nomesplited[index];
        let nomeSplitFormat = nomes[0].toUpperCase() + nomes.substring(1, nomes.length).toLowerCase();
        NomeCompletoFormatado.push(nomeSplitFormat);
        nomef = NomeCompletoFormatado.join(' ')
    }
    return nomef;
}
console.log(formatName(nome))