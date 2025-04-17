const frm = document.querySelector('form');
const resp = document.getElementsByClassName('result');

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    //Preciso pegar esse nome e jogar dentro de um array onde quando ele identificar um espaco vai ser um novo indice 
    const arrayNome = nome.trim().split(" ");
    console.log(arrayNome);

    linha(arrayNome);

    frm.focus();
    frm.reset();
})

//Tenho q pegar esse array e para cada indicie mostrar em uma nova linha (h3)
const linha = (arrayNome) => {
    const container = resp[0];
    container.innerHTML = ''; // limpa o conteúdo anterior
  
    arrayNome.map((elem) => {
      const h3 = document.createElement('h3'); // cria o elemento
      h3.textContent = elem; // define o texto
      h3.style.color = gerarCores();
      container.appendChild(h3); // adiciona no container
    });
  };
  
//Funcao para gerar as cores aleatorias em hexadecimal
//1 2 3 4 5 6 7 8 9 A B C D E F
//FFFFFF
const gerarCores = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let corHex = '#';
    

    for(let i=0 ; i<6; i++){
        corHex += hex[Math.floor(Math.random() * hex.length)];
    }

    return corHex;
}