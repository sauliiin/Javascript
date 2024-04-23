/* OPERADORES DE COMPARAÇÃO
>
>=
<
<=
== igual (é diferente de =, que significa atribuição). Checa só valor
=== igualdade estrita. Checa valor e tipo
!= Confere valor
!== diferente estrito. Valor e tipo
*/
console.log(10 == '10')
console.log(10 === '10')
// por isso, que não é recomendável em JS usar == nem !==
const comp = 10 <= 21
console.log(comp)
console.log('')


/* OPERADORES LÓGICOS
&& and (e)    Todas as expressões precisam ser verdadeira para retornar true
|| or (ou)    Um ou outra expressão tem que ser verdadeira para retornar true
! not (não)   Nenhuma expressão pode ser verdadeira para retornar true
*/



/* AVALIAÇÃO CURTO-CIRCUITO
Em JS a partir do momento em que se encontra uma operação falsa ao utilizar o operador && ela a retorna o "valor falso" (ou seja, aquilo que fez a operação ser falsa) e não precisa verificar o resto.
*/
console.log('Olaf' && 0 && 'Olaf' && 18 && 'Gustaf')
// a partir do momento que o JS encontrou uma expressão que avalia em falso, ele retorna este valor, no caso, 0. Quando não encontra nada falso, retorna o último valor
/* Quais os valores que avaliam em falso em JS? Obs: Em JS tudo pode ser avaliado em true ou false
Falsy values (fingem ser valores falsos) são valores que avaliam em falsos quando necessários (é diferente do falso literal, ex: false). Qualquer coisa diferente dos valores abaixo avalia em true em JS:
false
0
''    ""    ``   - strings vazias
null / undefined
NaN
*/
console.log('Olaf' && 'Gustaf' && 'Ricky' && 18 && NaN && 48)
console.log('Olaf' && 16 && 'Ricky' && 18 && undefined && 48)
console.log('')

/* Ainda em curto circuito, o || é mais interessante! 
A partir do momento que o JS encontrou uma expressão que avalia em verdadeiro utilizando o or (||), ele retorna este valor
*/
console.log(false || 0 || 'Ricky' || '' || null || NaN )
/* Qual a utilidade disso?
Suponha que eu tenha um site, em que vc tem uma cor usuário (cor que usuário seleciona) e uma cor padrão. Se o usuário seleciona alguma cor, a cor muda, se ele não seleciona, utilizamos a cor padrão.  Para fazer isso funcionar teríamos que fazer uma operação com if grande, mas utilizando dessa lógica com or fica fácil:
const corPadrão = corUsuário || 'preto'
Explicando o acima. A cor padrão do site é igual a cor do usuário, mas se ele não seleciona (ou seja, corUsuário é false), a cor sera preta (que e o padrão do site.)
*/
let corUsuario = null
let corPadrao = corUsuario || 'preto'
console.log(corPadrao)
console.log('')
corUsuario = 'vermelho' 
corPadrao = corUsuario || 'preto'
console.log(corPadrao)