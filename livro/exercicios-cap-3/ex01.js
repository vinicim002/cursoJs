const prompt = require("prompt-sync")();
const num1 = Number(prompt('Primeiro Numero: '));
const num2 = Number(prompt('Segundo Numero: '));
const soma = num1 + num2;
console.log(`Soma eh: ${soma}`);