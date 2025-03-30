const frm = document.querySelector("form");
const btnSelecionar = document.querySelector("#selecionar");

const respLista = document.querySelector(".tarefasAdicionadas");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inTarefa = frm.inTarefa.value;

    const h5 = document.createElement("h2");
    const texto = document.createTextNode(inTarefa);

    respLista.appendChild(h5);
    h5.appendChild(texto);


    frm.reset();
    frm.inTarefa.focus();
});

//pecorrer a lista  
btnSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h2");

    if (tarefas.length === 0) {
        alert("Não existem tarefas para selecionar. Adicione uma para que você consiga selecionar!");
        return; // Impede a continuação da execução
    }

    let aux = -1; // Variável auxiliar para saber qual linha está selecionada

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className === "tarefa-selecionado") {
            tarefas[i].className = "tarefa-normal";
            aux = i;
            break; // Interrompe o loop corretamente
        }
    }
});


