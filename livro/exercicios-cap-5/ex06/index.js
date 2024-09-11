const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fruta = frm.inNome.value;
    const numero = Number(frm.inNumero.value);
    let resultado = '';

    for(let i = 1; i <= numero; i++){
        if(i === numero){
            resultado += `${fruta}`;
        }else{
            resultado += `${fruta} * `;
        }
        
    }

    resp.innerText = `${resultado}`;
});