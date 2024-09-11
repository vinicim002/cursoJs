const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);
    let resultado = '';
    let acumulador = 0;

    for(let i = 1; i < numero; i++){
        if(numero % i === 0){
            resultado += `${i}, `

            acumulador += i; 
        }
    }

    // Remover a última vírgula e espaço
    resultado = resultado.slice(0, -2);

    resp1.innerText = `Divisores de ${numero}: ${resultado} (soma ${acumulador})`;

    if(numero === acumulador){
        resp2.innerText = `${numero} e um numero Perfeito`;
    }else{
        resp2.innerText = `${numero} nao e um numero Perfeito`;
    }
    
});