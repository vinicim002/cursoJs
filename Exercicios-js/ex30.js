const numeros = [5, 10, 15, 20, 25, 30, 8, 18, 12, 21, 7, 19, 3, 11, 22];
let maior = numeros[0];
let menor = numeros[0];

numeros.forEach((numero) => {
    if(numero > maior) maior = numero;
    if(numero < menor) menor = numero;
});

console.log(`Maior numero encontrado: ${maior}\nMenor numero encontrado: ${menor}`);