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

//Mostra array com chaves e valores
console.log(Object.entries(produto));

//Pegando so os valores
// console.log(Object.values(produto));

//Descreve as propriedades e sua configs
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

//Congela o objeto com isso nao consigo alterar mais nada dele
// Object.freeze(produto);
// produto.nome = "Escova"; // nao eh atribuido devido ao freeze
// console.log(produto.nome);

//Copiar um objeto
// const caneca = Object.assign({}, produto, { material: 'porcelana'});

//Mostrando as chaves do objeto
// console.log(Object.keys(produto));

