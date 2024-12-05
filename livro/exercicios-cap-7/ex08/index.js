const frm = document.querySelector('form');
const resp = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const dataInfracao = frm.inData.value;
  const valorMulta = parseFloat(frm.inValor.value);

  // Criar uma nova data a partir da data de infração
  const partes = dataInfracao.split("-");
  const dataVenc = new Date(partes[0], partes[1] - 1, partes[2]);

  // Adicionar 90 dias à data de vencimento
  dataVenc.setDate(dataVenc.getDate() + 90);

  const dia = dataVenc.getDate();
  const mes = dataVenc.getMonth() + 1;
  const ano = dataVenc.getFullYear();

  const comDesconto = valorMulta * 0.80;

  resp.innerText = "Data Limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;
  resp2.innerText = "Valor com Desconto R$: " + comDesconto.toFixed(2);
});