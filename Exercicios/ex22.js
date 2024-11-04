const anuidade = (mes, valorAnuidade) => {
    if (mes < 1 || mes > 12) {
        return "Mês inválido";
    }

    // Calcula os juros compostos com atraso de `mes - 1` meses
    const resultado = valorAnuidade * Math.pow(1 + 0.05, mes - 1);
    return resultado.toFixed(2); // Retorna com duas casas decimais
};

console.log(anuidade(1, 2000)); // Pagamento em janeiro (sem juros)
console.log(anuidade(2, 2000)); // Pagamento em fevereiro (com 5% de juros)
console.log(anuidade(3, 2000)); // Pagamento em março (com juros compostos)
