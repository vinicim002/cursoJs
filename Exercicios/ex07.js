const multiplicar = (num1, num2) => {
    let soma = 0;
    for(let i=0; i<num2; i++){
        soma += num1
    }

    return soma;
}

console.log(multiplicar(3,3));
console.log(multiplicar(10,10));
console.log(multiplicar(12,12));
console.log(multiplicar(2,3));