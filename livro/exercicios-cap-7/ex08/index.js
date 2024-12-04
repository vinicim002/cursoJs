const frm = document.querySelector('form'); //Obtendo conteudo
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault(); //Evitando envio do forms

    const dataInfracao = frm.inData.value;
    const valorMulta = frm.inValor.value;
    const hoje = new Date();
    const venc = new Date();


});

