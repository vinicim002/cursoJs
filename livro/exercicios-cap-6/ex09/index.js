const frm = document.querySelector("form");
const resp = document.querySelector('pre');

const vetCandidato = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeCandidato = frm.inCandidatos.value;
    const numeroAcertos = Number(frm.inNumeroCandidatos.value);

    vetCandidato.push({nomeCandidato, numeroAcertos});

    let lista = "";

    for(const candidatos of vetCandidato){
        const {nomeCandidato, numeroAcertos} = candidatos;
        // const {nomeCandidato, numeroAcertos} = candidatos:
        // Isso é uma desestruturação de objeto. Significa que a cada iteração, o objeto candidatos tem suas propriedades extraídas e armazenadas nas variáveis nomeCandidato e numeroAcertos. Isso pressupõe que o objeto candidatos tem as propriedades nomeCandidato (nome do candidato) e numeroAcertos (quantidade de acertos desse candidato).
        lista += `${nomeCandidato} - ${numeroAcertos} acertos\n`; 
    }
    
    resp.innerText = lista;

    frm.reset();
    frm.inCandidatos.focus();
});

frm.btListar.addEventListener('click', () => {
    if(vetCandidato.length == 0){
        alert("Nao existe candidatos cadastrados");
        return;
    }

    let lista = "";
    
    for(const candidatos of vetCandidato){
        const {nomeCandidato, numeroAcertos} = candidatos;
        lista += `${nomeCandidato} - ${numeroAcertos} acertos\n`;
    }

    resp.innerText = lista;
})

frm.btAprovados.addEventListener('click', () => {
    if(vetCandidato.length == 0){
        alert("Nao existe candidatos cadastrados");
        return;
    }

    const minAprovacao = Number(prompt("Numero de acertos para aprovacao:"));

    if (minAprovacao == 0 || isNaN(minAprovacao)){
        alert("Número inválido");
        return;
    }

    const copia = [...vetCandidato];

    copia.sort((a, b) => {a.numeroAcertos - b.numeroAcertos});
    copia.reverse();

    let aprovados = "";

    for(const candidatos of copia){
        if(candidatos.numeroAcertos >= minAprovacao){
            aprovados += `${candidatos.nomeCandidato} - ${candidatos.numeroAcertos} acertos\n`
        }
    }


    if(aprovados == ""){
        resp.innerText = "Nao ha aprovados!";
    } else {
        resp.innerText = aprovados;
    }
});

