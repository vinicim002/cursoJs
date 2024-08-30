const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumber.value);

    // if(numero % 2 === 0){
    //     resp.innerText = `O numero ${numero} eh par`;
    // }else{
    //     resp.innerText = `O numero ${numero} eh impar`;
    // };

    //Operador Ternario
    numero % 2 === 0 ? resp.innerText = `O numero ${numero} eh par`: resp.innerText = `O numero ${numero} eh impar`
});