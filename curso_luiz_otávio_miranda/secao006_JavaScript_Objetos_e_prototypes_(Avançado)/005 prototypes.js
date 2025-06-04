// Construtora => modlde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() { return this.nome + " " + this.sobrenome};

// Instacia
const pessoa1 = new Pessoa('Vinicius', 'V.');
const pessoa2 = new Pessoa('Alice', 'M.');
const data = new Date(); // <-- date = Funcao construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
