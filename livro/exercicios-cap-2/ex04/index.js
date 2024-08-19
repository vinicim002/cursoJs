const frm = document.querySelector('form');
const resp1 =document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');

frm.addEventListener('submit', (e) => {
    const nomeMedicamento = frm.nomeMedicamento.value;
    const precoMedicamento = Number(frm.precoMedicamento.value);

    // const promocao = precoMedicamento.toFixed(0) * 2;
    
    const promocao = Math.floor(precoMedicamento * 2);

    // Math.floor(precoMedicamento * 2): Arredonda para baixo após multiplicar por 2. Por exemplo, se o preço for 19,99, o resultado da promoção seria 39,00.

    // precoMedicamento.toFixed(0) * 2: Arredonda o preço individual para o inteiro mais próximo antes de multiplicar por 2. Por exemplo, se o preço for 19,99, ele arredonda para 20 e o resultado seria 40.

    resp1.innerText = `Promocao de ${nomeMedicamento}`;
    resp2.innerText = `Leve 2 por apenahs R$: ${promocao.toFixed(2)}`;

    e.preventDefault();
});