const frm = document.querySelector('form');
const resp = document.querySelector('span');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeDoParticipante = frm.inNome.value.trim();

    if (!nomeDoParticipante.includes(" ")) {
        alert("Informe o nome completo...");
        return;
    }

    const priEspaco = nomeDoParticipante.indexOf(" ");
    const ultEspaco = nomeDoParticipante.lastIndexOf(" ");

    const cracha = nomeDoParticipante.substr(0, priEspaco) + " " + nomeDoParticipante.substr(ultEspaco);

    resp.innerText = ` ${cracha}`;
});
