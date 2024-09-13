const restoDaDivisao = (x, y) =>{
    const resultado = Math.floor(x / y);
    const resto = x % y;

    return `Resultado = ${resultado}\nResto = ${resto}`
} 

console.log(restoDaDivisao(2,2));