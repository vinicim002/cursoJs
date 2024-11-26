const frm = document.querySelector('form');  //Obtendo elementos da pagina
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault() //Evitar envio do formulario

  const mensagem = frm.inMensagem.value;
  let letrasPares = "";
  let letrasImpares = "";

  for(let i = 0; i < mensagem.length; i ++){
    if((i + 1) % 2 === 0){
      letrasPares += mensagem.charAt(i); //Resolvendo a parte Par
    } else {
      letrasImpares += mensagem.charAt(i); //Resolvendo a parte Impar
    }
  }

  //Concatena Tudo 
  const resposta = letrasPares + letrasImpares;
  resp.innerText = resposta;
})