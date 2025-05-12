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
    const divClubes = document.querySelector('.clubes');
    const clubes = divClubes.querySelectorAll('h5');

    const divTabela = document.createElement('div');
    divTabela.classList.add('tabela');
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    caption.textContent = 'Tabela de Jogos';
    const tbody = document.createElement('tbody');

    // Percorre os clubes dois a dois e cria as linhas da tabela
    for (let i = 0; i < clubes.length; i += 2) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        td1.textContent = clubes[i]?.textContent || '';
        td2.textContent = clubes[i + 1]?.textContent || '';

        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }

    table.appendChild(caption);
    table.appendChild(tbody);
    divTabela.appendChild(table);
    main.appendChild(divTabela);
});

