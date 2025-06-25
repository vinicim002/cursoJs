// Closure eh quando uma funcao "lembra"
// seu escopo lexico, mesmo quando a funcao
// eh executada fora desse escopo lexico

const somarXMais3 = require('./escopo');

let x = 100;
console.log(somarXMais3());