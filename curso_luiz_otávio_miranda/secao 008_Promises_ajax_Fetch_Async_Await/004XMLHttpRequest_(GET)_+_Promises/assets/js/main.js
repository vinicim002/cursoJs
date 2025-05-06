// Essa função faz o papel do telefone. Ela liga para o servidor e pede uma página.
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // Aqui criamos o "telefone"
        xhr.open(obj.method, obj.url, true); // Abrimos a ligação e dizemos para onde queremos ligar
        xhr.send(); // Enviamos o pedido

        // Quando a resposta chega...
        xhr.addEventListener('load', () => {
            // Se a resposta foi boa (código entre 200 e 299), aceitamos e mostramos
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // Passamos a resposta para quem pediu
            } else {
                reject(xhr.statusText); // Se deu erro, avisamos o erro
            }
        });
    });
};

// Quando clicamos em algo na página...
document.addEventListener('click', e => {
    const el = e.target; // Pegamos o que clicamos
    const tag = el.tagName.toLowerCase(); // Descobrimos se é um link

    if (tag === 'a') { // Se clicamos em um link...
        e.preventDefault(); // Impedimos que ele vá para outra página
        carregaPagina(el); // E chamamos uma função para carregar o conteúdo daquele link
    }
});

// Esta função carrega a página do link sem sair da página atual
async function carregaPagina(el) {
    const href = el.getAttribute('href'); // Pegamos para onde o link iria

    const objConfig = {
        method: 'GET', // Dizemos que queremos "pegar" a página
        url: href // Dizemos qual é o endereço da página
    };

    try {
        const response = await request(objConfig); // Esperamos a resposta do servidor
        carregaResultado(response); // Colocamos a resposta dentro da página
    } catch(e) {
        console.log(e); // Se deu erro, mostramos no console
    }
}

// Aqui pegamos um lugar da tela com a classe 'resultado' e colocamos o conteúdo lá
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado'); // Procuramos a caixinha onde vamos mostrar
    resultado.innerHTML = response; // Colocamos o conteúdo lá dentro
}
