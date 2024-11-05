const jurosSimples = (capital_inicial, tx_de_juros, temp_de_aplicacao) => {
    const juros = capital_inicial * tx_de_juros * temp_de_aplicacao;
    const montante = capital_inicial + juros;

    return `Montante da aplicacao em juros simples = ${montante.toFixed(2).replace('.', ',')}`;
}

console.log(jurosSimples(1000, 0.1, 5));

const jurosCompostos = (capital_inicial, tx_de_juros, temp_de_aplicacao) => {
    const montante = capital_inicial * (1 + tx_de_juros) ** temp_de_aplicacao;
    
    return `Montante da aplicacao em juros compostos= ${montante.toFixed(2).replace('.', ',')}`;
}

console.log(jurosCompostos(1000, 0.05, 3));



