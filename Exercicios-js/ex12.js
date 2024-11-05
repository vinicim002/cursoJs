// 12) Faça um algoritmo que calcule o fatorial de um número.

const fatorial = (num) => {
    if(num === 0 || num === 1) return 1;

    let resultado = num;

    for(let i = num - 1; i > 0; i--){
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(4));
