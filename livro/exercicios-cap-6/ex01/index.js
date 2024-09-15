const frm = document.querySelector('form');
const respNome = document.querySelector('span');
const respList = document.querySelector('pre');

const paciente = [] 

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;
    paciente.push(nome); //Vai puchar o nome q receber la no form e vai add ao vetor paciente
                        //Exemplo: Digitaram Vanessa no forms pega o paciente.push(nome) e add ao vetor paciente => paciente[Vanessa]
    let lista = '';

    for (let i=0; i < paciente; i++){
        lista += `${i + 1}. ${paciente[i]}\n`;
    }

    respList.innerText = lista;
    frm.inPaciente.value = ''; //Limpa conteudo
    frm.inPaciente.focus();
});

