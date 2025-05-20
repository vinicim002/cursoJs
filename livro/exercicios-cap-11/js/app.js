const frm = document.querySelector("form");
const respLista = document.querySelector('pre');
const respCavalo = document.querySelector('#outCavalo');

const cavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];
const apostas = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const cavalo = Number(frm.inCavalo.value);
    const valor = Number(frm.inAposta.value);

    apostas.push({cavalo, valor});

    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

    for (const aposta of apostas) {
        lista += `Num ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += `- R$: ${aposta.valor.toFixed(2)}\n`;
    }

    respLista.innerText = lista;

    frm.reset()
    frm.inCavalo.focus();
});