// const mod1 = require('./mod1');
// console.log(mod1);

// const { nome, sobrenome, falanome } = require('./mod1');
// console.log(nome, sobrenome);

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

// const p1 = new Pessoa('Vinicius');
// console.log(p1);

// axios('https://pokeapi.co/api/v2/pokemon?limit=10')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));

const p1 = new Pessoa('Joao');
console.log(p1);
