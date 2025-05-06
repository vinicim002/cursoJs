const main = document.querySelector('.main');
const btnSubmit = document.querySelector('.btn-add');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('#inClube');

    const nomeClube = input.value;

    if (nomeClube.trim() === '') return;

    input.value = '';
    input.focus();
})

//Adicionar os clubes na pagina

const mostrarClubes = (clube) => {
    let divClubes = document.createElement('div');

    //Se n existir ele ira criar
    if (!divClubes) {
        let divClubes = document.createElement('div');
        divClubes.classList.add('clubes');

        //Adicionanado essa div dentro da div container-direita
        const containerDireita = document.querySelector('.container-direita');
        containerDireita.appendChild('divClubes');
    }

    const h5 = document.createElement('h5')
}


