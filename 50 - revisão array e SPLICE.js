//               0        1        2        3        4         5
const nomes = ['João', 'Carlos', 'David', 'Pedro', 'Rapha', 'Wallace'];
console.log(nomes);
nomes[2] = 'Philip';
console.log(nomes);
delete nomes[4];
console.log(nomes);
nomes.push('Jonh');
console.log(nomes);
const novo = nomes.slice(0, 3);   // perceba que ele não inclui o 3! ATENÇÃO
console.log(novo);
const novo2 = nomes.slice(0, -1);   // Pega todos menos o último (-1)
console.log(novo2);
const novo3 = nomes.slice(1, -2);   // Pega todos menos o último (-1)
console.log(novo3);
console.log('');

//Eu posso criar um array usando função construtora, mas não se usa muito.
const dados = new Array('trabalhador', 'sério', 'calado');
console.log(dados);
console.log('');

const pessoa = 'Carlos Eduardo da Silva Ferreira';
const pessoapartida = pessoa.split(' ');
console.log(pessoapartida);
const pessoajuntada = pessoapartida.join(' '); // Posso juntar com o q eu quiser. Traço, vírgula, etc.
console.log(pessoajuntada);
console.log('');

const lista = 'Feijão, Arroz, Carne, Tomate, Abacate, Carne';
const listapartida = lista.split(', ');
console.log(listapartida);
console.log('')

//////////////////////////// SPLICE ////////////////////////////

//               -6       -5        -4       -3        -2       -1
//                0        1         2        3         4        5
const alunos = ['Olaf', 'Filip', 'Gustaf', 'Ricky', 'Saulin', 'Yoda'];
// const backup = alunos; Na verdade, não vai funcionar como um backup, pq tudo que eu fizer em um vai refletir no outro, então eu uso o rest operator: ... Os 3 pontos espalham os dados de um array.
const backup = [...alunos];
alunos.splice(5, 2);    // Eu quero remover do índice 5, 2 elemento.
console.log(alunos);
alunos.splice(-4, 1);    // Eu quero remover do índice -5, 1 elemento.
console.log(alunos);
alunos.splice(3, 0, 'Yoda', 'Jedi');   // Começa no índice 3, não remove nenhum elemento e adiciona Yoda e Jedi (contado do índice 3, por isso empurrou Saulin pra frente)
console.log(alunos);
const removidos = alunos.splice(0, 3);
console.log(alunos);

////////////////////// CONCATENAR ARRAYS ///////////////////////

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const somaAErrado = a1 + a2;
console.log(somaAErrado);
const somaA = a1.concat(a2);
console.log(somaA);
//concat é mais brabo ainda:
const somaA2 = a1.concat(a2, [7, 8, 9], 'Luiz');
console.log(somaA2);
// tb da pra fazer com o spread operator
const somnaa1a2 = [...a1, ...a2, 'Olaf', ...[7, 8, 9]];
console.log(somnaa1a2)


