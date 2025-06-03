let cpf = prompt("Digite o seu cpf: ");

const digitosVerificadores = 2;
let val = 10;

const verificadorCpf = (cpf) => {
  let cpfLimpo = cpf.replace(/\D+/g, "");
  cpfArray = Array.from(cpfLimpo);

  for (let i = 0; i < digitosVerificadores; i++) {
    cpfArray.reduce((ac, valor) => val * valor, 0, --val)
  }
};
