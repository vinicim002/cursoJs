const frm = document.querySelector('form');
const respNome = document.querySelector('span');
const respList = document.querySelector('pre');

const pacientes = [] 

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;
    pacientes.push(nome); //Vai puchar o nome q receber la no form e vai add ao vetor paciente
                        //Exemplo: Digitaram Vanessa no forms pega o paciente.push(nome) e add ao vetor paciente => paciente[Vanessa]
    let lista = "";

    for (let i=0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`;
    }

    respList.innerText = lista;
    frm.inPaciente.value = ''; //Limpa conteudo
    frm.inPaciente.focus();
});

frm.btnUrgencia.addEventListener('click', () => {
    if (!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em carater de urgencia");
        frm.inPaciente.focus();
        return;
    }
    
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);
    let lista = "";
    pacientes.forEach((paciente, i) => lista += `${i + 1}. ${paciente}\n`);
    respList.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

frm.btnAtender.addEventListener('click', () => {
    if(pacientes.length == 0){
        alert('Nao ha pacientes na lista de espera');
        frm.inPaciente.focus();
        return;
    }

    const atender = pacientes.shift();
    respNome.innerText = atender;
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respList.innerText = lista;
})

