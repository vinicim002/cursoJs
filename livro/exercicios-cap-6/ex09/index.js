const frm = document.querySelector("form");
const resp = document.querySelector('pre');

const minAprovacao = Number(prompt("Numero de acertos para aprovacao:"));

const vetCandidato = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeCandidato = frm.inCandidatos.value;
    const numeroAcertos = Number(frm.inNumeroCandidatos.value);

    vetCandidato.push({nomeCandidato, numeroAcertos});

    let lista = "";

    lista += `${vetCandidato}\n`;

    resp.innerText = lista;

    frm.reset();
    frm.inCandidatos.focus();

    frm.btListar.dispatchEvent(new Event('click'));
});

