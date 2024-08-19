const valorProduto = Number(prompt("Qual o valor do produto:"));
const valorVista = valorProduto - (valorProduto * 0.10);
const valorParcelado = valorProduto/3;

alert(`Preco R$: ${valorProduto.toFixed(2)}\nA Vista R$: ${valorVista.toFixed(2)}\nOu 3x de R$: ${valorParcelado.toFixed(2)}`);