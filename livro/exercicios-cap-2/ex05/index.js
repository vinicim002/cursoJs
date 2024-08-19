const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');

frm.addEventListener('submit', (e) =>{
    const valor15min = Number(frm.valor15min.value);
    const tempodeUso = Number(frm.tempodeUso.value);

    const precoFinal = Math.ceil(tempodeUso / 15) * valor15min;

    resp1.innerText = `Valor a pagar R$: ${precoFinal.toFixed(2)}`;

    e.preventDefault();
});