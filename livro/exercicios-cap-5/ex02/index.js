const frm = document.querySelector('form');
const resp = document.querySelector('h3');


frm.addEventListener('submit', (e) => {
    e.preventDefault(e);

    const numero = Number(frm.inNumber.value);
    let resposta = '';

    for(let i = 0; i < numero; i++){
        resposta +=  (numero - i) + ', ';
    }

    resp.innerText = `Entre ${numero} e 1: ${resposta}`;
});