const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const raiz = Number(frm.inNumber.value);

    const resultado = Math.sqrt(raiz);

    if(Number.isInteger(resultado)){
        resp.innerText = `Raiz: ${resultado}`;
        resp.style.background = 'green';
        resp.style.color = 'white';
        
    }else{
        resp.innerText = `Nao ha raiz exata para ${raiz}`;
        resp.style.background = 'Red';
        resp.style.color = 'white';
    }

    e.preventDefault();
});