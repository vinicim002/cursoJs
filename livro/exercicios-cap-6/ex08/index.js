const frm = document.querySelector('form');
const resp = document.querySelector('#lista');
const resp2 = document.querySelector('#ordem');


const vetNumeros = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    if(vetNumeros.includes(numero)){
        alert('Esse nuumero ja existe, digite outro!');
        return;
    }else{
        vetNumeros.push(numero);
    }

    let lista = 'Lista de numeros:\n';
    lista += `${vetNumeros.join(", ")}`;

    resp.innerText = lista;

    frm.reset();
    frm.inNumero.focus();

});