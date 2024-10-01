const frm = document.querySelector('form');
const resp = document.querySelector('pre');

const vet_crianca = [];

// Adiciona a criança ao vetor
frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome_crianca = frm.inNome.value;
    const idade_crianca = Number(frm.inIdade.value);

    vet_crianca.push({nome_crianca, idade_crianca});

    frm.reset(); // Limpa o formulário
    frm.inNome.focus();

    // Atualiza a lista automaticamente
    frm.btLista.dispatchEvent(new Event("click")); // Dispara o evento de clique no botão "Listar"
});

// Lista todas as crianças
frm.btLista.addEventListener('click', () => {
    if(vet_crianca.length == 0) {
        alert("Não há crianças na lista");
        return;
    }
    let lista = "Lista de Crianças:\n";
    for(const crianca of vet_crianca) {
        const {nome_crianca, idade_crianca} = crianca;
        lista += `${nome_crianca} - ${idade_crianca} anos\n`;
    }
    resp.innerText = lista;
});

// Exibe o resumo ordenado por idade
frm.btResumo.addEventListener('click', () => {
    if(vet_crianca.length == 0) {
        alert("Não há crianças na lista");
        return;
    }

    // Copia o vetor e ordena por idade
    const copia = [...vet_crianca];
    copia.sort((a, b) => a.idade_crianca - b.idade_crianca);

    let resumo = "";
    let aux = copia[0].idade_crianca;
    let nomes = [];

    for (const crianca of copia) {
        const {nome_crianca, idade_crianca} = crianca;
        if (idade_crianca == aux) {
            nomes.push(nome_crianca);
        } else {
            resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
            resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
            resumo += `(${nomes.join(", ")})\n\n`;
            aux = idade_crianca;
            nomes = [nome_crianca];
        }
    }

    // Adiciona o último grupo de crianças ao resumo
    resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
    resumo += `${((nomes.length / copia.length) * 100).toFixed(2)}%\n`;
    resumo += `(${nomes.join(", ")})\n\n`;

    resp.innerText = resumo;
});
