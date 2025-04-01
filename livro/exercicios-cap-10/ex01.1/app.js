const frm = document.querySelector("form");
const btnSelecionar = document.querySelector("#selecionar");
const btnRetirar = document.querySelector("#retirar");
const btnGravar = document.querySelector("#gravar");

const respLista = document.querySelector(".tarefasAdicionadas");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inTarefa = frm.inTarefa.value;

    const h2 = document.createElement("h2");
    const texto = document.createTextNode(inTarefa);

    respLista.appendChild(h2);
    h2.appendChild(texto);
    h2.classList = "tarefa-normal";


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

    if (aux == tarefas.length -1) {
        aux = -1;
    }

    tarefas[aux + 1].className = "tarefa-selecionado";
});


btnRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h2");

    if (tarefas.length === 0) {
        alert("Não existem tarefas para se retirar!");
        return;
    }

    tarefas.forEach((elem) => {
        if (elem.classList.contains("tarefa-selecionado")) {
            if (confirm(`Confirma exclusão de "${elem.innerText}"?`)) {
                elem.remove();
            }
        }
    });
});


btnGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h2");

    if(tarefas.length === 0) {
        alert("Nao ha tarefas para serem salvas");
        return;
    }

    let dados = "";

    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";";
    })

    localStorage.setItem("tarefasDoDia", dados.slice(0, -1));

    if(localStorage.getItem("tarefasDoDia")){
        alert("Tarefas Salva!");
    }
});

window.addEventListener("load", () => {
    let dados = [];

    if (localStorage.getItem("tarefasDoDia")) {
        dados = localStorage.getItem("tarefasDoDia").split(";");
    }

    dados.forEach(dado => {
        const h2 = document.createElement("h2");
        const texto = document.createTextNode(dado);

        respLista.appendChild(h2);
        h2.appendChild(texto);
        h2.classList.add("tarefa-normal");
    });
});



