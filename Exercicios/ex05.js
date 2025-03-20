//Verifico com o typeof o tipo do dado, se for number e num1 > num2 retorna true senao false
const maiorOuIgual = (num1, num2) => typeof num1 === "number" && typeof num2 === "number" && num1 >= num2;

console.log(maiorOuIgual(0, 0));   // true
console.log(maiorOuIgual(0, "0")); // false (pois "0" é string)
console.log(maiorOuIgual(5, 1));   // true
