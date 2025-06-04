// let cpf = prompt("Digite o seu CPF:");

// const verificadorCpf = (cpf) => {
//   // Remove caracteres que não são dígitos
//   const cpfLimpo = cpf.replace(/\D+/g, '');

//   // Cria um array com os 9 primeiros dígitos do CPF
//   const cpfArray = Array.from(cpfLimpo).map(Number).slice(0, 9);

//   // Função para gerar cada dígito verificador (primeiro e segundo)
//   const gerarDigito = (arrayBase) => {
//     // O peso começa no tamanho do arrayBase + 1
//     const pesoInicial = arrayBase.length + 1;

//     // Faz o cálculo da soma dos produtos usando reduce
//     const soma = arrayBase.reduce((total, num, index) => {
//       return total + num * (pesoInicial - index);
//     }, 0);

//     // Calcula o dígito: (soma * 10) % 11, se der 10 ou mais, vira 0
//     const digito = (soma * 10) % 11;
//     return digito === 10 ? 0 : digito;
//   };

//   // Gera o primeiro dígito verificador
//   const digito1 = gerarDigito(cpfArray);

//   // Gera o segundo dígito com base nos 9 originais + o primeiro dígito
//   const digito2 = gerarDigito([...cpfArray, digito1]);

//   // Compara os dois dígitos com os últimos dois do CPF informado
//   const cpfFinal = cpfArray.join('') + digito1 + digito2;
//   const cpfInformado = cpfLimpo.slice(0, 11);

//   if (cpfFinal === cpfInformado) {
//     alert("CPF válido!");
//   } else {
//     alert("CPF inválido!");
//   }
// };

// verificadorCpf(cpf);

//Resolucao da aula

// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}
