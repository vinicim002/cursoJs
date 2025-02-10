const frm = document.querySelector('form');
const resp = document.querySelector('pre');

const retornarTracos = (nome) => {
    let tracos = ""; //Armazenar os tracos
    for (let i = 0; i < nome.length; i++){
        tracos += nome[i] === " " ? " " : "-"; //Verifica letra por letra se existe espaco ou nao
    };

    return tracos;
};

const categorizarAluno = (idade) => {
    let categoria = ""
    if (idade <= 12) {
        categoria = "Infantil";
    } else if (idade <= 18) {
        categoria = "Juvenil";
    } else {
        categoria = "Adulto";
    };
    return categoria;
};

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeDoAluno = frm.inNomeAluno.value;
    const idadeAluno = Number(frm.inIdade.value);

    resp.innerText = `${nomeDoAluno}\n${retornarTracos(nomeDoAluno)}\nCategoria: ${categorizarAluno(idadeAluno)}`;
});