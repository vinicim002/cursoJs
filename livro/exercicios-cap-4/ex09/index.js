const frm = document.querySelector('form');
const resp = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const valor = Number(frm.inValor.value);

    let troco = 0.00 
    
    if(valor >= 1 && valor < 1.75){
        troco = valor - 1;
        resp.innerText = `Tempo: 30 min`;   
    }else if(valor >= 1.75 && valor < 3){
        troco = valor - 1.75;
        resp.innerText = `Tempo: 60 min`;
    }else if(valor >= 3){
        troco = valor - 3;
        resp.innerText = `Tempo: 120 min`;
    }else{
        resp.innerText = `Valor Insuficiente!`;
        resp2.innerText = ``;
        return;
    }

    if(troco > 0){
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
    }else{
        resp2.innerText = ``;
    }
});
