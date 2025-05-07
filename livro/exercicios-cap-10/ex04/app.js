const main = document.querySelector('.main');
const btnSubmit = document.querySelector('.btn-add');
const btnMostrarTabela = document.querySelector('.btn-montar-tabela');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('#inClube');
    const nomeClube = input.value.trim();

    if (nomeClube === '') return;

    mostrarClubes(nomeClube);

    input.value = '';
    input.focus();
});

// Adicionar os clubes na página
const mostrarClubes = (clube) => {
    // Verifica se já existe a div.clubes
    let divClubes = document.querySelector('.clubes');

    // Se não existir, cria
    if (!divClubes) {
        divClubes = document.createElement('div');
        divClubes.classList.add('clubes');

        const containerDireita = document.querySelector('.container-direita');
        containerDireita.appendChild(divClubes);
    }

    // Cria o novo <h5> com o nome do clube
    const h5 = document.createElement('h5');
    h5.textContent = clube;

    // Adiciona o <h5> dentro da div.clubes
    divClubes.appendChild(h5);
};

btnMostrarTabela.addEventListener('click', () => {
    const h5 = document.querySelector()
})
