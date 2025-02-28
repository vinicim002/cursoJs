const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const calcularDesconto = (valorDaVacina) => {
    const convenioSelecionado = document.getElementById("convenios").value;
    let descontoPercentual = 0.1; // Desconto padrão de 10%

    // Verifica se o convênio é "Amigos dos Animais" ou "Saúde Animal"
    if (convenioSelecionado === "convenio01") {
        descontoPercentual = 0.2; // 20% de desconto
    } else if (convenioSelecionado === "convenio02") {
        descontoPercentual = 0.5; // 50% de desconto
    }
    
    // Se o usuário escolher "Não", não muda o valor do desconto (ainda será 10%)
    return valorDaVacina * (1 - descontoPercentual); // Retorna o valor com o desconto
};

frm.addEventListener('change', () => {
    const divConvenio = document.getElementById("divConvenio");

    // Se o usuário escolher "Sim" para convênio, exibe o select
    if (frm.rdSim.checked) {
        divConvenio.className = "exibe";
    } else {
        divConvenio.className = "oculta";
    }
});

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const valorDaVacina = Number(frm.inValor.value);

    // Verifica se o convênio foi selecionado ou se o usuário está com o "não" marcado
    const valorComDesconto = calcularDesconto(valorDaVacina);

    // Exibe o valor do desconto e o valor a pagar corretamente
    resp.innerHTML = `Desconto: R$ ${(valorDaVacina - valorComDesconto).toFixed(2)}<br>A pagar: R$ ${valorComDesconto.toFixed(2)}`;
});
