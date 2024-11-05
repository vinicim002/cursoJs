const numeros = [5, -10, 15, -20, -25, 30, 8, 18, -12, -21, 7, 19, 3, 11, -22];

let qtdNegaativos = 0;

numeros.forEach((numero) => {
    if(numero < 0) qtdNegaativos++
});

console.log(`Quantidade de negativos: ${qtdNegaativos}`);
