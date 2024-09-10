const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero = Number(frm.inValor.value);
    let numDivisores = 0;

    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            numDivisores++
        }
    }
    if(numDivisores == 2){
        resp.innerText = `${numero} e primo`;
    }else{
        resp.innerText = `${numero} nao e primo`
    }
});