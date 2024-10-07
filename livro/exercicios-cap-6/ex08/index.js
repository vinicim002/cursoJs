const frm = document.querySelector('form');
const resp = document.querySelector('#lista');
const resp2 = document.querySelector('#ordem');


const vetNumeros = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    if(vetNumeros.includes(numero)){
        alert('Esse nuumero ja existe, digite outro!');
        return;
    }else{
        vetNumeros.push(numero);
    }

    frm.reset();
    frm.inNumero.focus();

});

frm.btVerificarOrdem.addEventListener('click', (e) => {
    const vetCopia = [...vetNumeros];
    let contador = 0;
    let lista = `Numeros: ${vetNumeros}\n`;

    vetCopia.sort((a, b) => a - b);

    for(let i = 0; i < vetNumeros.length; i++){
        if(vetNumeros[i] === vetCopia[i]){
            contador += 1
        }
    }

    if (contador === vetNumeros.length) {
        resp.innerText = lista;
        resp2.innerText = `Atenção... Os números estão em ordem crescente`;
    
        // Remover classe anterior e adicionar a classe correspondente
        resp2.classList.remove('ordem-nao-crescente');
        resp2.classList.add('ordem-crescente');
    } else {
        resp.innerText = lista;
        resp2.innerText = `Atenção... Os números não estão em ordem crescente`;
    
        // Remover classe anterior e adicionar a classe correspondente
        resp2.classList.remove('ordem-crescente');
        resp2.classList.add('ordem-nao-crescente');
    }
    

});