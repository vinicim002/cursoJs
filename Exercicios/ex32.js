const numeros = [10, 20, 30, 40, 50];

let soma = 0;

numeros.forEach((numero) => {
    soma += numero;
});

const media = soma/numeros.length;

console.log(`Media: ${media}`);

//Solucao do chatgpt que usa o reduce 

// const numeros = [10, 20, 30, 40, 50];

// const soma = numeros.reduce((acc, numero) => acc + numero, 0);
// const media = soma / numeros.length;

// console.log(`Media: ${media}`);

// Explicação:
// O método reduce recebe uma função de callback, onde acc (acumulador) começa com o valor 0 (passado como segundo argumento para reduce) e vai somando os números à medida que percorre o vetor.
// Após calcular a soma de todos os números, você pode dividir pela quantidade de elementos com numeros.length para obter a média.
