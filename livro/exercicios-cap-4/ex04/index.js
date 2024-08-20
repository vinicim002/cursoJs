const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const fusoBr = Number(frm.inFusoBr.value);
    const fusoFran = fusoBr + 5;

     
    let horarioFran = fusoFran;

    if(fusoFran > 24){
        horarioFran = fusoFran - 24;
    }

    resp.innerText = `Hora na Franca: ${horarioFran.toFixed(2)}`;

    e.preventDefault();
})