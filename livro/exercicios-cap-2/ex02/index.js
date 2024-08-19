const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');
const resp3 = document.querySelector('h5');

frm.addEventListener('submit', (e) => {
    const nomeMoldelo = frm.modelo.value;
    const precoDoVeiculo = frm.preco.value;

    const entrada = Number(precoDoVeiculo - (precoDoVeiculo * 0.5));
    const saldo = Number(entrada / 12);

    resp1.innerText = `Promocao: ${nomeMoldelo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${saldo.toFixed(2)}`;

    e.preventDefault();
})