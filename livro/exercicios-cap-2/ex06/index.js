const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
    const nomeProduto = frm.inNomeProduto.value;
    const precoProduto = Number(frm.inPreco.value);
    const valorItem3 = (precoProduto * 0.5);
    const promocao = (precoProduto * 2) + valorItem3;

    resp1.innerText = `${nomeProduto} - Promocao Leve 3 por R$: ${promocao.toFixed(2)}`;
    resp2.innerText = `O TERCEIRO produto custa apenas R$: ${valorItem3.toFixed(2)}`;

    e.preventDefault();
});