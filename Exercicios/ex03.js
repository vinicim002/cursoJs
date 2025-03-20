const calcularSalario = (horasTrabalhadas, valorPorHora) => {
    const salario = horasTrabalhadas * valorPorHora;
    return `Salario igual a R$ ${salario.toFixed(2).replace(".", ",")}`;
}

console.log(calcularSalario(150, 40.5));