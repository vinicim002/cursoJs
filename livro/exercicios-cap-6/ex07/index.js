const frm = document.querySelector('form');
const resp = document.querySelector('pre');

const vetNomeClube = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeClube = frm.inNomeClube.value;

    vetNomeClube.push(nomeClube);

    frm.reset();
    frm.inNomeClube.focus();

    frm.btListar.dispatchEvent(new Event('click'));
});

frm.btListar.addEventListener('click', () => {
    if(vetNomeClube.length == 0){
        alert('Nao existe clubes na lista!');
        return;
    }

    let lista = 'Lista de todos os times:\n';

    for(const nomeClubes of vetNomeClube){
        lista += `${nomeClubes}\n`;
    }

    resp.innerText = lista;
});

frm.btMostrarTabela.addEventListener('click', (e) => {
    if(vetNomeClube.length == 0){
        alert('Nao existe clubes na lista!');
        return;
    } else if(vetNomeClube.length % 2 !== 0){
        alert('Erro - Numero total de times precisa ser par para que haja confrontos entre todos ao mesmo tempo!');
        return;
    }

    let tabela = 'Confrontos:\n';

    const totalClubes = vetNomeClube.length;

    for (let i = 0; i < totalClubes / 2; i++) {
        tabela += `${vetNomeClube[i]} x ${vetNomeClube[totalClubes - 1 - i]}\n`;
    }

    resp.innerText = tabela;
});


// Explicando a logica
// vetNomeClube[i] é vetNomeClube[0] = "Clube A".
// vetNomeClube[totalClubes - 1 - i] é vetNomeClube[6 - 1 - 0] = vetNomeClube[5] = "Clube F".
// Confronto: "Clube A x Clube F".
