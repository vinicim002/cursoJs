const pessoa = {
    nome : "Vinicius",
    sobrenome : "Silva",
    idade : 22,
};

const key = 'nome';

console.log(pessoa.nome);
console.log(pessoa.sobreNome);
console.log(pessoa.idade);

console.log(pessoa[key]);
console.log(pessoa['sobreNome']);
console.log(pessoa['idade']);

const pessoa2 = new Object();
pessoa2.nome = 'Alice';
pessoa2.Idade = '21';

console.log(pessoa2);
console.log(pessoa2.nome);

//Apagando

delete pessoa.nome;
console.log(pessoa.nome); //undefined

delete pessoa2['idade'];
console.log(pessoa2.idade); //undefined

//Funcao em objetos

pessoa.falarSobrenome = function() {
    console.log(`${this.sobrenome} esta falando seu sobrenome!`);
}

pessoa.falarSobrenome();
