const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

let resposta = '';
let numContas = 0;
let valorTotal = 0;

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const descricao = frm.inDescricao.value;
    const valorConta = Number(frm.inValor.value); 

    numContas++;

    valorTotal += valorConta;
    resposta += `${descricao} - R$: ${valorConta.toFixed(2)} \n`; 
    resp1.innerText = `${resposta} -----------------------------------------`;
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`;

    frm.inDescricao.value = "";
    frm.inValor.value = "";
    frm.inDescricao.focus();  // Posiciona no campo inDescricao do form
});
