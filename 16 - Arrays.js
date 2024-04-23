// Arrays são uma lista, coleção de coisas!

let alunos = ['Saulo', 'Olaf', 'Gustaf']
let Saulo = ['Saulo Hugo Rossi', 38, 84]
console.log(alunos)
console.log(Saulo)
console.log(Saulo[2])
console.log('')

Saulo[2] = 81
console.log(Saulo)
console.log('')

// adicionando elemento no array
Saulo[3] = 'lindo'
console.log(Saulo)
// ou se eu nao sei a ultima posição
Saulo[Saulo.length] = 10
// ou 
Saulo.push('solteiro')
// mas se eu quero adicionar no começo:
Saulo.unshift('aluno')
console.log(Saulo)
console.log('')

// para remover do fim
const SauloPop = Saulo.pop()
console.log(SauloPop)
// se eu quiser salvar o removido em uma variável
let nota = Saulo.pop()
console.log(nota)
console.log(Saulo) 
console.log('')

// Se eu quero apagar um elemento, mas não quero alterar os índices, eu uso o comando abaixo, mas dai fico com um elemento vazio
delete Saulo[2]
console.log(Saulo)
Saulo[2] = 10
console.log('')

// se eu quero fatiar, uma parte, posso fazer positivo ou negativo:
console.log(Saulo.slice(0, 2))
console.log(Saulo.slice(0, -1))