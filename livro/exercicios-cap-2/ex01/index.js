//Busca a referecia no html
const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const reps2 = document.querySelector('h4');

frm.addEventListener('submit', (e) =>{
    //Obetem o coteudo no html
    const nomeFilme = frm.filme.value;
    const duracaoMinutos = Number(frm.duracao.value);

    //Processamento de dados
    const tempoHoras = Math.floor(duracaoMinutos/60);
    const tempoMinutos = duracaoMinutos % 60;

    //Saida de dados
    resp1.innerText = `${nomeFilme}`;
    reps2.innerText = `${tempoHoras} hora(s) ${tempoMinutos} minuto(s)`

    //Evita envio
    e.preventDefault();
})