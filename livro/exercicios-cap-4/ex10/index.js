const frm = document.querySelector('form');
const resp = document.querySelector('#outRes1');
const resp2 = document.querySelector('#outRes2');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const lado1 = Number(frm.inLado1.value);
    const lado2 = Number(frm.inLado2.value);
    const lado3 = Number(frm.inLado3.value);

    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        resp.innerText = `Lados não podem formar um triângulo`;
        resp2.innerText = ``;
    }else if(lado1 === lado2 && lado2 === lado3){
        resp.innerText = `Lados podem formar um triangulo`;
        resp2.innerText = `tipo: Equilatero`;
    }else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
        resp.innerText = `Lados podem formar um triangulo`;
        resp2.innerText = `tipo: Escaleno`;
    }else{
        resp.innerText = `Lados podem formar um triangulo`;
        resp2.innerText = `tipo: Isoceles`;
    }
});