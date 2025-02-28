const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const calcularDesconto = (valorDaVacina) => {
    const convenioSelecionado = document.getElementById("convenios").value;
    let descontoPercentual = 0.1; // Padrão para 10%

    if (convenioSelecionado === "convenio01") {
        descontoPercentual = 0.2; // 20%
    } else if (convenioSelecionado === "convenio02") {
        descontoPercentual = 0.5; // 50%
    }

    return valorDaVacina * (1 - descontoPercentual); // Retorna o valor com o desconto
}

frm.addEventListener('change', () => {
    // Como divConvenio não é um filho direto de frm, preciso pegar o id dele
    const divConvenio = document.getElementById("divConvenio");
    if (frm.rdSim.checked) {
        divConvenio.className = "exibe";
    } else {
        divConvenio.className = "oculta";
    }
});

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const valorDaVacina = Number(frm.inValor.value);

    // Calcular o valor com desconto
    const valorComDesconto = calcularDesconto(valorDaVacina);

    // Mostrar o valor do desconto e o valor a pagar corretamente
    resp.innerHTML = `Desconto: R$ ${(valorDaVacina - valorComDesconto).toFixed(2)}<br>A pagar: R$ ${valorComDesconto.toFixed(2)}`;
});
