const pessoa = {
    nome : "Vinicius",
    sobrenome : "Silva",
    idade : 23,
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

pessoa.getDataNascimento = function () { 
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa.getDataNascimento());

for (let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}

// Factory functions / Constructor functions / Classes

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criarPessoa('Vinicius', 'Vila Nova');
console.log(p1.nomeCompleto);

function Pessoa (nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
}

const p2 = new Pessoa('Alice', 'Magalhoes');
Object.freeze(p2);
p2.nome = 'Outra coisa';
console.log(p2);