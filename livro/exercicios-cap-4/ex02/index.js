const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value;
    const sexoM = frm.inSexoM.checked;
    const altura = frm.inAltura.value;

    //Usei let, pois posso criar uma variavel sem precisar delecarar valor para ela, com const nao posso fazer isso
    let peso;

    if(sexoM == true){
        peso = 22 * Math.pow(altura, 2);
        resp1.innerText= `${nome}: Seu peso ideal eh ${peso.toFixed(3)} kg`;
        resp1.style.background = 'blue';
        resp1.style.color = 'white';
    }else{
        peso = 21 * Math.pow(altura, 2);
        resp1.innerText= `${nome}: Seu peso ideal eh ${peso.toFixed(3)} kg`;
        resp1.style.background = 'pink';
        resp1.style.color = 'white';

    }

    e.preventDefault();
});