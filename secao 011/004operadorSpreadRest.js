//Operador ... rest(juntar)/Spread (espalhar)/desestruturação
// usar rest com parametros de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.99 };
const clone = { ativo: true, ...funcionario }; // operador spread
console.log(clone); // { ativo: true, nome: 'Maria', salario: 1234.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Ana'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']; // operador spread
console.log(grupoFinal); // [ 'Maria', 'João', 'Pedro', 'Ana', 'Rafaela' ]