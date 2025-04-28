// tagged template - processa o tempalte dentro da função
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return 'Outra string';
}

const nome = 'Gustavo';
const idade = 23;
const cidade = 'São Paulo';
const resultado = tag`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
console.log(resultado); // Outra string