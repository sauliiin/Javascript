// Objetos, assim como arrays, sao valores passados por referencia

const produto = {nome: 'Caneta', preço: 1.8};
const outraCoisa = produto;
console.log(outraCoisa);
produto.nome = 'Camiseta';
console.log(produto);
console.log(outraCoisa);

console.log('//------------------------------------------//')

// Como que eu faço para que produto e outraCoisa sejam copiados e não remetam aos mesmos dados (ocupem o mesmo lugar na memória.) Prof acha a maneira mais fácil usar o spread operator:

const umaOtraCoisa = {...produto};
umaOtraCoisa.nome = 'calcinha';
console.log(umaOtraCoisa)

// eu posso ainda acrescentar outra coisa com spread operator
const duaOtraCoisa = {...produto, material: 'pano'};
console.log(duaOtraCoisa);

console.log('//------------------------------------------//')

// outra maneira é o Object.assign
const tresOtraCoisa = Object.assign({}, produto);
tresOtraCoisa.nome = 'brusinha';
console.log(tresOtraCoisa)

console.log('//------------------------------------------//')

// para ver as chaves do objeto:
console.log(Object.keys(produto));
// para obter os valore:
console.log(Object.values(produto));
// para ver os 2:
console.log(Object.entries(produto))
//para impedir alteração do objeto e só usar o freeze
Object.freeze(outraCoisa);
outraCoisa.nome = 'Abracadabra';
console.log(outraCoisa)

console.log('//------------------------------------------//')

//ver propriedade (aprendemos na ultima aula) do objeto
const produto1 = {nome: 'Camiseta', preço: 28};
console.log(Object.getOwnPropertyDescriptor(produto1, 'nome'));
Object.defineProperty(produto1, 'nome', {
    enumerable: false
});
console.log(produto1)