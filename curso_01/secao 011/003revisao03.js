//ES8: Object.values e Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

//ES8: Melhorias na Notação Literal
const nome = 'Ana';
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!';
    }
};
console.log(pessoa.nome, pessoa.ola()); // Ana Oi gente!

//class

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!';
    }
}

const cachorro = new Cachorro();