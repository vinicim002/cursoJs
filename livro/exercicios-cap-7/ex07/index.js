const frm = document.querySelector('form'); //Obtendo conteudo
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    e.preventDefault() //Evitando envio do forms

    const frase = frm.inFrase.value;
    const novaFrase = frase.replace(/ /g, "").toLowerCase(); // Uso o método replace com uma expressão regular para remover todos os espaços da string.
    // Em seguida, utilizo o método toLowerCase para ignorar diferenças entre letras maiúsculas e minúsculas.
    const tam = novaFrase.length;
    let isPalindromo = true; 

    for(let i = 0; i < tam/2; i++){ //Verifico ate a metade da string
        if(novaFrase.charAt(i) !== novaFrase.charAt(tam - i - 1)){
            isPalindromo = false; //Se as letras n forem iguais eh false
            break; //Saio do loop
        } 
    }

    // Usadno um operador ternario 
    resp.innerText = `${frase.toUpperCase()} ${isPalindromo ? 'eh' : 'nao eh'} um Palindromo`;
});