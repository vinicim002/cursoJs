const anuidade = (mes, valorAnuidade) => {
    const resultado = valorAnuidade * (1 - Math.pow((5/100), mes));
    return resultado
};

console.log(anuidade(1,2000));