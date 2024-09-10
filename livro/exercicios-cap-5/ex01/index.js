const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero =  Number(frm.inNumber.value);
    let resultado = ''; //Acumula a tabuada
    
    for(let i = 1; i <= 10; i++){
        resultado += `${numero} * ${i} = ${numero*i}\n`; //Mostra o resultado e pula uma linha
    }

    resp.innerText = resultado;
});