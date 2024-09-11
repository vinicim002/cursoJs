const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numeroAnos = Number(frm.inNumeroAnos.value);    
    let numeroChinchila = Number(frm.inNumeroChinchila.value);
    
    while(isNaN(numeroChinchila) || numeroChinchila < 2){
        alert("Por favor, digite um numero valido de Chinchilas (precisa ser maior ou igual a 2)");
        numeroChinchila =  Number(prompt("Digite a quantidade de Chinchilas"));
    }

    let numeroChinchilaAno = numeroChinchila;
    let resultado = '';

    for(let i = 1; i <= numeroAnos; i++){
        if(i === 1){
            resultado += `${i}º ano: ${numeroChinchila} chinchilas\n`;
        }else{
            numeroChinchilaAno *= 3
            resultado += `${i}º ano: ${numeroChinchilaAno} chinchilas\n`;
        }
    }

    resp.innerText = resultado;
});