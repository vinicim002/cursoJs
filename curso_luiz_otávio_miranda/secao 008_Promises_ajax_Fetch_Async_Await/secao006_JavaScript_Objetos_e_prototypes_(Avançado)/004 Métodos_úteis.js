/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o 'prop')
... (spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propiedade)
*/

// const produto = { nome: "Caenca", preco: 1.8 };
// const caneca = {
//   ...produto,
//   material: "porcelana",
// };

// caneca.nome = "Outro nome";
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

const produto = { nome: "Caenca", preco: 1.8 };
//Copiar um objeto
const caneca = Object.assign({}, produto, { material: 'porcelana'});

caneca.nome = "Outro nome";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
