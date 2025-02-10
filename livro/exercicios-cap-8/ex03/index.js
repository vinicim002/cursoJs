const frm = document.querySelector('form');
const resp = document.querySelector('pre');

const validarNome = (nome) => {
    let validacao = true;

    if(nome === ""){ //Verifico se a minha string n esta vazia
        validacao = false;
    };

    if(nome.trim() === ""){ //Verifico se existe algum espaco antes ou no fim
        validacao = false; 
    };

    if(nome.length < 3 || nome.length > 50){ //Declaro q minha string tem q ter pelo menos 3 caracteres e no maximo 50
        validacao = false;
    };

    if(!/^[a-zA-Z\s]+$/.test(nome)) { //Faco uma regex para dizer que o input aceita somente letras
        validacao = false;
    };

    const partes = nome.split(" "); //Vejo quantos parte tenha a minha string

    if(partes.length < 2) { //Delcaro q ela n poder ser menor q duas partes 
        validacao = false;
    };

    return validacao;
};

const obterSobrenome = (nome) => {
    const sobrenome = nome.split(" "); //Vejo quantos parte tenha a minha string

    return sobrenome[sobrenome.length - 1].toLowerCase(); //Declaro que qro obter a ultima parte da minha string
};

const contarVogais = (nome) => {
    let qtdVogais = 0;

    for(let i = 0; i < nome.length; i++){
        if("aeiou".includes(nome.charAt(i).toLowerCase())) {
            qtdVogais ++;
        } ; 
    };

    return String(qtdVogais).padStart(2, "0");
};


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;

    resp.innerText = `Senha Inicial: ${obterSobrenome(nome)+contarVogais(nome)}`;
});