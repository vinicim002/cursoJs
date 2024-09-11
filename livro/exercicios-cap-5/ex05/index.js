const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numeroSimbolo = Number(frm.inValor.value);
    let resultado = '';

    for(let i = 1; i <= numeroSimbolo; i++){
        if(i % 2 == 0){
            resultado += `_`;
        }else{
            resultado += `*`;
        }
    }

    resp.innerText = `${resultado}`;
});