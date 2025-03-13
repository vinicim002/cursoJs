const frm = document.querySelector("form");
const divQuadro = document.querySelector("#divQuadro");

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const tarefa = frm.inTarefa.value;

    const h5 = document.createElement("h5");
    const texto = document.createTextNode(tarefa);

    h5.appendChild(texto);
    divQuadro.appendChild(h5);

    frm.reset();
    frm.inTarefa.focus();
});

frm.btSelecionar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll("h5");

    if(tarefas.length === 0){
        alert("Nao ha tarefas para selecionar");
        return;
    }

    let aux = -1;

    for(let i = 0; i < tarefas.length; i++) {
        if(tarefas[i].className === "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal";
            aux = i;
            break;
        }
    }

    if(aux === tarefas.length - 1){
        aux = -1;
    }

    tarefas[aux + 1].className = "tarefa-selecionada";
})