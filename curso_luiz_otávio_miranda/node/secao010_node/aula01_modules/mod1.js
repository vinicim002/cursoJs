const nome = 'Vinicius';
const sobrenome = 'Vila Nova';

const falaNome = () => {
    console.log(nome,sobrenome);
};

// module.exports.nome = nome;
// console.log(module.exports);
 
exports.nome = nome;
console.log(exports);