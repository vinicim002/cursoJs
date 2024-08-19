const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const preco = Number(frm.preco.value);
    const consumoEmGramas = Number(frm.consumoEmGrama.value);
    const valorSerPago = (preco * consumoEmGramas)/1000;

    resp1.innerText = `Valor a pagar R$: ${valorSerPago.toFixed(2)}`;

    e.preventDefault();
});
