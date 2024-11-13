const frm = document.querySelector('form');
const resp = document.querySelector('span');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const funcionario = frm.inFuncionario.value;
    const nomeDividido = funcionario.split(" ");
    let email = "";
    const tam = nomeDividido.length;

    for(let i = 0; i < tam - 1; i++){
        email += nomeDividido[i].charAt(0);
    }

    email += nomeDividido[tam - 1] + "@empresa.com.br";
    resp.innerText = ` ${email.toLowerCase()}`;
});