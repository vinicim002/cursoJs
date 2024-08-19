const valor = Number(prompt('Valor do jantar: '));
const taxa = valor * 10 / 100;
const valorTotal = valor + taxa;

alert(`Valor do jantar R$: ${valor.toFixed(2)}\nValor da taxa R$: ${taxa.toFixed(2)}\nValor a pagar R$: ${valorTotal.toFixed(2)}`);