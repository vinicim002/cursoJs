const vetorInteiro = [1, 2, 3, 4]; 
const vetorString = ["a", "b", "c", "d"]; 
const vetorDouble = [0.5, 0.10, 0.15, 0.25]; 

// Primeira forma de união usando concat()
const arraySupremo = vetorInteiro.concat(vetorDouble, vetorString);

// Segunda forma de união usando o operador de espalhamento (...)
const arraySupremo2 = [...vetorInteiro, ...vetorDouble, ...vetorString];

// Exibindo os resultados no console
console.log("Resultado da primeira união com concat():", arraySupremo);
console.log("Resultado da segunda união com o operador de espalhamento:", arraySupremo2);
