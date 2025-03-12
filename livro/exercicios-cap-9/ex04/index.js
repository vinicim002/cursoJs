const frm = document.querySelector("form");
const respServicosPendentes = document.querySelector("#servicosPendentes");
const respInfoServico = document.querySelector("#infoServico");

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inServico = frm.inServico.value;

    if(localStorage.getItem("listaDeServicos")){
        
        const vetServicos = localStorage.getItem("listaDeServicos").split(";");

        vetServicos.push(inServico);

        localStorage.setItem("listaDeServicos", vetServicos.join(";"));
    } else {
        localStorage.setItem("listaDeServicos",inServico);
    }

    mostrarInfo();

    frm.reset();
    frm.inServico.focus();
})


frm.btnExecutarServico.addEventListener("click", () => {
    if(localStorage.getItem("listaDeServicos")) {
        const vetServicos = localStorage.getItem("listaDeServicos").split(";");

        vetServicos.shift();

        if(vetServicos.length === 0) {
            localStorage.removeItem("listaDeServicos");
        } else {
            localStorage.setItem("listaDeServicos", vetServicos.join(";"));
        }

        //Atualizo quando executo um servico
        mostrarInfo();
    } else {
        alert("Nao exitem servicos para serem executados...");
    }
}) 

const mostrarInfo = () => {
    if(!localStorage.getItem("listaDeServicos")) {
        respServicosPendentes.innerText = "0";
        respInfoServico.innerText = "Nenhum serviço pendente";
        return
    } else {
        const vetServicos = localStorage.getItem("listaDeServicos").split(";");

        respServicosPendentes.innerText = `${vetServicos.length}`

        respInfoServico.innerText = vetServicos.length > 0 ? vetServicos[0] : "Nenhum serviço pendente";
    }
}

window.addEventListener("load", mostrarInfo);