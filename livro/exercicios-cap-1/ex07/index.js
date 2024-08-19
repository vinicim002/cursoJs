const conta = Number(prompt('Qual o valor da conta:'));
const numClientes = Number(prompt('Quantos irao pagar:'));
const valorPorCliente = conta/numClientes;

alert(`Valor da conta R$: ${conta.toFixed(2)}\nNumero de clientes: ${numClientes}\nValor por cliente R$: ${valorPorCliente.toFixed(2)}`);