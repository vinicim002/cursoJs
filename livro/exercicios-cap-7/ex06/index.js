const frm = document.querySelector('form');  // Obtendo elementos da página
const resp = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar envio do formulário

  const mensagem = frm.inMensagem.value;
  let letrasPares = "";
  let letrasImpares = "";

  // Separa os caracteres em pares e ímpares
  for (let i = 0; i < mensagem.length; i++) {
    if ((i + 1) % 2 === 0) {
      letrasPares += mensagem.charAt(i); // Adiciona os caracteres em posição par
    } else {
      letrasImpares += mensagem.charAt(i); // Adiciona os caracteres em posição ímpar
    }
  }

  const resposta = letrasPares + letrasImpares;
  resp.innerText = resposta;
});

frm.btnDescripto.addEventListener('click', () => {
  //Criando um alerta caso o usuario nao digite nada
  if (!frm.checkValidity()) {
    alert("Informe a mensagem criptografada");
    frm.inMensagem.focus();
    return;
  }

  const mensagemCriptografada = frm.inMensagem.value;
  const metade = Math.floor(mensagemCriptografada.length / 2);
  let resposta = "";

  // Verifica se o comprimento da mensagem é par ou ímpar
  if (mensagemCriptografada.length % 2 === 0) {
    // Para comprimento par
    for (let i = 0; i < metade; i++) {
      resposta += mensagemCriptografada.charAt(metade + i); // Adiciona caractere do grupo de ímpares
      resposta += mensagemCriptografada.charAt(i); // Adiciona caractere do grupo de pares
    }
  } else {
    // Para comprimento ímpar
    for (let i = 0; i < metade; i++) {
      resposta += mensagemCriptografada.charAt(metade + i); // Adiciona caractere do grupo de ímpares
      resposta += mensagemCriptografada.charAt(i); // Adiciona caractere do grupo de pares
    }
    resposta += mensagemCriptografada.charAt(mensagemCriptografada.length - 1); // Adiciona o último caractere sozinho
  }

  resp.innerText = resposta;
});
