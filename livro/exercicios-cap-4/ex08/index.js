const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value);
    const multaLeve = (0.2 * velocidadePermitida) + velocidadePermitida;
    
    if(velocidadeCondutor <= velocidadePermitida){
        resp.innerText = `Situação: Sem Multa!`;
    }else if(velocidadeCondutor <= multaLeve){
        resp.innerText = `Situação: Multa Leve!`;
    }else{
        resp.innerText = `Situação: Multa Grave!`;
    }
});