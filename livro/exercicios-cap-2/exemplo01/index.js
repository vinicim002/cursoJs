//Cria referencia ao form e ao elemento h3 (onde sera exibida a resposta)
const frm = document.querySelector('form');
const resp = document.querySelector('h3');

//Cria um "Ouvinte" de evento, acionado quando o botao submit for clicado

frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value; //Obtem o nome digitado no form 
    resp.innerText = `Ola ${nome}`; //Exibe a resposta do programa
    e.preventDefault() //Evita envio do form 
})

//Algumas Funcoes matematicas

//Math.abs(num) => transforma um numero negativo em positivo 
//Math.ceil(num) => Arredonda para cima 
//Math.floor(num) => Arredonda para baixo
//Math.pow(base, exp) => retorna base elevado ao expoente
//Math.random() => Retorna um numero aleatorio entre 0 e 1
//Math.round(num) => Arredonda para o valor inteiro mais proximo. Se for meno que .5 arredonda para baixo 4.4 = 3 se for maior arredonda para cima 4.5 = 5
//Math.sqrt(num) => Raiz quadrada